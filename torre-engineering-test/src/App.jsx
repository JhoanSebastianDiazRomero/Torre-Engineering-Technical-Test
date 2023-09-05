import "./App.css";
import { SearchBar } from "./components/SearchBar.jsx";
import { useState } from "react";
import { SearchResultsList } from "./components/SearchResultsList.jsx";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResultsList searchResults={searchResults} />
      </div>
    </div>
  );
}

export default App;
