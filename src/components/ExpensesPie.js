import React from 'react';
import { PieChart, Cell, Pie, LabelList, ResponsiveContainer } from 'recharts';

const data = [
  {
    dataId: 1,
    name: 'Travel',
    value: 400,
  },
  {
    dataId: 2,
    name: 'Bill',
    value: 300,
  },
  {
    dataId: 3,
    name: 'Groceries',
    value: 500,
  },
  {
    dataId: 4,
    name: 'Salary',
    value: 200,
  },
];

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
function renderLabel(entry) {
  return `$${entry.value}`;
}

function ExpensesPie() {
  return (
    <div style={{ width: '100%', height: 250 }}>
      <h4>Expenses in February:</h4>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} label={renderLabel} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.dataId}`} fill={colors[index]} />
            ))}
            <LabelList
              dataKey="name"
              position="top"
              style={{ textAnchor: 'middle', fill: '#fff', color: '#fff' }}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default ExpensesPie;
