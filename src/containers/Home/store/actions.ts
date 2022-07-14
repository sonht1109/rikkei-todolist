import * as consts from './constants';
import { action } from 'typesafe-actions';
import { EnumTodoFilterType, Todo } from '.';
import { LOCAL_STORAGE_KEY } from 'helpers/constants';

export const defaultAction = (payload: any) => action(consts.DEFAULT, payload);

export const handleFilter = (filter: EnumTodoFilterType) =>
  action(consts.FILTER, filter);

export const handleSearch = (keyword: string) =>
  action(consts.SEARCH, keyword.trim());

export const handleAdd = (todo: Todo) => action(consts.ADD, todo);

export const handleUpdate = (todo: Todo) => action(consts.UPDATE_ITEM, todo);

export const setData = (todos: Todo[]) => action(consts.SET_DATA, todos);

export const handleDelete = (id: string) => action(consts.DELETE_ITEM, id);

export const getTodos = ({
  keyword = '',
  page = 1,
  take = 5,
  filter = EnumTodoFilterType.ALL,
}: {
  keyword?: string;
  page?: number;
  take?: number;
  filter?: EnumTodoFilterType;
}): Todo[] => {
  const members = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '');
  if (members?.data) {
    const data: Todo[] = members.data;
    const start = (page - 1) * take;
    const end = page * take;

    let tmp = data.filter(d =>
      d.title.toLowerCase().includes(keyword.toLowerCase()),
    );

    if (filter === EnumTodoFilterType.ACTIVE) {
      tmp = tmp.filter(d => d.completed === false);
    } else if (filter === EnumTodoFilterType.COMPLETED) {
      tmp = tmp.filter(d => d.completed === true);
    }

    return tmp.slice(start, end)
  }
  return []
}
