import { useEffect, useState } from "react";
import "./Checkout.scss";
import axios from "axios";

const Checkout = () => {
  const [cartProduct, setCartProduct] = useState([]);
  useEffect(() => {
    axios("http://localhost:3000/orders")
      .then((response) => setCartProduct(response.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="checkout-page">
      <div className="container">
        <div className="checkout-page__wrapper">
          <div className="checkout__form">
            <input type="text" name="" id="" />
          </div>
          <div className="checkout__total">
            {
              cartProduct.map((item, index)=>
              <>
              <div className="total__left">
              <h1>Product</h1>
              <h3>
                {item.name} <span>x 1</span>
              </h3>
              <h4>Subtotal</h4>
              <h5>Total</h5>
            </div>
            <div className="total__right">
              <h1>Subtotal</h1>
              <h3>Rs. 250,500.00</h3>
              <h4>Rs. 250,500.00</h4>
              <h5>Rs. 250,500.00</h5>
            </div></>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
