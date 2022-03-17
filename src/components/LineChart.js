import React from 'react';
import { Line } from 'react-chartjs-2';

const lineOptions = {
  plugins: {
    legend: {
      display: false,
      position: 'right',
    },
  },
};

function LineChart({ chartData }) {
  return <Line options={lineOptions} data={chartData} />;
}

export default LineChart;
