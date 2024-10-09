import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';
import search from './utils/yelp';

function App() {
  const [businesses, setBusinesses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('best_match');
  const [limit, setLimit] = useState(20);
  const [offset, setOffset] = useState(0);
  const [disableNext, setDisableNext] = useState(true);
  const [disablePrevious, setDisablePrevious] = useState(true);

  const searchYelp = async (searchOffset=offset) => {
    try {
      const businesses = await search(searchTerm, location, sort, limit, searchOffset);
      if (businesses.length === limit) {
        setDisableNext(false);
      }
      if (searchOffset > 0) {
        setDisablePrevious(false);
      } else if (searchOffset === 0) {
        setDisablePrevious(true);
      }
      setBusinesses(businesses);
    } catch(error) {
      console.error('There was an error with retrieving results: '+ error);
    }
  }

  const getNextPage = async () => {
    try {
      setOffset((prev) => {
        const newOffset = prev + limit;
        searchYelp(newOffset);
        return newOffset;
      });
    } catch (error) {
      console.error('Error getting next results: ' + error);
    }
  }
  const getPreviousPage = async () => {
    console.log('getPreviousPage')
    setOffset((prev) => {
      const newOffset = prev - limit;
      searchYelp(newOffset);
      return newOffset;
    });
    try {
      await searchYelp();
    } catch(error) {
      console.error('Error getting previous results: ' + error);
    }
    console.log(offset);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
      </header>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          location={location}
          setLocation={setLocation}
          searchYelp={searchYelp}
        />
        <BusinessList businesses={businesses} />
        <Pagination
          disableNext={disableNext}
          getNextPage={getNextPage}
          disablePrevious={disablePrevious}
          getPreviousPage={getPreviousPage}
        />
    </div>
  );
}

export default App;
