import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { get } from 'radash';

export interface IMethods {
  pushQuery: (params: any) => void;
}

export type TReturn = [query: any, methods: IMethods];
const useQueryParams = (): TReturn => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = useMemo(() => {
    return [...searchParams.entries()].reduce(
      (accum, current) => ({ ...accum, [get(current, '0') as string]: get(current, '1') }),
      {}
    );
  }, [searchParams]);

  const pushQuery = (params: any) => {
    const newQuery = new URLSearchParams();
    Object.entries(params)
      .filter(([_key, value]) => !!value)
      .forEach(([key, value]) => {
        newQuery.set(key, value as string);
      });
    setSearchParams(newQuery);
  };

  return [query, { pushQuery }];
};

export default useQueryParams;
