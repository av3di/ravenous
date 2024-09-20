import React, {useState} from 'react';
import './SearchBar.css';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('best_match');

  const handleSearchTermChange = ({target}) => setSearchTerm(target.value);

  const handleLocationChange = ({target}) => setLocation(target.value);

  const handleSortChange = ({target}) => setSort(target.value);

  const handleClick = (e) => {
    if(!searchTerm || !location) return;
    props.searchYelp(searchTerm, location, sort);
  };

  return (
    <div>
      <div className="first-row">
        <input value={searchTerm} onChange={handleSearchTermChange} placeholder="Search Businesses" />
        <input value={location} onChange={handleLocationChange} placeholder="Zip or City, State" />
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
