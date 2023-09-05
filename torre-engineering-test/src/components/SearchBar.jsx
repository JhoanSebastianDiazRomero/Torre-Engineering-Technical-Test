import React, { useEffect, useMemo, useRef, useState } from "react";
import searchIcon from "../assets/search_users_icon.svg";
import "./SearchBar.css";
import debounce from "lodash.debounce";

const LIMIT = 10;

export const SearchBar = ({ setSearchResults, addToSearchHistory }) => {
  const [input, setInput] = useState("");
  const fetchData = () => {
    fetch("https://torre.ai/api/entities/_searchStream", {
      method: "POST",
      body: JSON.stringify({ query: input, limit: LIMIT }),
      headers: { "Content-type": "application/json" },
    }).then((response) => {
      response.text().then((text) => {
        const data = text?.match(/.+/g)?.map(JSON.parse);
        if (input === "") {
          setSearchResults([]);
        } else {
          setSearchResults(data);
        }
      });
    });
  };

  const sendRequest = () => {
    if (input !== "") {
      addToSearchHistory(input);
    }
    fetchData(input);
  };

  const onChange = (e) => {
    const value = e.target.value;
    setInput(value);
    debouncedCallback();
  };

  const ref = useRef(sendRequest);

  const debouncedCallback = useMemo(() => {
    const func = () => {
      ref.current?.();
    };
    return debounce(func, 500);
  }, []);

  useEffect(() => {
    ref.current = sendRequest;
  }, [input]);

  return (
    <div className="input-container">
      <img src={searchIcon} className="search-icon" alt="search icon"></img>
      <input
        placeholder="Search user by name"
        value={input}
        onChange={onChange}
      ></input>
    </div>
  );
};
