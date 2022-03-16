import { React, useState, useContext } from 'react';
import { Table, CloseButton as DeleteButton } from 'react-bootstrap';
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
    dataCtx.setRows((prevRows) => prevRows.filter((item) => item.id !== selectedRow.id));
    setShowDeleteModal(false);
  };
  const handlePage = (number) => {
    setPage(number);
    console.log(number);
  };
  const rowsPerPage = 3;
  const pageNumber = Math.ceil(reversedArr.length / rowsPerPage);
  let pageRows = reversedArr.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  // setTimeout(() => {
  //   handlePage(2);
  // }, 2000);

  return (
    <>
      <Table borderless>
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
            <tr key={el.id} className={`operationsTable__row operationsTable__row-${el.type}`}>
              <td>
                <DeleteButton onClick={() => removeItem(el)} />
              </td>
              <td>{el.category}</td>
              <td>
                {el.type === 'income' ? '+' : '-'}${el.amount}
              </td>
              <td>{el.date}</td>
              <td>{el.description}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <PaginationBar pageNumber={pageNumber} handlePage={handlePage} />
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
