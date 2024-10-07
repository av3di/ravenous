import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import search from './utils/yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async (term, location, sort) => {
    const businesses = await search(term, location, sort);
    setBusinesses(businesses);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
      </header>
        <SearchBar searchYelp={searchYelp} />
        <BusinessList businesses={businesses} />
        <Pagination />
    </div>
  );
}

export default App;
