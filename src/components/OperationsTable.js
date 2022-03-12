import { React, useState, useContext } from 'react';
import { Table, CloseButton as DeleteButton } from 'react-bootstrap';
import DeleteModal from './DeleteModal';
import DataContext from '../store/DataContext';

function OperationsTable() {
  const dataCtx = useContext(DataContext);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const reversedArr = [...dataCtx.rows].reverse();
  const removeItem = (row) => {
    setShowDeleteModal(true);
    setSelectedRow(row);
  };
  const handleDeleteModalClose = () => {
    setShowDeleteModal(false);
  };
  const handleSave = () => {
    dataCtx.setRows((prevRows) => prevRows.filter((item) => item.id !== selectedRow.id));
    setShowDeleteModal(false);
  };

  return (
    <>
      <Table borderless className="operationsTable">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {reversedArr.map((el) => (
            <tr
              key={el.id}
              className={`operationsTable__row operationsTable__row-${
                el.isIncome ? 'income' : 'expense'
              }`}
            >
              <td>
                <DeleteButton onClick={() => removeItem(el)} />
              </td>
              <td>{el.category}</td>
              <td>
                {el.isIncome ? '+' : '-'}${el.amount}
              </td>
              <td>{el.date}</td>
              <td>{el.description}</td>
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
