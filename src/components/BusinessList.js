import React from 'react';
import './BusinessList.css';
import Business from './Business';

function BusinessList() {
  const stores = [];
  for(let i = 0; i < 15; i++) {
    stores.push(<Business />);
  }
  return (
    <div class="business-list">
      {stores}
    </div>
  );
}

export default BusinessList;
