import React, { useState } from "react";
import "./Search.scss";

const Search = ({ show }) => {
  const [input, setInput] = useState("");
  const searchText = (e) => {
    const inputText = e.target.value.toLowerCase();
    setInput(inputText);
  };

  return (
    <div className="container search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          id="search"
          className={show == false ? "input2" : "input1"}
          onChange={searchText}
        />
      </form>
    </div>
  );
};

export default Search;
