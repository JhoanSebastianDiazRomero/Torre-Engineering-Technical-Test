import React, { useState } from "react";
import "./SearchResult.css";
import emptyStar from "../assets/empty_star.svg";
import filledStar from "../assets/filled_star.svg";

const DEFAULT_PROFILE_PICTURE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sin_cara.png";

export const SearchResult = ({ result, handleFavouritesChange }) => {
  const [isFavourite, setIsFavourite] = useState(false);

  const getImagePath = () => {
    return result.imageUrl != null
      ? result.imageUrl
      : DEFAULT_PROFILE_PICTURE_URL;
  };

  function changeFavourite() {
    setIsFavourite(!isFavourite);
    handleFavouritesChange(
      result.username,
      result.name,
      result.professionalHeadline,
      getImagePath(),
    );
  }

  function getFavouritePath() {
    return isFavourite ? filledStar : emptyStar;
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
        src={getFavouritePath()}
        className="star"
        alt="Add/remove favorite"
        onClick={changeFavourite}
      />
    </div>
  );
};
