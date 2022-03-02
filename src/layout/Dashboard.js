import React from 'react';
import { BsFillPencilFill } from 'react-icons/bs';
import DashBoardHeader from '../components/DashBoardHeader';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import SideBar from '../components/SideBar';
import { budget } from '../utils/data';

function Dashboard() {
  const userBudget = {
    labels: budget.map((b) => b.name),
    datasets: [
      {
        label: 'Your Income',
        data: budget.map((b) => b.value),
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
        borderColor: 'black',
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="dashboard__container">
      <div className="sidebar">
        <SideBar />
      </div>
      <div className="dashboard">
        <DashBoardHeader />
        <div className="incomes">
          <h3>Incomes</h3>
          <div className="compare__total">
            <div className="current__total">
              <h4>$1022.56&nbsp;/ </h4>
              <span>Current total</span>
            </div>
            <div className="goal">
              <div className="top">
                <h3> &nbsp; $1200.48</h3>
                <BsFillPencilFill className="icon" />
              </div>
              <span>Goal</span>
            </div>
          </div>
          <div className="progress">
            <div className="percentage" />
          </div>
        </div>
        <div className="charts">
          <div className="pie__chart">
            <PieChart chartData={userBudget} />
          </div>
          <div className="line__chart">
            <LineChart chartData={userBudget} />
          </div>
        </div>
        <h2 className="title">Your expenses stats : </h2>
        <div className="incomes">
          <h3>Expenses</h3>
          <div className="compare__total">
            <div className="current__total">
              <h4>$1022.56&nbsp;/ </h4>
              <span>Current total</span>
            </div>
            <div className="goal">
              <div className="top">
                <h3> &nbsp; $1200.48</h3>
                <BsFillPencilFill className="icon" />
              </div>
              <span>Goal</span>
            </div>
          </div>
          <div className="progress">
            <div className="percentage" />
          </div>
        </div>
        <div className="charts">
          <div className="pie__chart">
            <PieChart chartData={userBudget} />
          </div>
          <div className="line__chart">
            <LineChart chartData={userBudget} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
