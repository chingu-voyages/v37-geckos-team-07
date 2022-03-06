import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';

function SideBar() {
  return (
    <div className="side__bar">
      <div className="balance">
        <h2>$122.56</h2>
        <span>Total Balance</span>
      </div>
      <div className="goals__data">
        <h3>Incomes</h3>
        <div className="current__total">
          <h4>$1022.56</h4>
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
          <h4>$1022.56</h4>
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
