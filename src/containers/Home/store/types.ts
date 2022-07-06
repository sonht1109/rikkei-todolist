import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export enum EnumTodoFilterType {
  ALL = 'all',
  ACTIVE = 'active',
  COMPLETED = 'completed'
}

export interface Todo {
  member: string;
  title: string;
  desc: string;
  active: boolean;
  completed: boolean;
  createdAt: string;
  id: string;
}

export interface HomeState {
  data: Todo[];
  filter: EnumTodoFilterType;
  keyword: string;
};


export type HomeAction = ActionType<typeof actions>;