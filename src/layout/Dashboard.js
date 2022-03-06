import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
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

  // return (
  //   <div className="dashboard__container">
  //     <div className="sidebar">
  //       <SideBar />
  //     </div>
  //     <div className="dashboard">
  //       <DashBoardHeader />
  //       <div className="goals__data">
  //         <h3>Incomes</h3>
  //         <div className="compare__total">
  //           <div className="current__total">
  //             <h4>$1022.56&nbsp;/ </h4>
  //             <span>Current total</span>
  //           </div>
  //           <div className="goal">
  //             <div className="top">
  //               <h3> &nbsp; $1200.48</h3>
  //               <BsFillPencilFill className="icon" />
  //             </div>
  //             <span>Goal</span>
  //           </div>
  //         </div>
  //         <div className="progress">
  //           <div className="percentage" />
  //         </div>
  //       </div>
  //       <div className="charts">
  //         <div className="pie__chart">
  //           <PieChart chartData={userBudget} />
  //         </div>
  //         <div className="line__chart">
  //           <LineChart chartData={userBudget} />
  //         </div>
  //       </div>
  //       <h2 className="title">Your expenses stats : </h2>
  //       <div className="goals__data">
  //         <h3>Expenses</h3>
  //         <div className="compare__total">
  //           <div className="current__total">
  //             <h4>$1022.56&nbsp;/ </h4>
  //             <span>Current total</span>
  //           </div>
  //           <div className="goal">
  //             <div className="top">
  //               <h3> &nbsp; $1200.48</h3>
  //               <BsFillPencilFill className="icon" />
  //             </div>
  //             <span>Goal</span>
  //           </div>
  //         </div>
  //         <div className="progress">
  //           <div className="percentage" />
  //         </div>
  //       </div>
  //       <div className="charts">
  //         <div className="pie__chart">
  //           <PieChart chartData={userBudget} />
  //         </div>
  //         <div className="line__chart">
  //           <LineChart chartData={userBudget} />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );

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
              <Row className="charts">
                <Col md={5} sm={12} className="pie__chart">
                  <PieChart chartData={userBudget} />
                </Col>
                <Col md={5} sm={12} className="line__chart">
                  <LineChart chartData={userBudget} />
                </Col>
              </Row>
            </div>
            <h2 className="title">Your expenses stats : </h2>
            <div className="area">
              <div className="goals__data">
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
              <Row className="charts">
                <Col md={5} sm={12} className="pie__chart">
                  <PieChart chartData={userBudget} />
                </Col>
                <Col md={5} sm={12} className="line__chart">
                  <LineChart chartData={userBudget} />
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
