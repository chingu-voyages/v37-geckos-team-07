import React, { useState } from 'react';
import { Form, Col, Row, Button, InputGroup } from 'react-bootstrap';

function InsertionForm({ addExpense, addIncome }) {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

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
      addIncome(amount, category, description);
      setAmount('');
      setCategory('Travel');
      setDescription('');
    }
  }

  function addExpenseButton() {
    if (amount !== '' || category !== '' || description !== '') {
      addExpense(amount, category, description);
      setAmount('');
      setCategory('Travel');
      setDescription('');
    }
  }

  return (
    <Form>
      <h4>Add a new record</h4>
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
              Select a category
            </option>
            <option value="Travel">Travel</option>
            <option value="Bills">Bills</option>
            <option value="Groceries">Groceries</option>
            <option value="Salary">Salary</option>
          </Form.Select>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group className="mt-5">
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
        <Button as={Col} md={{ span: 3, offset: 2 }} variant="success" onClick={addIncomeButton}>
          Income
        </Button>
        <Button as={Col} md={{ span: 3, offset: 1 }} variant="danger" onClick={addExpenseButton}>
          Expense
        </Button>
      </Row>
    </Form>
  );
}

export default InsertionForm;
