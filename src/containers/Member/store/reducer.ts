import { MemberState, MemberAction } from './types';
import * as consts from './constants';
import { AppState } from "redux/types";
import { Reducer } from 'redux';

const initState: MemberState = {}

export const memberReducer: Reducer<MemberState, MemberAction> = (state = initState, action: MemberAction) => {
  switch (action.type) {
    default:
      return { ...state };
  }
}

export const memberSelector = (state: AppState) => state.member;