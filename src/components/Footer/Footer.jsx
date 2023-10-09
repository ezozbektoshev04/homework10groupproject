import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <span className="line"></span>
      <div className="container">
        <div className="d20">
          <div className="d10">
            <p className="p10">Funiro.</p>
            <p className="p11">
              400 University Drive Suite 200 Coral <br /> Gables, <br /> FL
              33134 USA
            </p>
          </div>
          <div className="d2">
            <p className="p3">Links</p>
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
            <NavLink className="nav-link" to="/Shop">
              Shop
            </NavLink>
            <NavLink className="nav-link">About</NavLink>
            <NavLink className="nav-link">Contact</NavLink>
          </div>
          <div className="d2">
            <p className="p3">Help</p>
            <p className="p4">Payment Options</p>
            <p className="p4">Returns</p>
            <p className="p4">Privacy Policies</p>
          </div>
          <div className="d2">
            <p className="p3">Newsletter</p>
            <form>
              <input
                type="email"
                className="input1"
                placeholder="Enter Your Email Address"
              />
              <button className="btn1">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="d21">
          <span className="line2"></span>
          <p className="p20">2023 furino. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
