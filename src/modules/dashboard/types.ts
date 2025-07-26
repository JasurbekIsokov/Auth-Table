import * as ListModule from '@/common/modules/list';

export declare namespace IApi {
  export namespace List {
    export interface Response {
      data: TableList[];
    }
  }

  export interface Meta {
    empty: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements: number;
    pageable: {
      offset: number;
      pageNumber: number;
      pageSize: number;
      paged: boolean;
    };
    size: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    totalElements: number;
    totalPages: number;
  }

  export interface TableList {}
}

export declare namespace IQuery {
  export interface TableList {
    items: IEntity.Table[];
    meta: ListModule.Types.IEntity.Meta;
  }
}

export declare namespace IEntity {
  export interface Table {
    name: string;
    material_id: number;
    color: string | null;
    code: string;
    last_price: number;
    min_amount: number | null;
    category: string;
    parent: string;
    unit: string;
    width: string;
    remind_start_amount: number;
    remind_start_sum: number;
    remind_income_amount: number;
    remind_income_sum: number;
    remind_outgo_amount: number;
    remind_outgo_sum: number;
    remind_end_amount: number;
    remind_end_sum: number;
  }
}
