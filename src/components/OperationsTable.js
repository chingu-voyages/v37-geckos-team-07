import React from 'react';
import { Table } from 'react-bootstrap';

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
        <tr className="operationsTable__row-income">
          <td>&nbsp;</td>
          <td>Salary</td>
          <td>+$1200.27</td>
          <td>12.02.2022</td>
          <td>This is some comment to this</td>
        </tr>
        <tr className="operationsTable__row-income">
          <td>&nbsp;</td>
          <td>Salary</td>
          <td>+$1200.27</td>
          <td>12.02.2022</td>
          <td>This is another comment</td>
        </tr>
        <tr className="operationsTable__row-expense">
          <td>&nbsp;</td>
          <td>Internet bill</td>
          <td>-$40.23</td>
          <td>15.02.2022</td>
          <td>This is definetely a comment</td>
        </tr>
        <tr className="operationsTable__row-income">
          <td>&nbsp;</td>
          <td>Salary</td>
          <td>+$1200.27</td>
          <td>12.02.2022</td>
          <td>This is some comment to this</td>
        </tr>
        <tr className="operationsTable__row-expense">
          <td>&nbsp;</td>
          <td>Grocery</td>
          <td>-$1200.27</td>
          <td>21.01.2022</td>
          <td>This is another comment</td>
        </tr>
        <tr className="operationsTable__row-expense">
          <td>&nbsp;</td>
          <td>Internet bill</td>
          <td>-$40.23</td>
          <td>15.02.2022</td>
          <td>This is definetely a comment</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default OperationsTable;
