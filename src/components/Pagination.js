import React from 'react';
import './Pagination.css';

function Pagination(props) {
  return (
    <div className="pagination">
      <button onClick={props.getPreviousPage} disabled={props.disablePrevious}>Previous</button>
      <button onClick={props.getNextPage} disabled={props.disableNext}>Next</button>
    </div>
  );
}

export default Pagination;
