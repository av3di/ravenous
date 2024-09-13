import React from 'react';
import './Business.css';
import logo from '../logo.svg';

function Business() {
  const business1 = {
    imageSrc: logo,
    name: 'Pizza Hut',
    address: '123 Wysteria Lane',
    city: 'Bordertown',
    state: 'MI',
    zipCode: '10100',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90,
  };
  return (
    <div className="business">
      <img src={business1.imageSrc} />
      <h4>{business1.name}</h4>
      <div className="business-info">
        <div className="text-left">
          <p>{business1.address}</p>
          <p>{business1.city}</p>
          <p>{business1.state} {business1.zipCode}</p>
        </div>
        <div className="text-right">
          <p>{business1.category}</p>
          <p>{business1.rating} stars</p>
          <p>{business1.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
