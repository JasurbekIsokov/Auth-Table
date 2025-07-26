import { useQuery } from '@tanstack/react-query';
import { get } from 'radash';

import * as ListModule from '@/common/modules/list';

import * as Api from '../api.ts';
import * as Mappers from '../mappers.ts';
import * as Types from '../types.ts';

interface IProps {
  params?: ListModule.Types.IEntity.Params;
}

const useList = ({ params }: IProps = {}) => {
  const initialData = { items: [], meta: ListModule.Mappers.Meta() } as Types.IQuery.TableList;
  const paramsWithDefaults = ListModule.Mappers.Params(params);

  const { data = initialData, ...args } = useQuery<Types.IQuery.TableList, string, Types.IQuery.TableList>(
    ['table', 'list'],
    async () => {
      const { data } = await Api.TableList({
        params: paramsWithDefaults
      });

      const items = data?.reduce((prev: any, item: any) => [...prev, Mappers.TableMapper(item)], []);

      const meta = ListModule.Mappers.Meta(get(data, 'meta'));

      return {
        items,
        meta
      };
    },
    { initialData, keepPreviousData: true }
  );

  return { ...args, ...data };
};

export default useList;
