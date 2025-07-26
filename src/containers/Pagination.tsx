import React from 'react';

import { useQueryParams } from '@/common/hooks';

import Pagination from '@/components/Pagination';

interface IProps {
  total: number;
  current: number;
  pageRangeDisplayed?: number;
  isOnlyActiveVisible?: boolean;
  hasLastAndFirstButton?: boolean;
  totalItems?: number;
  showPerPage?: boolean;
  onChangePerPage?: (perPage: number) => void;
  perPage?: number;
  perPageOptions?: number[];
  hidePerPageSelect?: boolean;
  hideGoTo?: boolean;
}

const PaginationContainer: React.FC<IProps> = ({
  total,
  hasLastAndFirstButton,
  current,
  isOnlyActiveVisible,
  totalItems,
  onChangePerPage,
  perPage,
  pageRangeDisplayed,
  showPerPage,
  perPageOptions,
  hidePerPageSelect,
  hideGoTo
}) => {
  const [query, { pushQuery }] = useQueryParams();

  const isMobile = window.matchMedia('(max-width: 992px)').matches;

  return (
    <Pagination
      {...{
        total,
        current,
        hasLastAndFirstButton,
        totalItems,
        onChangePerPage,
        perPage,
        showPerPage,
        perPageOptions,
        hideGoTo,
        hidePerPageSelect,
        pageRangeDisplayed
      }}
      onChange={page => pushQuery({ ...query, page })}
      onChangePerPage={perPage => pushQuery({ ...query, page: 1, perPage })}
      isOnlyActiveVisible={isOnlyActiveVisible || isMobile}
    />
  );
};

export default PaginationContainer;
