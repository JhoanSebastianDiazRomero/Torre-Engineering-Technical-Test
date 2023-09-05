import React from "react";
import searchIcon from "../assets/search_users_icon.svg";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="input-container">
      <img src={searchIcon} className="search-icon" alt="search icon"></img>
      <input placeholder="Search user by name"></input>
    </div>
  );
};
