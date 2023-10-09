import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav>
          <a href="#" className="logo">
            <img src="image10.png" alt="photo" />
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
              <img src="image11.svg" alt="" />
            </div>
            <div className="nav-icon">
              <img src="image12.svg" alt="" />
            </div>
            <div className="nav-icon">
              <img src="image13.svg" alt="" />
            </div>
            <div className="nav-icon">
              <img src="image14.svg" alt="" />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
