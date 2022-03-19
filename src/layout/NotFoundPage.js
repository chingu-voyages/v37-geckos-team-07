import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../images/404.jpg';

function NotFoundPage() {
  return (
    <div className="button-container">
      <img className="notFound" src={PageNotFound} alt="pageNotFound" />
      <p>
        <Link to="/" variant="primary" className="button-big">
          Go to Home
        </Link>
      </p>
    </div>
  );
}

export default NotFoundPage;
