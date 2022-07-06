import * as consts from "./constants";
import { action } from 'typesafe-actions';
import { EnumTodoFilterType, Todo } from ".";

export const defaultAction = (payload: any) => action(
  consts.DEFAULT,
  payload,
);

export const handleFilter = (filter: EnumTodoFilterType) => action(consts.FILTER, filter);

export const handleSearch = (keyword: string) => action(consts.SEARCH, keyword.trim());

export const handleAdd = (todo: Todo) => action(consts.ADD, todo);

export const handleUpdate = (todo: Todo) => action(consts.UPDATE_ITEM, todo);
