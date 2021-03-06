import React, { useState, useContext } from 'react';
import { Form, Col, Row, Button, InputGroup, Container } from 'react-bootstrap';
import DataContext from '../store/DataContext';

function InsertionForm() {
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const dataCtx = useContext(DataContext);

  function setValue(e) {
    switch (e.target.name) {
      case 'amount':
        setAmount(e.target.value);
        break;

      case 'category':
        setCategory(e.target.value);
        break;

      case 'description':
        setDescription(e.target.value);
        break;
      default:
        break;
    }
  }

  function addIncomeButton() {
    if (
      amount !== '' ||
      category !== '' ||
      category !== 'Select a category' ||
      description !== ''
    ) {
      dataCtx.addIncome(amount, category, description);
      setAmount('');
      setCategory('Travel');
      setDescription('');
    }
  }

  function addExpenseButton() {
    if (amount !== '' || category !== '' || description !== '') {
      dataCtx.addExpense(amount, category, description);
      setAmount('');
      setCategory('Travel');
      setDescription('');
    }
  }

  return (
    <Container>
      <Form>
        <h4>Enter a new record:</h4>
        <Row className="mt-3">
          <Form.Group controlId="amount" as={Col}>
            <InputGroup>
              <InputGroup.Text>$</InputGroup.Text>
              <Form.Control
                type="number"
                name="amount"
                placeholder="Amount"
                value={amount}
                onChange={setValue}
                autoComplete="off"
              />
            </InputGroup>
          </Form.Group>
          <Form.Group controlId="category" as={Col}>
            <Form.Select name="category" value={category} onChange={setValue}>
              <option value="" disabled>
                Category
              </option>
              <option value="Travel">Travel</option>
              <option value="Bills">Bills</option>
              <option value="Books">Books</option>
              <option value="Websites">Websites</option>
              <option value="Courses">Courses</option>
              <option value="Groceries">Groceries</option>
              <option value="Salary">Salary</option>
            </Form.Select>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mt-3">
            <Form.Control
              as="textarea"
              name="description"
              value={description}
              onChange={setValue}
              placeholder="Description"
              style={{ resize: 'none' }}
            />
          </Form.Group>
        </Row>
        <Row className="mt-3">
          <Button as={Col} xs={{ span: 3, offset: 2 }} variant="success" onClick={addIncomeButton}>
            Income
          </Button>
          <Button as={Col} xs={{ span: 3, offset: 1 }} variant="danger" onClick={addExpenseButton}>
            Expense
          </Button>
        </Row>
      </Form>
    </Container>
  );
}

export default InsertionForm;
