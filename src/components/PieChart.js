import React from 'react';
// eslint-disable-next-line no-unused-vars
import { Chart as ChartJS } from 'chart.js/auto';
import { Pie } from 'react-chartjs-2';

const pieOptions = {
  responsive: false,
  plugins: {
    legend: {
      display: true,
      position: 'right',
    },
  },
};

function PieChart({ chartData }) {
  return <Pie options={pieOptions} data={chartData} />;
}

export default PieChart;
