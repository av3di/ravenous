import React from 'react';
import './Business.css';
import logo from '../logo.svg';

function Business() {
  return (
    <div className="business">
      <img src={logo} />
      <h4>Pizza Hut</h4>
      <div className="business-info">
        <div className="text-left">
          <p>123 Wysteria Lane</p>
          <p>Bordertown</p>
          <p>MI 1010</p>
        </div>
        <div className="text-right">
          <p>Italian</p>
          <p>4.5 stars</p>
          <p>1000 reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
