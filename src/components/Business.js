import React from 'react';
import './Business.css';

function Business(props) {
  return (
    <div className="business">
      <div className="image-container" style={{'backgroundImage' : `url(${props.imageSrc})`}}></div>
      <h4>{props.name}</h4>
      <div className="business-info">
        <div className="left-side">
          <p>{props.address}</p>
          <p>{props.city}</p>
          <p>{props.state} {props.zipCode}</p>
        </div>
        <div className="right-side">
          <p>{props.category}</p>
          <p>{props.rating} stars</p>
          <p>{props.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
