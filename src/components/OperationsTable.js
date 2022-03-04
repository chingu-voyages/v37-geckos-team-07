import { React } from 'react';
import { Table, CloseButton } from 'react-bootstrap';

const data = [
  {
    category: 'Salary',
    amount: 1200.27,
    type: 'income',
    date: '12.02.2022',
    comment: 'This is some comment to this',
  },
  {
    category: 'Salary',
    amount: 1200.27,
    type: 'income',
    date: '12.02.2022',
    comment: 'This is another comment',
  },
  {
    category: 'Internet bill',
    amount: 40.23,
    type: 'expense',
    date: '15.02.2022',
    comment: 'This is definetely a comment',
  },
  {
    category: 'Salary',
    amount: 1200.27,
    type: 'income',
    date: '12.02.2022',
    comment: 'This is some comment to this',
  },
  {
    category: 'Grocery',
    amount: 1200.27,
    type: 'expense',
    date: '12.02.2022',
    comment: 'This is another comment',
  },
  {
    category: 'Internet bill',
    amount: 40.23,
    type: 'expense',
    date: '12.02.2022',
    comment: 'This is definetely a comment',
  },
];

function OperationsTable() {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Date</th>
          <th>Comment</th>
        </tr>
      </thead>
      <tbody>
        {data.map((el) => (
          <tr className={`operationsTable__row operationsTable__row-${el.type}`}>
            <td>
              <CloseButton />
            </td>
            <td>{el.category}</td>
            <td>
              {el.type === 'income' ? '+' : '-'}${el.amount}
            </td>
            <td>{el.date}</td>
            <td>{el.comment}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default OperationsTable;
