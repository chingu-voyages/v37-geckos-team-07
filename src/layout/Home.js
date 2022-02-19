import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import InsertionForm from './InsertionForm';

function Home() {
  const [records, setRecords] = useState([]);
  function addIncome(amount, category, description) {
    const prevRecords = records.slice();
    prevRecords.push({
      type: 'Income',
      amount: amount,
      category: category,
      description: description,
    });
    setRecords(prevRecords);
  }

  function addExpense(amount, category, description) {
    const prevRecords = records.slice();
    prevRecords.push({
      type: 'Expense',
      amount: amount,
      category: category,
      description: description,
    });
    setRecords(prevRecords);
  }

  return (
    <Container fluid>
      <Row>
        <InsertionForm addIncome={addIncome} addExpense={addExpense} />
      </Row>
    </Container>
  );
}

export default Home;
