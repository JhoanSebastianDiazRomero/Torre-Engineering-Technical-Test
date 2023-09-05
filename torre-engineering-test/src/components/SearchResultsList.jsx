import "./SearchResultsList.css";
import { SearchResult } from "./SearchResult.jsx";

//Component that represents the search results returned by the API
export const SearchResultsList = ({ searchResults, handleFavoritesChange }) => {
  return (
    <div className="results-list">
      {searchResults?.map((result) => {
        return (
          <SearchResult
            result={result}
            key={result.ardaId}
            handleFavoritesChange={handleFavoritesChange}
          />
        );
      })}
    </div>
  );
};
