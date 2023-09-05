import React from "react";
import "./SearchResult.css";

const DEFAULT_PROFILE_PICTURE_URL =
  "https://upload.wikimedia.org/wikipedia/commons/a/aa/Sin_cara.png";

export const SearchResult = ({ result }) => {
  const getImagePath = () => {
    return result.imageUrl != null
      ? result.imageUrl
      : DEFAULT_PROFILE_PICTURE_URL;
  };

  return (
    <div
      className="search-result"
      onClick={(e) => alert(`You clicked on ${result.name}`)}
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
    </div>
  );
};
