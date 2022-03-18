import React, { useContext } from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import DataContext from '../store/DataContext';
import { CalculateBalance } from '../utils/CalculateTotals';

function SideBar() {
  const dataCtx = useContext(DataContext);
  // Aggregating the data
  const Balance = CalculateBalance(dataCtx.rows);
  const totalIncomes = CalculateBalance(dataCtx.rows, 'incomes');
  const totalExpenses = CalculateBalance(dataCtx.rows, 'expenses');
  return (
    <div className="side__bar">
      <div className="balance">
        <h2>${Balance}</h2>
        <span>Total Balance</span>
      </div>
      <div className="goals__data">
        <h3>Incomes</h3>
        <div className="current__total">
          <h4>${totalIncomes}</h4>
          <span>Current total</span>
        </div>
        <div className="goal">
          <div className="top">
            <h3>$1200.48</h3>
            <BsFillPencilFill />
          </div>
          <span>Goal</span>
        </div>
        <div className="progress">
          <div className="percentage" />
        </div>
      </div>
      <div className="goals__data">
        <h3>Expenses</h3>
        <div className="current__total">
          <h4>${totalExpenses}</h4>
          <span>Current total</span>
        </div>
        <div className="goal">
          <div className="top">
            <h3>$1200.48</h3>
            <BsFillPencilFill />
          </div>
          <span>Goal</span>
        </div>
        <div className="progress">
          <div className="percentage" />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
