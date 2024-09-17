import React from 'react';
import './BusinessList.css';
import Business from './Business';

function BusinessList(props) {
  const businessList = props.businesses.map((business, index) => {
    return <Business key={index}
            name={business.name}
            imageSrc={business.imageSrc}
            address={business.address}
            city={business.city}
            state={business.state}
            zipCode={business.zipCode}
            category={business.category}
            rating={business.rating}
            reviewCount={business.reviewCount}
            />;
  });
  return (
    <div className="business-list">
      {businessList}
    </div>
  );
}

export default BusinessList;
