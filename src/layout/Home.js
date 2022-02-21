import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import InsertionForm from '../components/InsertionForm';

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
        <Col sm={12} md={6} lg={4} className="mt-4 ms-3">
          <InsertionForm addIncome={addIncome} addExpense={addExpense} />
        </Col>
        {/* <Col sm={12} md={6} lg={4} className="mt-4 ms-3">
          <InsertionForm addIncome={addIncome} addExpense={addExpense} />
        </Col> */}
      </Row>
    </Container>
  );
}

export default Home;
