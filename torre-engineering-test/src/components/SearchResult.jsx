import React, { useState } from "react";
import "./SearchResult.css";
import emptyStar from "../assets/empty_star.svg";
import filledStar from "../assets/filled_star.svg";

const DEFAULT_PROFILE_PICTURE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sin_cara.png";

//Component that represents each individual result
export const SearchResult = ({ result, handleFavoritesChange }) => {
  //State that represents if the user picked the person as favorite
  const [isFavorite, setIsFavorite] = useState(false);

  const getImagePath = () => {
    return result.imageUrl != null
      ? result.imageUrl
      : DEFAULT_PROFILE_PICTURE_URL;
  };

  function changeFavorite() {
    setIsFavorite(!isFavorite);
    handleFavoritesChange(
      result.username,
      result.name,
      result.professionalHeadline,
      getImagePath(),
    );
  }

  function getFavoritePath() {
    return isFavorite ? filledStar : emptyStar;
  }

  return (
    <div className="search-result">
      <a
        className="user-entry"
        href={`https://torre.ai/${result.username}`}
        target="_blank"
      >
        <img
          src={getImagePath()}
          className="profile-picture"
          alt="Profile Picture"
        />
        <div className="user-info">
          <div className="name">{result.name}</div>
          <div className="headline">{result.professionalHeadline}</div>
        </div>
      </a>
      <img
        src={getFavoritePath()}
        className="star"
        alt="Add/remove favorite"
        onClick={changeFavorite}
      />
    </div>
  );
};
