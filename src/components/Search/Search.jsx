import React, { useState } from "react";
import "./Search.scss";
// import { log } from "console";
// import Shop from "../../Pages/Shop/Shop";

const Search = ({ show, searchText }) => {
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
      {/* <Shop /> */}
    </div>
  );
};
// console.log(inputValue);

export default Search;
