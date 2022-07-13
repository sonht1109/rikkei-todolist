import * as actions from './actions';
import { ActionType } from 'typesafe-actions';

export interface MemberState {}

export type MemberAction = ActionType<typeof actions>;

export interface Member {
  name: string;
  age: number;
}
