import React, { useState } from "react";
import searchIcon from "../assets/search_users_icon.svg";
import "./SearchBar.css";
import debounce from "lodash.debounce";

export const SearchBar = () => {
  const [input, setInput] = useState("");
  const fetchData = (value) => {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((json) => {
        const results = json.filter((user) => {
          return (
            value &&
            user &&
            user.name &&
            user.name.toLowerCase().includes(value)
          );
        });
        console.log(results);
      }),
    );
  };

  const handleChange = (value) => {
    setInput(value);
    fetchData(value);
  };

  return (
    <div className="input-container">
      <img src={searchIcon} className="search-icon" alt="search icon"></img>
      <input
        placeholder="Search user by name"
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      ></input>
    </div>
  );
};
