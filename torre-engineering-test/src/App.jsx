import "./App.css";
import { SearchBar } from "./components/SearchBar.jsx";
import { useState } from "react";
import { SearchResultsList } from "./components/SearchResultsList.jsx";
import { FavoritesList } from "./components/FavoritesList.jsx";
import logo from "./assets/fwc3x9ygbr3fmtsqz2cj.webp";
import { SearchHistory } from "./components/SearchHistory.jsx";

//App
function App() {
  //State that stores the search results from the API
  const [searchResults, setSearchResults] = useState([]);
  //State that stores a map of the favorite people chosen by the user
  const [favorites, setFavorites] = useState(new Map());
  //State that stores the latest 10 terms of the search history
  const [searchHistory, setSearchHistory] = useState([]);

  //Updates state when user adds people to favorites
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

  //Adds a term to the search history
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
