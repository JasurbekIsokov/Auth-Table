import { get } from 'radash';

import config from '@/config';

import * as Types from './types';

export const Meta = (item?: Types.IApi.Meta): Types.IEntity.Meta => ({
  current: Number(get(item, 'current_page')) ? Number(get(item, 'current_page')) : 1,
  perPage: get(item, 'per_page') || config.list.perPage,
  totalItems: get(item, 'total') || 0,
  totalPages: get(item, 'last_page') || 0
});

export const Params = (params?: any): Types.IEntity.Params => ({
  filter: get(params, 'filter') || {},
  page: get(params, 'page') || 1,
  perPage: get(params, 'perPage') || config.list.perPage,
  sort: {
    direction: get(params, 'sort.direction'),
    key: get(params, 'sort.key')
  }
});

export const Param = (params?: any): Types.IEntity.Params => ({
  sort: {
    direction: get(params, 'sort.direction') || 'asc',
    key: get(params, 'sort.key') || 'id'
  }
});

export const Request = (params?: Types.IEntity.Params): Types.IApi.Request => {
  return {
    ...params?.filter,
    orderBy: params?.sort?.key || undefined,
    page: Number(params?.page) && Number(params?.page) > 0 ? Number(params?.page) : 0,
    limit: Number(params?.perPage) && Number(params?.perPage) > 0 ? Number(params?.perPage) : config.list.perPage,
    sortOrder: ['asc', 'desc'].includes(params?.sort?.direction as string)
      ? (params?.sort?.direction as 'desc')
      : undefined
  };
};
