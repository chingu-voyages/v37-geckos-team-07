import { React, useState, useContext } from 'react';
import { Table, CloseButton as DeleteButton } from 'react-bootstrap';
import DeleteModal from './DeleteModal';
import DataContext from '../store/DataContext';

function OperationsTable() {
  const dataCtx = useContext(DataContext);

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
    dataCtx.setRows((prevRows) => prevRows.filter((item) => item.id !== selectedRow.id));
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
          {dataCtx.rows.map((el) => (
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
