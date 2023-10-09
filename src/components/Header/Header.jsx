import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="container">
      <nav>
        <a href="#" className="logo">
          <img src="image10.png" alt="photo" />
        </a>
        <NavLink></NavLink>
      </nav>
    </div>
  );
};

export default Header;
