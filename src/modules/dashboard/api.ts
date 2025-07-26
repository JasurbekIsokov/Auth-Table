import { AxiosPromise } from 'axios';

import config from '@/config';

import * as ListModule from '@/common/modules/list';
import { http } from '@/common/services';

import * as Types from './types';

export const TableList = ({ params }: { params: ListModule.Types.IEntity.Params }): AxiosPromise<any> =>
  http.request.get(`/reports/reports/materials?sort=name`, { params: ListModule.Mappers.Request(params) });
