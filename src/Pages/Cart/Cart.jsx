import { Link } from "react-router-dom";
import "./cart.scss";
import { useEffect, useState } from "react";
import axios from "axios";
const Cart = () => {
  //  MAPPING/////////////////////////////
  // const [getCartItem] = useState(JSON.parse(localStorage.getItem("cartItems")));
  const [orders, setProduct] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/orders");
        console.log(orders);
        setProduct([response.data]);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <section className="cart-section">
      <div className="cart-header">
        <img src="../../../public/Meubel House_Logos-05.svg" alt="Eror" />
        <h2>Cart</h2>
        <p>
          <Link to="/" className="linkColor">
            Home
          </Link>
          <img src="../../../public/dashicons_arrow-down-alt2.svg" alt="Eror" />
          <Link to="/Cart" className="linkColor">
            Cart
          </Link>
        </p>
      </div>
      <div className="container">
        <div className="cart-flex">
          <div className="cart-left"></div>
          <div className="cart-right">
            <h2>Cart Totals</h2>
            <div className="">
              {orders.map((el) => {
                return (
                  <div className="details-card" key={el.id}>
                    <div className="right">
                      <h1>{el.name}</h1>
                    </div>
                  </div>
                );
              })}
            </div>
            <button className="checkout">Check Out</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
