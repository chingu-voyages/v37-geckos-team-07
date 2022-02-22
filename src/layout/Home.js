import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
import InsertionForm from '../components/InsertionForm';
import TotalBalance from '../components/TotalBalance';

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
        <Col sm={12} md={6} lg={4} className="mt-4 ps-3 pe-3 order-2 order-md-1">
          <InsertionForm addIncome={addIncome} addExpense={addExpense} />
        </Col>
        <Col sm={12} md={6} lg={4} className="mt-4 ps-3 pe-3 order-1 order-md-2">
          <TotalBalance />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
