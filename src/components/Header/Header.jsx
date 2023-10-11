import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Search from "../Search/Search";

const Header = ({ searchText }) => {
  const [show, setShow] = useState(false);
  const showSearchBar = () => {
    setShow(!show);
  };
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
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
            {/* <div className="nav-icon">
              <img src="/image11.svg" alt="" />
            </div> */}
            <div className="nav-icon" onClick={showSearchBar}>
              <img src="/image12.svg" alt="" />
            </div>
            {/* <div className="nav-icon">
              <img src="/image13.svg" alt="" />
            </div> */}
            <div className="nav-icon">
              <img onClick={openModal} src="/image14.svg" alt="" />
            </div>
            {isOpen && (
              <div className="modal" onClick={closeModal}>
                <div className="modal-content">
                  <div className="modal-text">
                    <h1>Shopping Cart</h1>
                    <img
                      className="close"
                      onClick={closeModal}
                      src="/x.svg"
                      alt=""
                    />
                    <hr />
                  </div>
                  {/* map */}
                  <div className="buttons-modal">
                    <Link to="/Cart">
                      <button className="buttonM">Cart</button>
                    </Link>
                    <Link to="/Checkout">
                      <button className="buttonM">Check Out</button>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </nav>
      </div>
      <Search show={show} searchText={searchText} />
    </header>
  );
};

export default Header;
