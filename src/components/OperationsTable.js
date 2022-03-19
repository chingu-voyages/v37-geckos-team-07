import { React, useState, useContext } from 'react';
import { Table, CloseButton as DeleteButton, Alert } from 'react-bootstrap';
import DeleteModal from './DeleteModal';
import DataContext from '../store/DataContext';
import PaginationBar from './PaginationBar';

function OperationsTable() {
  const dataCtx = useContext(DataContext);

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState({});
  const [page, setPage] = useState(1);
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
  const handlePage = (number) => {
    setPage(number);
  };
  const rowsPerPage = 5;
  const pageNumber = Math.ceil(reversedArr.length / rowsPerPage);
  const pageRows = reversedArr.slice((page - 1) * rowsPerPage, page * rowsPerPage);

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
          {pageRows.map((el) => (
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
      <PaginationBar pageNumber={pageNumber} handlePage={handlePage} />
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
