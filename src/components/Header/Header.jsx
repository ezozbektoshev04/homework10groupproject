import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import Search from "../Search/Search";
import axios from "axios";
const Header = ({ searchText }) => {
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const showSearchBar = () => {
    setShow(!show);
  };
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    try {
      axios.get("http://localhost:3000/orders");
      fetchAllorders();
    } catch (error) {
      console.log(error);
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const fetchAllorders = async () => {
    try {
      const res = await axios.get("http://localhost:3000/orders");
      setOrders(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchAllorders();
  }, []);
  // const selectedData = JSON.parse(localStorage.getItem("selected"));
  const deleteData = (id) => {
    try {
      axios.delete("http://localhost:3000/orders/" + id);
      fetchAllorders();
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(selectedData);

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
            <NavLink className="nav-link" to="/Contact">
              Contact
            </NavLink>
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
              {/* <NavLink to='/cart'><img src="/image14.svg" alt="cart" /></NavLink> */}
              <img onClick={openModal} src="/image14.svg" alt="" />
            </div>

            {isOpen && (
              <div className="modal">
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
                  <div className="selected-data">
                    {orders.length > 0
                      ? orders.map((el) => {
                          return (
                            <div className="selected-card" key={el.id}>
                              <div className="img1">
                                <img src={el.img} alt="" className="photo120" />
                              </div>
                              <div className="div-content">
                                <p className="p1-content">{el.title}</p>
                                <p className="p2-content">
                                  <span className="sp1">1</span>{" "}
                                  <span className="sp2">X</span> Rs.{el.price}
                                </p>
                              </div>
                              <div
                                className="div-img2"
                                onClick={() => deleteData(el.id)}
                              >
                                <img src="/image15.svg" alt="" />
                              </div>
                            </div>
                          );
                        })
                      : null}
                  </div>
                  {/* map */}
                  <div className="buttons-modal">
                    <Link to="/Cart">
                      <button className="buttonM" onClick={closeModal}>
                        Cart
                      </button>
                    </Link>
                    <Link to="/Checkout">
                      <button className="buttonM" onClick={closeModal}>
                        Check Out
                      </button>
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
