import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar() {
  const [sort, setSort] = useState('best_match');
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');

  const handleSearchTermChange = ({target}) => setSearchTerm(target.value);
  
  const handleLocationChange = ({target}) => setLocation(target.value);

  return (
    <div>
      <div class="first-row">
        <input value={searchTerm} onChange={handleSearchTermChange} placeholder="Search Businesses" />
        <input value={location} onChange={handleLocationChange} placeholder="Where?" />
      </div>
      <div class="second-row">
        <label for="sort_by">Sort by:</label>
        <select id="sort_by">
          <option value="best_match">Best Match</option>
          <option value="rating">Highest Rated</option>
          <option value="review_count">Most Reviewed</option>
        </select>
        <button>Search</button>
      </div>
    </div>
  );
}
export default SearchBar;
