import { get } from 'radash';

import config from '@/config';

import * as Types from './types';

export const TableMapper = (item?: any): Types.IEntity.Table => ({
  name: get(item, 'name') || '',
  material_id: get(item, 'material_id') || 0,
  color: get(item, 'color') || '',
  code: get(item, 'code') || '',
  last_price: get(item, 'last_price') || 0,
  min_amount: get(item, 'min_amount') || 0,
  category: get(item, 'category') || '',
  parent: get(item, 'parent') || '',
  unit: get(item, 'unit') || '',
  width: get(item, 'width') || '',
  remind_start_amount: get(item, 'remind_start_amount') || 0,
  remind_start_sum: get(item, 'remind_start_sum') || 0,
  remind_income_amount: get(item, 'remind_income_amount') || 0,
  remind_income_sum: get(item, 'remind_income_sum') || 0,
  remind_outgo_amount: get(item, 'remind_outgo_amount') || 0,
  remind_outgo_sum: get(item, 'remind_outgo_sum') || 0,
  remind_end_amount: get(item, 'remind_end_amount') || 0,
  remind_end_sum: get(item, 'remind_end_sum') || 0
});
