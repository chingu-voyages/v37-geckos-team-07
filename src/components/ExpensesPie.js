import React, { useContext } from 'react';
import { PieChart, Cell, Pie, LabelList, ResponsiveContainer } from 'recharts';
import CalculateTotals from '../utils/CalculateTotals';
import DataContext from '../store/DataContext';

const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
function renderLabel(entry) {
  return `$${entry.value}`;
}

function ExpensesPie() {
  const dataCtx = useContext(DataContext);
  const data = CalculateTotals(dataCtx.rows, 'expense');
  return (
    <div style={{ width: '100%', height: 250 }}>
      <h4>Expenses in February 2022:</h4>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" label={renderLabel} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${entry.id}`} fill={colors[index]} />
            ))}
            <LabelList
              dataKey="category"
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
