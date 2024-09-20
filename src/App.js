import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import search from './utils/yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);

  const searchYelp = async () => {
    const businesses = await search();
    setBusinesses(businesses);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
      </header>
        <SearchBar />
        <BusinessList businesses={businesses} />
        <a
          className="App-link"
          onClick={searchYelp}
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
