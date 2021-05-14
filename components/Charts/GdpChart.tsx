import React from "react";
import { Card } from "antd";
import {
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

import styles from "../../styles/Charts.module.css";

const data = [
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "1999-01-01",
    value: "12610.491",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2000-01-01",
    value: "13130.987",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2001-01-01",
    value: "13262.079",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2002-01-01",
    value: "13493.064",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2003-01-01",
    value: "13879.129",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2004-01-01",
    value: "14406.382",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2005-01-01",
    value: "14912.509",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2006-01-01",
    value: "15338.257",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2007-01-01",
    value: "15626.029",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2008-01-01",
    value: "15604.687",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2009-01-01",
    value: "15208.834",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2010-01-01",
    value: "15598.753",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2011-01-01",
    value: "15840.664",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2012-01-01",
    value: "16197.007",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2013-01-01",
    value: "16495.369",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2014-01-01",
    value: "16912.038",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2015-01-01",
    value: "17432.17",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2016-01-01",
    value: "17730.509",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2017-01-01",
    value: "18144.105",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2018-01-01",
    value: "18687.786",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2019-01-01",
    value: "19091.662",
  },
  {
    realtime_start: "2021-05-12",
    realtime_end: "2021-05-12",
    date: "2020-01-01",
    value: "18426.077",
  },
];

export const GdpChart = () => {
  return (
    <Card title="Real Gross Domestic Product" className={styles.chart}>
      <div className={styles.chartContent}>
        <ResponsiveContainer>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#ccc" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <XAxis dataKey="date" />
            <YAxis dataKey="value" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
};
