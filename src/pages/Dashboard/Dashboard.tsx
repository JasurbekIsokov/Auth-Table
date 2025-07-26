import { isDependantQueryFetching } from '@/common/utils';
import { useList } from '@/modules/dashboard/hooks';
import React, { useEffect, useState } from 'react';

import * as Types from '@/modules/dashboard/types';
import Loader from '@/components/Loader';

interface IProps {}

type GroupedData = Record<string, Record<string, Types.IEntity.Table[]>>;

const Dashboard: React.FC<IProps> = () => {
  const [selectedStartDate, setSelectedStartDate] = useState('2025-07-01');
  const [selectedEndDate, setSelectedEndDate] = useState('2025-07-25');

  const TableListData = useList({
    params: {
      filter: {
        start: selectedStartDate,
        end: selectedEndDate
      }
    }
  });

  const [expanded, setExpanded] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setExpanded(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const groupData = (): GroupedData => {
    const grouped: GroupedData = {};
    TableListData.items.forEach(item => {
      if (!grouped[item.parent]) grouped[item.parent] = {};
      if (!grouped[item.parent][item.category]) grouped[item.parent][item.category] = [];
      grouped[item.parent][item.category].push(item);
    });
    return grouped;
  };

  const formatNum = (val: number | string) => Number(val).toLocaleString('ru-RU', { maximumFractionDigits: 2 });

  const grouped = groupData();

  const calcTotals = (items: Types.IEntity.Table[]) => {
    return items.reduce(
      (acc, curr) => {
        acc.remind_start_amount += curr?.remind_start_amount;
        acc.remind_start_sum += curr?.remind_start_sum;
        acc.remind_income_amount += curr?.remind_income_amount;
        acc.remind_income_sum += curr?.remind_income_sum;
        acc.remind_outgo_amount += curr?.remind_outgo_amount;
        acc.remind_outgo_sum += curr?.remind_outgo_sum;
        acc.remind_end_amount += curr?.remind_end_amount;
        acc.remind_end_sum += curr?.remind_end_sum;
        return acc;
      },
      {
        remind_start_amount: 0,
        remind_start_sum: 0,
        remind_income_amount: 0,
        remind_income_sum: 0,
        remind_outgo_amount: 0,
        remind_outgo_sum: 0,
        remind_end_amount: 0,
        remind_end_sum: 0
      }
    );
  };

  useEffect(() => {
    TableListData.refetch();
  }, [selectedEndDate, selectedStartDate]);

  return (
    <div style={{ marginRight: '20px' }}>
      <label>
        Boshlang'ich sana:{' '}
        <input type="date" value={selectedStartDate} onChange={e => setSelectedStartDate(e.target.value)} />
        <span> </span>
        Oxirgi sana: <input type="date" value={selectedEndDate} onChange={e => setSelectedEndDate(e.target.value)} />
      </label>
      {TableListData.isFetching || TableListData.isLoading ? (
        <Loader minHeight={400} />
      ) : (
        <table border={1} cellPadding={6} style={{ width: '100%', marginTop: '1rem', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f0f0f0' }}>
              <th>+</th>
              <th>Nomi</th>
              <th>Rang</th>
              <th>O'lchov</th>
              <th>Artikul</th>
              <th>Oxirgi narx</th>
              <th colSpan={2}>Boshlang'ich</th>
              <th colSpan={2}>Kirim</th>
              <th colSpan={2}>Chiqim</th>
              <th colSpan={2}>Qolgan</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(grouped).map(([parent, categories]) => {
              const parentKey = `parent-${parent}`;
              const parentItems = Object.values(categories).flat();
              const total = calcTotals(parentItems);
              return (
                <React.Fragment key={parentKey}>
                  <tr style={{ backgroundColor: '#d9e8fb', fontWeight: 'bold' }}>
                    <td onClick={() => toggle(parentKey)} style={{ cursor: 'pointer' }}>
                      {expanded[parentKey] ? '-' : '+'}
                    </td>
                    <td colSpan={5}>{parent}</td>
                    <td>{formatNum(total?.remind_start_amount)}</td>
                    <td>{formatNum(total?.remind_start_sum)}</td>
                    <td>{formatNum(total?.remind_income_amount)}</td>
                    <td>{formatNum(total?.remind_income_sum)}</td>
                    <td>{formatNum(total?.remind_outgo_amount)}</td>
                    <td>{formatNum(total?.remind_outgo_sum)}</td>
                    <td>{formatNum(total?.remind_end_amount)}</td>
                    <td>{formatNum(total?.remind_end_sum)}</td>
                  </tr>
                  {expanded[parentKey] &&
                    Object.entries(categories).map(([cat, items]) => {
                      const catKey = `${parentKey}-cat-${cat}`;
                      const subTotal = calcTotals(items);
                      return (
                        <React.Fragment key={catKey}>
                          <tr style={{ backgroundColor: '#eef6fa' }}>
                            <td onClick={() => toggle(catKey)} style={{ cursor: 'pointer' }}>
                              {expanded[catKey] ? '-' : '+'}
                            </td>
                            <td colSpan={5}>{cat}</td>
                            <td>{formatNum(subTotal?.remind_start_amount)}</td>
                            <td>{formatNum(subTotal?.remind_start_sum)}</td>
                            <td>{formatNum(subTotal?.remind_income_amount)}</td>
                            <td>{formatNum(subTotal?.remind_income_sum)}</td>
                            <td>{formatNum(subTotal?.remind_outgo_amount)}</td>
                            <td>{formatNum(subTotal?.remind_outgo_sum)}</td>
                            <td>{formatNum(subTotal?.remind_end_amount)}</td>
                            <td>{formatNum(subTotal?.remind_end_sum)}</td>
                          </tr>
                          {expanded[catKey] &&
                            items.map((item, i) => (
                              <tr key={item.material_id}>
                                <td>{i + 1}</td>
                                <td>{item?.name}</td>
                                <td>{item?.color || '-'}</td>
                                <td>{item?.unit}</td>
                                <td>{item?.code}</td>
                                <td>{formatNum(item?.last_price)}</td>
                                <td>{formatNum(item?.remind_start_amount)}</td>
                                <td>{formatNum(item?.remind_start_sum)}</td>
                                <td>{formatNum(item?.remind_income_amount)}</td>
                                <td>{formatNum(item?.remind_income_sum)}</td>
                                <td>{formatNum(item?.remind_outgo_amount)}</td>
                                <td>{formatNum(item?.remind_outgo_sum)}</td>
                                <td>{formatNum(item?.remind_end_amount)}</td>
                                <td>{formatNum(item?.remind_end_sum)}</td>
                              </tr>
                            ))}
                        </React.Fragment>
                      );
                    })}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
