import React, { useContext } from 'react';
import DataContext from '../store/DataContext';
import { CalculateBalance } from '../utils/CalculateTotals';

function TotalBalance() {
  const dataCtx = useContext(DataContext);
  const totalSum = CalculateBalance(dataCtx.rows);
  return (
    <>
      <h4>Total balance:</h4>
      <div className="mt-3 total-balance">${totalSum}</div>
    </>
  );
}

export default TotalBalance;
