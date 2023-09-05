import React from "react";
import { FavouriteCard } from "./FavouriteCard.jsx";
import "./FavouritesList.css";

export const FavouritesList = ({ favourites }) => {
  console.log(favourites);
  return (
    <div className="favourites-wrapper">
      <div>Favourites</div>
      <div className="favourites-container">
        {[...favourites].map((entry) => {
          const key = entry[0];
          const value = entry[1];
          return (
            <div className="grid-item">
              <FavouriteCard
                favourite={{
                  username: key,
                  name: value.name,
                  headline: value.headline,
                  imageUrl: value.imageUrl,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
