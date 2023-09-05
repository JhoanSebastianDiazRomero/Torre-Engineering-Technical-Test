import "./App.css";
import { SearchBar } from "./components/SearchBar.jsx";
import { useState } from "react";
import { SearchResultsList } from "./components/SearchResultsList.jsx";
import { FavoritesList } from "./components/FavoritesList.jsx";
import logo from "./assets/fwc3x9ygbr3fmtsqz2cj.webp";
import { SearchHistory } from "./components/SearchHistory.jsx";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [favorites, setFavorites] = useState(new Map());
  const [searchHistory, setSearchHistory] = useState([]);

  const handleFavoritesChange = (username, name, headline, imageUrl) => {
    if (favorites.has(username)) {
      const stateCopy = new Map(favorites);
      stateCopy.delete(username);
      setFavorites(stateCopy);
    } else {
      const stateCopy = new Map(favorites);
      stateCopy.set(username, {
        name: name,
        headline: headline,
        imageUrl: imageUrl,
      });
      setFavorites(stateCopy);
    }
  };

  const addToSearchHistory = (searchTerm) => {
    const copy = [...searchHistory];
    copy.push(searchTerm);
    if (copy.length > 10) {
      copy.shift();
    }
    setSearchHistory(copy);
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="App logo" />
      </div>
      <div className="search-bar-container">
        <SearchBar
          setSearchResults={setSearchResults}
          addToSearchHistory={addToSearchHistory}
        />
        <SearchResultsList
          searchResults={searchResults}
          handleFavoritesChange={handleFavoritesChange}
        />
        <FavoritesList
          favorites={favorites}
          handleFavoritesChange={handleFavoritesChange}
        />
        <SearchHistory searchHistory={searchHistory} />
      </div>
    </div>
  );
}

export default App;
