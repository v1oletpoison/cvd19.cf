/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Table, Tag } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { TableT } from '../../../types';
import calcTagstyle from '../../../utilities/calCcolor';

const ATable = ({ table }: TableT, order: Boolean) => {
  const preparedData = table.data.map((e, i) => ({
    key: i,
    name: e.name,
    'periods[2]': e.periods[2].newDeaths,
    rate2: e.periods[2].status,
    'periods[1]': e.periods[1].newDeaths,
    rate1: e.periods[1].status,
    'periods[0]': e.periods[0].newDeaths,
    rate0: e.periods[0].status,
  }));
  // console.log(table, order);
  const columns: ColumnsType[] = [
    {
      title: table.columns[0].Header,
      dataIndex: table.columns[0].id,
      defaultSortOrder: 'ascend',
      sorter: (a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) { return -1; }
        if (a.name.toLowerCase() > b.name.toLowerCase()) { return 1; }
        return 0;
      },
    },
    {
      title: table.columns[1].Header,
      dataIndex: 'periods[2]',
      render: (text, row, index) => (
        <Tag
          color={calcTagstyle(preparedData[index].rate2)}
          key={index}
        >
          {text}
        </Tag>
      ),
    },
    {
      title: table.columns[2].Header,
      dataIndex: 'periods[1]',
      render: (text, row, index) => (
        <Tag
          color={calcTagstyle(preparedData[index].rate1)}
          key={index}
        >
          {text}
        </Tag>
      ),
    },
    {
      title: table.columns[3].Header,
      dataIndex: 'periods[0]',
      render: (text, row, index) => (
        <Tag
          color={calcTagstyle(preparedData[index].rate0)}
          key={index}
        >
          {text}
        </Tag>
      ),
      sortDirections: ['descend', 'ascend'],
      sorter: (a, b) => a.newDeaths - b.newDeaths,
    },
  ];

  return (
    <Table
      columns={columns}
      bordered
      dataSource={preparedData}
      size="small"
      pagination={{ pageSize: 30 }}
      scroll={{ y: 480 }}
    />
  );
};
export default ATable;
