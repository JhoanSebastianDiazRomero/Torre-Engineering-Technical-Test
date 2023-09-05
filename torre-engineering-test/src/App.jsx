import "./App.css";
import { SearchBar } from "./components/SearchBar.jsx";
import { useState } from "react";
import { SearchResultsList } from "./components/SearchResultsList.jsx";
import { FavouritesList } from "./components/FavouritesList.jsx";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [favourites, setFavourites] = useState([]);

  const handleFavouritesChange = (username) => {
    if (favourites.includes(username)) {
      const index = favourites.indexOf(username);
      const favouritesCopy = favourites.slice();
      favouritesCopy.splice(index, 1);
      setFavourites(favouritesCopy);
    } else {
      setFavourites((current) => [...current, username]);
    }
  };

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setSearchResults={setSearchResults} />
        <SearchResultsList
          searchResults={searchResults}
          handleFavouritesChange={handleFavouritesChange}
        />
        <FavouritesList favourites={favourites} />
      </div>
    </div>
  );
}

export default App;
