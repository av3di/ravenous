import logo from './logo.svg';
import './App.css';
import storeList from './storeList';
import BusinessList from './components/BusinessList';
import SearchBar from './components/SearchBar';
import search from './utils/yelp';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>ravenous</h1>
      </header>
        <SearchBar />
        <BusinessList businesses={storeList} />
        <a
          className="App-link"
          onClick={search}
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
