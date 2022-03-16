/* eslint-disable no-plusplus */
import { React, useState, useContext } from 'react';
import { Pagination, Row } from 'react-bootstrap';
import DataContext from '../store/DataContext';

function PaginationBar({ pageNumber, handlePage }) {
  const dataCtx = useContext(DataContext);

  const [...rows] = dataCtx.rows;
  let active = 1;
  const pageClick = (e) => {
    handlePage(parseInt(e.target.innerText));
    active = parseInt(e.target.innerText);
  };

  let items = [];
  for (let number = 1; number <= pageNumber; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active} onClick={pageClick}>
        {number}
      </Pagination.Item>
    );
  }

  return (
    <Row className="justify-content-center">
      <Pagination size="sm">{items}</Pagination>
    </Row>
  );
}

export default PaginationBar;
