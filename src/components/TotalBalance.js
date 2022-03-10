import React, { useContext } from 'react';
import DataContext from '../store/DataContext';

function TotalBalance() {
  const dataCtx = useContext(DataContext);
  const totalSum = Number(
    dataCtx.rows.reduce((sum, el) => (el.type === 'income' ? sum + el.amount : sum - el.amount), 0)
  ).toFixed(2);
  return (
    <>
      <h4>Total balance:</h4>
      <div className="mt-3 total-balance">${totalSum}</div>
    </>
  );
}

export default TotalBalance;
