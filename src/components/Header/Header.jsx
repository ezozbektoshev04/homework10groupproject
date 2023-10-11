import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import Search from "../Search/Search";

const Header = ({ searchText }) => {
  const [show, setShow] = useState(false);
  const showSearchBar = () => {
    setShow(!show);
  };
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src="/image10.png" alt="photo" />
          </a>
          <div className="nav-links">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/Shop">
              Shop
            </NavLink>
            <NavLink className="nav-link">About</NavLink>
            <NavLink className="nav-link">Contact</NavLink>
          </div>
          <div className="nav-icons">
            <div className="nav-icon">
              <img src="/image11.svg" alt="" />
            </div>
            <div className="nav-icon" onClick={showSearchBar}>
              <img src="/image12.svg" alt="" />
            </div>
            <div className="nav-icon">
              <img src="/image13.svg" alt="" />
            </div>
            <div className="nav-icon">
              <NavLink to='/cart'><img src="/image14.svg" alt="cart" /></NavLink>
            </div>
          </div>
        </nav>
      </div>
      <Search show={show} searchText={searchText} />
    </header>
  );
};

export default Header;
