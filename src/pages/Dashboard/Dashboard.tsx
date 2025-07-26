import { isDependantQueryFetching } from '@/common/utils';
import { useList } from '@/modules/dashboard/hooks';
import React from 'react';

interface IProps {}

const Dashboard: React.FC<IProps> = () => {
  const TableListData = useList({
    params: {
      filter: {
        start: '2025-07-01',
        end: '2025-07-31'
      }
    }
  });

  if (isDependantQueryFetching(TableListData)) {
    return <div>Loading...</div>;
  }

  console.log(TableListData.items);

  return <div>Statistika</div>;
};

export default Dashboard;
