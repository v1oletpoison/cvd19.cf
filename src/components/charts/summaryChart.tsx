import React from 'react';
import {
  VictoryChart, VictoryLegend, VictoryLine, VictoryAxis, VictoryLabel,
} from 'victory';
import { PeriodSummary } from '../../types';
import Theme from '../shared/layout/chartTheme';

const SummaryChart = ({ data }: { data: PeriodSummary[] }) => (
  <VictoryChart
    theme={Theme}
    height={240}
    width={600}
    minDomain={{ y: 0 }}
    domainPadding={{ y: 30 }}
  >
    <VictoryLegend
      x={90}
      y={20}
      itemsPerRow={1}
      gutter={20}
      centerTitle
      style={{
        labels: {
          fontSize: 6,
          fontFamily: `"Ubuntu", "Droid Sans Mono",
          "Liberation Mono", Menlo, Courier, monospace`,
        },
      }}
      data={[
        { name: 'No Outbreak', symbol: { fill: '#cccccc' } },
        { name: 'Small Outbreak', symbol: { fill: '#eb2f96' } },
        { name: 'Losing', symbol: { fill: '#f5222d' } },
        { name: 'Flattening the Curve', symbol: { fill: '#fa8c16' } },
        { name: 'Crushing the Curve', symbol: { fill: '#fadb14' } },
        { name: 'Winning', symbol: { fill: '#13c2c2' } },
        { name: 'Won', symbol: { fill: '#52c41a' } },
      ]}
    />
    <VictoryAxis
      fixLabelOverlap
      style={{
        tickLabels: { fontSize: 6 },
      }}
    />
    <VictoryAxis
      dependentAxis
      style={{
        tickLabels: { fontSize: 6 },
      }}
    />
    <VictoryLabel
      text="source: JHU & CSSE"
      x={495}
      y={60}
      style={{
        fontSize: 6,
        fontFamily: `"Ubuntu", "Droid Sans Mono",
            "Liberation Mono", Menlo, Courier, monospace`,
      }}
    />
    <VictoryLine
      data={data}
      interpolation="monotoneX"
      style={{
        data: { stroke: '#cccccc' },
      }}
      x="endDate"
      y="none"
    />
    <VictoryLine
      data={data}
      interpolation="monotoneX"
      style={{
        data: { stroke: '#eb2f96' },
      }}
      x="endDate"
      y="small"
    />
    <VictoryLine
      data={data}
      interpolation="monotoneX"
      style={{
        data: { stroke: '#f5222d' },
      }}
      x="endDate"
      y="losing"
    />
    <VictoryLine
      data={data}
      interpolation="monotoneX"
      style={{
        data: { stroke: '#fa8c16' },
      }}
      x="endDate"
      y="flattening"
    />
    <VictoryLine
      data={data}
      interpolation="monotoneX"
      style={{
        data: { stroke: '#fadb14' },
      }}
      x="endDate"
      y="crushing"
    />
    <VictoryLine
      data={data}
      interpolation="monotoneX"
      style={{
        data: { stroke: '#13c2c2' },
      }}
      x="endDate"
      y="winning"
      Cartesian
    />
    <VictoryLine
      data={data}
      interpolation="monotoneX"
      style={{
        data: { stroke: '#52c41a' },
      }}
      x="endDate"
      y="won"
    />
  </VictoryChart>
);

export default SummaryChart;
