import "./App.css";
import { SearchBar } from "./components/SearchBar.jsx";
import { useState } from "react";
import { SearchResultsList } from "./components/SearchResultsList.jsx";
import { FavouritesList } from "./components/FavouritesList.jsx";
import logo from "./assets/fwc3x9ygbr3fmtsqz2cj.webp";

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [favourites, setFavourites] = useState(new Map());

  const handleFavouritesChange = (username, name, headline, imageUrl) => {
    if (favourites.has(username)) {
      const stateCopy = new Map(favourites);
      stateCopy.delete(username);
      setFavourites(stateCopy);
    } else {
      const stateCopy = new Map(favourites);
      stateCopy.set(username, {
        name: name,
        headline: headline,
        imageUrl: imageUrl,
      });
      setFavourites(stateCopy);
    }
  };

  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="App logo" />
      </div>
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
