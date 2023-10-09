import React, { useState } from "react";
import "./Search.scss";

const Search = ({ show }) => {
  return (
    <div className="container search">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="search"
          placeholder="Search..."
          id="search"
          className="input1"
        />
      </form>
    </div>
  );
};

export default Search;
