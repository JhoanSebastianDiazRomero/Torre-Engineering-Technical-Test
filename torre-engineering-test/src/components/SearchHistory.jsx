import React from "react";
import "./SearchHistory.css";

export const SearchHistory = ({ searchHistory }) => {
  return (
    <div className="search-history-wrapper">
      <h1 className="search-history-title">Search History</h1>
      <table className="latest-search-terms">
        <thead>
          <tr>
            <th>Latest Searched Terms</th>
          </tr>
        </thead>
        <tbody>
          {searchHistory.map((searchTerm) => {
            return (
              <tr className="search-term">
                <td>{searchTerm}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
