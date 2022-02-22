import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import InsertionForm from '../components/InsertionForm';
import TotalBalance from '../components/TotalBalance';
import ExpensesPie from '../components/ExpensesPie';

function Home() {
  const [records, setRecords] = useState([]);
  function addIncome(amount, category, description) {
    const prevRecords = records.slice();
    prevRecords.push({
      type: 'Income',
      amount,
      category,
      description,
    });
    setRecords(prevRecords);
  }

  function addExpense(amount, category, description) {
    const prevRecords = records.slice();
    prevRecords.push({
      type: 'Expense',
      amount,
      category,
      description,
    });
    setRecords(prevRecords);
  }

  return (
    <Container>
      <Row>
        <Col sm={12} lg={4} className="mt-4 ps-3 pe-3 order-2 order-md-1">
          <InsertionForm addIncome={addIncome} addExpense={addExpense} />
        </Col>
        <Col sm={12} lg={4} className="mt-4 ps-3 pe-3 order-1 order-md-2">
          <TotalBalance />
        </Col>
        <Col sm={12} lg={4} className="mt-4 ps-3 pe-3 order-1 order-md-2">
          <ExpensesPie />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
