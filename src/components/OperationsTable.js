import { React, useState, useContext } from 'react';
import { Table, CloseButton as DeleteButton, Alert } from 'react-bootstrap';
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
    dataCtx.deleteMovement(selectedRow.id);
    setShowDeleteModal(false);
  };

  return (
    <div className="operationsTable__wrapper">
      <Alert
        className="operationsTable__alert"
        variant={dataCtx.showAlert.variant}
        show={dataCtx.showAlert.show}
        onClose={() =>
          dataCtx.setShowAlert({
            show: false,
            variant: '',
            text: '',
            headerText: '',
          })
        }
        dismissible
      >
        <Alert.Heading>{dataCtx.showAlert.headerText}</Alert.Heading>
        <p>{dataCtx.showAlert.text}</p>
      </Alert>
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
      {!reversedArr.length && (
        <p className="text-center">No data to display. Please add movements</p>
      )}
      <DeleteModal
        showDeleteModal={showDeleteModal}
        handleDeleteModalClose={handleDeleteModalClose}
        handleSave={handleSave}
        itemCategory={selectedRow.category}
        itemAmount={selectedRow.amount}
        itemDate={selectedRow.date}
      />
    </div>
  );
}

export default OperationsTable;
