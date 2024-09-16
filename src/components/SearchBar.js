import React from 'react';
import './SearchBar.css';

function SearchBar() {
  return (
    <div>
      <div class="first-row">
        <input placeholder="Search Businesses" />
        <input placeholder="Where?" />
      </div>
      <div class="second-row">
        <select>
          <option>Best Match</option>
          <option>Highest Rated</option>
          <option>Most Reviewed</option>
        </select>
        <button>Search</button>
      </div>
    </div>
  );
}
export default SearchBar;
