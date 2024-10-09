import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const handleSearchTermChange = ({target}) => props.setSearchTerm(target.value);

  const handleLocationChange = ({target}) => props.setLocation(target.value);

  const handleSortChange = ({target}) => props.setSort(target.value);

  const handleClick = (e) => {
    if(!props.searchTerm || !props.location) return;
    props.searchYelp();
  };

  return (
    <div>
      <div className="first-row">
        <input value={props.searchTerm} onChange={handleSearchTermChange} placeholder="Search Businesses" />
        <input value={props.location} onChange={handleLocationChange} placeholder="Zip or City, State" />
      </div>
      <div className="second-row">
        <label htmlFor="sort_by">Sort by:</label>
        <select id="sort_by" onChange={handleSortChange}>
          <option value="best_match">Best Match</option>
          <option value="rating">Highest Rated</option>
          <option value="review_count">Most Reviewed</option>
        </select>
        <button onClick={handleClick}>Search</button>
      </div>
    </div>
  );
}
export default SearchBar;
