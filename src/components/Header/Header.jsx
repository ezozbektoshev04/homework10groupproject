import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
              <img onClick={openModal} src="/image14.svg" alt="" />
            </div>
            {isOpen && (
              <div className="modal">
                <div className="modal-content">
                  <span className="close" onClick={closeModal}>
                    &times;
                  </span>
                  <h2>Модальное окно</h2>
                  <p>
                    Содержимое модального окна.. Lorem ipsum dolor sit, amet
                    consectetur adipisicing elit. Quo nemo animi eos tempore
                    nesciunt, aspernatur qui quos cupiditate vero officiis atque
                    consequuntur rem! Id molestiae hic molestias aspernatur quo
                    at!.
                  </p>
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
