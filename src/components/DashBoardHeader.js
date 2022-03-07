import React from 'react';
import { Container } from 'react-bootstrap';
import { BsCalendar3 } from 'react-icons/bs';

function DashBoardHeader() {
  return (
    <Container fluid className="header">
      <div className="balance__header">
        <p>Total Balance :</p>
        <h3>$122.56</h3>
      </div>
      <div className="search">
        <input type="text" placeholder="Enter your dates" />
        <button type="button">
          <BsCalendar3 className="icon" />
        </button>
      </div>
      <h2>Your income stats :</h2>
    </Container>
  );
}

export default DashBoardHeader;
