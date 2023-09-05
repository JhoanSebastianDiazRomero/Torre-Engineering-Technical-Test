import React from "react";
import { FavoriteCard } from "./FavoriteCard.jsx";
import "./FavoritesList.css";

//Component that represents the list of the people picked as favorite by the user
export const FavoritesList = ({ favorites, handleFavoritesChange }) => {
  return (
    <div className="favorites-wrapper">
      <h1 className="favorites-title">List of favorites</h1>
      <div className="favorites-container">
        {[...favorites].map((entry) => {
          const key = entry[0];
          const value = entry[1];
          return (
            <div className="grid-item">
              <FavoriteCard
                favorite={{
                  username: key,
                  name: value.name,
                  headline: value.headline,
                  imageUrl: value.imageUrl,
                }}
                handleFavoritesChange={handleFavoritesChange}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
