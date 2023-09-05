import React, { useEffect, useMemo, useRef, useState } from "react";
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

  const sendRequest = () => {
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
    return debounce(func, 600);
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
