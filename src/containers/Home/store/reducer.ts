import { HomeState, HomeAction, EnumTodoFilterType } from './types';
import * as consts from './constants';
import { AppState } from 'redux/types';
import { Reducer } from 'redux';
import { LOCAL_STORAGE_KEY } from 'helpers/constants';
import { isDefined } from 'helpers';

const initState: HomeState = {
  data: [],
  filter: EnumTodoFilterType.ALL,
  keyword: '',
};

export const homeReducer: Reducer<HomeState, HomeAction> = (
  state = initState,
  action: HomeAction,
) => {
  switch (action.type) {
    case consts.FILTER: {
      return { ...state, filter: action.payload };
    }

    case consts.SEARCH: {
      return { ...state, keyword: action.payload };
    }

    case consts.ADD: {
      const tmp = [...state.data];
      tmp.unshift(action.payload);
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ data: tmp }));
      return { ...state, data: [...tmp] };
    }

    case consts.UPDATE_ITEM: {
      const tmp = [...state.data];
      const index = tmp.findIndex(d => d.id === action.payload.id);
      if (isDefined(index)) {
        tmp[index] = { ...action.payload };
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({ data: tmp }));
        return { ...state, data: [...tmp] };
      }
      return { ...state };
    }

    case consts.SET_DATA: {
      return { ...state, data: [...action.payload] };
    }

    case consts.DELETE_ITEM: {
      let tmp = state.data.filter(d => d.id !== action.payload);
      return { ...state, data: [...tmp] };
    }

    default:
      return { ...state };
  }
};

export const homeSelector = (state: AppState) => state.home;
