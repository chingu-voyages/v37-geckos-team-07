import React, { useContext } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { BsFillPencilFill } from 'react-icons/bs';
import DashBoardHeader from '../components/DashBoardHeader';
import LineChart from '../components/LineChart';
import PieChart from '../components/PieChart';
import SideBar from '../components/SideBar';
import DataContext from '../store/DataContext';
import CalculateTotals, { CalculateBalance } from '../utils/CalculateTotals';

function Dashboard() {
  const dataCtx = useContext(DataContext);
  // Aggregating the data
  const dataIncome = CalculateTotals(dataCtx.rows, 'income');
  const dataExpense = CalculateTotals(dataCtx.rows, 'expense');
  const totalIncomes = CalculateBalance(dataCtx.rows, 'incomes');
  const totalExpenses = CalculateBalance(dataCtx.rows, 'expenses');

  const incomeBudget = {
    labels: dataIncome.map((b) => b.category),
    datasets: [
      {
        label: 'Your Income',
        data: dataIncome.map((b) => b.value),
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  const expenseBudget = {
    labels: dataExpense.map((b) => b.category),
    datasets: [
      {
        label: 'Your Expense',
        data: dataExpense.map((b) => b.value),
        backgroundColor: ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'],
        borderColor: 'black',
        borderWidth: 1,
      },
    ],
  };

  return (
    <Container fluid className="dashboard__container">
      <Row className="justify-content-center">
        <Col md={2} className="sidebar">
          <SideBar />
        </Col>
        <Col md={10}>
          <Row className="dashboard justify-content-center">
            <DashBoardHeader />
            <div className="area mb-4">
              <div className="goals__data">
                <h3>Incomes</h3>
                <div className="compare__total">
                  <div className="current__total">
                    <h4>${totalIncomes}&nbsp;/ </h4>
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
              <Row className="charts">
                <Col md={3} sm={12} className="pie__chart">
                  <PieChart chartData={incomeBudget} />
                </Col>
                <Col md={4} sm={12} className="line__chart">
                  <LineChart chartData={incomeBudget} />
                </Col>
              </Row>
            </div>
            <h2 className="title">Your expenses stats : </h2>
            <div className="area">
              <div className="goals__data">
                <h3>Expenses</h3>
                <div className="compare__total">
                  <div className="current__total">
                    <h4>${totalExpenses}&nbsp;/ </h4>
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
              <Row className="charts">
                <Col md={3} sm={12} className="pie__chart">
                  <PieChart chartData={expenseBudget} />
                </Col>
                <Col md={4} sm={12} className="line__chart">
                  <LineChart chartData={expenseBudget} />
                </Col>
              </Row>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
