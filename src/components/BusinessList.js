import React from 'react';
import './BusinessList.css';
import Business from './Business';

function BusinessList(props) {
  const businessList = props.businesses.map((business, index) => {
    return <Business key={business.id}
            name={business.name}
            imageSrc={business.image_url}
            address={business.location.address1}
            city={business.location.city}
            state={business.location.state}
            zipCode={business.location.zipCode}
            category={business.categories ? business.categories[0].title : "No categories"}
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
