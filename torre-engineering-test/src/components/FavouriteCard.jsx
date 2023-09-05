import React from "react";
import "./FavouriteCard.css";

export const FavouriteCard = ({ favourite }) => {
  return (
    <div className="favourite-card">
      <img src={favourite.imageUrl} alt="Profile Picture" />
      <div className="info-container">
        <div className="name">{favourite.name}</div>
        <div className="headline">{favourite.headline}</div>
      </div>
    </div>
  );
};
