import React from 'react';
import './Business.css';
import logo from '../logo.svg';

function Business(props) {
  return (
    <div className="business">
      <img src={props.imageSrc} />
      <h4>{props.name}</h4>
      <div className="business-info">
        <div className="text-left">
          <p>{props.address}</p>
          <p>{props.city}</p>
          <p>{props.state} {props.zipCode}</p>
        </div>
        <div className="text-right">
          <p>{props.category}</p>
          <p>{props.rating} stars</p>
          <p>{props.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
