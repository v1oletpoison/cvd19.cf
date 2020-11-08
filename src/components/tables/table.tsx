import React, { useMemo } from "react";
import { useTable } from "react-table";
import { Table as AntTable } from "antd";
import { SummaryTable } from "@types";
import { getPeriodNames, constructData, constructColumns } from "lib";
export const Table = ({
  data,
  periodLength,
  kind,
  order = true,
  variation,
  multiplyer = 1,
}: SummaryTable) => {
  if (!data) {
    return null;
  }
  const periodNames = useMemo(() => getPeriodNames(periodLength), [
    periodLength,
  ]);
  const columns = useMemo(
    () => constructColumns(variation, multiplyer, kind, periodNames),
    [kind, periodNames, variation, multiplyer]
  );

  const table = useTable({ columns, data });
  const { columnData, preparedData } = constructData(
    table,
    kind,
    variation,
    order,
    multiplyer
  );
  return (
    <AntTable
      columns={columnData}
      bordered={true}
      dataSource={preparedData}
      size="small"
      pagination={{ pageSize: 50 }}
      scroll={{ y: 600 }}
    />
  );
};