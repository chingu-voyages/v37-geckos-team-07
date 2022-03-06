import { React, useState } from 'react';
import { Table, CloseButton as DeleteButton } from 'react-bootstrap';
import DeleteModal from './DeleteModal';

const data = [
  {
    id: 'wq6ocln',
    category: 'Salary',
    amount: 1200.27,
    type: 'income',
    date: '12.02.2022',
    comment: 'This is some comment to this',
  },
  {
    id: '1680at0',
    category: 'Salary',
    amount: 1200.27,
    type: 'income',
    date: '12.02.2022',
    comment: 'This is another comment',
  },
  {
    id: 'axg1grk',
    category: 'Internet bill',
    amount: 40.23,
    type: 'expense',
    date: '15.02.2022',
    comment: 'This is definetely a comment',
  },
  {
    id: 'xzdgzxx',
    category: 'Salary',
    amount: 1200.27,
    type: 'income',
    date: '12.02.2022',
    comment: 'This is some comment to this',
  },
  {
    id: 'ico6eax',
    category: 'Grocery',
    amount: 1200.27,
    type: 'expense',
    date: '12.02.2022',
    comment: 'This is another comment',
  },
  {
    id: 'b666j4i',
    category: 'Internet bill',
    amount: 40.23,
    type: 'expense',
    date: '12.02.2022',
    comment: 'This is definetely a comment',
  },
];

function OperationsTable() {
  const [rows, setRows] = useState(data);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const removeItem = (row) => {
    setShowDeleteModal(true);
    setSelectedRow(row);
  };
  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };
  const handleSave = () => {
    setRows((prevRows) => prevRows.filter((item) => item.id !== selectedRow.id));
    setShowDeleteModal(false);
  };
  return (
    <>
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
          {rows.map((el) => (
            <tr key={el.id} className={`operationsTable__row operationsTable__row-${el.type}`}>
              <td>
                <DeleteButton onClick={() => removeItem(el)} />
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
      <DeleteModal
        showDeleteModal={showDeleteModal}
        handleDeleteModalClose={handleDeleteModalClose}
        handleSave={handleSave}
        itemCategory={selectedRow.category}
        itemAmount={selectedRow.amount}
        itemDate={selectedRow.date}
      />
    </>
  );
}

export default OperationsTable;
