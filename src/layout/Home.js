import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import InsertionForm from '../components/InsertionForm';
import TotalBalance from '../components/TotalBalance';
import ExpensesPie from '../components/ExpensesPie';
import OperationsTable from '../components/OperationsTable';

function Home() {
  return (
    <Container>
      <Row>
        <Col sm={12} lg={4} className="mt-4 ps-3 pe-3 order-2 order-md-1">
          <InsertionForm />
        </Col>
        <Col sm={12} lg={4} className="mt-4 ps-3 pe-3 order-1 order-md-2">
          <TotalBalance />
        </Col>
        <Col sm={12} lg={4} className="mt-4 ps-3 pe-3 order-1 order-md-2">
          <ExpensesPie />
        </Col>
      </Row>
      <Row>
        <Col sm={12} className="mt-5 mb-5">
          <OperationsTable />
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
