import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult.jsx";

export const SearchResultsList = ({
  searchResults,
  handleFavouritesChange,
}) => {
  return (
    <div className="results-list">
      {searchResults.map((result) => {
        return (
          <SearchResult
            result={result}
            key={result.ardaId}
            handleFavouritesChange={handleFavouritesChange}
          />
        );
      })}
    </div>
  );
};
