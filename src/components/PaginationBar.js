/* eslint-disable no-plusplus */
import { React, useState } from 'react';
import { Pagination, Row } from 'react-bootstrap';

function PaginationBar({ pageNumber, handlePage }) {
  const [isActive, setIsActive] = useState(1);
  const pageClick = (e) => {
    handlePage(parseInt(e.target.innerText, 10));
    setIsActive(parseInt(e.target.innerText, 10));
  };

  const numbers = [];

  for (let i = 1; i <= pageNumber; i++) {
    numbers.push(i);
  }

  return (
    <Row>
      <Pagination className="justify-content-center">
        {numbers.map((number) => (
          <Pagination.Item size="sm" key={number} active={number === isActive} onClick={pageClick}>
            {number}
          </Pagination.Item>
        ))}
      </Pagination>
    </Row>
  );
}

export default PaginationBar;
