import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Details.scss";

const Details = () => {
  const param = useParams();
  const [product, setProduct] = useState([]);
  // console.log(param.id * 1);
  const paramId = param.id * 1;
  // console.log(paramId);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/products/" + paramId
        );
        setProduct([response.data]);
        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [paramId]);

  //   if (!product) {
  //     return <div>Loading...</div>;
  //   }
  const [cartItem, setCartItem] = useState([])
  function addToCart(item){
    setCartItem([...cartItem, item]);
  }
  localStorage.setItem("cartItems", JSON.stringify(cartItem))

  return (
    <div>
      {product.map((el) => {
        return (
          <div className="details-card" key={el.id}>
            <div className="top">
              <div className="container">
                <Link to={"/"}>
                  <h1 className="h11">Home →</h1>
                </Link>
                <Link to={"/Shop"}>
                  <h1 className="h11">Shop →</h1>
                </Link>
                <h1 className="h11">{el.name}</h1>
              </div>
            </div>
            <div className="left">
              <img src={el.img} alt="" />
            </div>
            <div className="right">
              <h1>{el.name}</h1>
              <p className="de">Pr {el.price}</p>
              <div className="ffr">
                <img src="/detail.img.yulduz.png" alt="" />
                <h4>5 Customer Review</h4>
              </div>
              <h2>Pr {el.decribtion}</h2>
              <h6>Size</h6>
              <div className="sizes">
                <p>L</p>
                <p>XL</p>
                <p>XS</p>
              </div>
              <h6>Color</h6>
              <div className="colors">
                <p></p>
                <p></p>
                <p></p>
              </div>
              <div className="btns">
                <h4 className="btn-item">- 1 +</h4>
                <button className="btn-item" onClick={()=>addToCart(el)}>Add To Cart</button>
                <h4 className="btn-item">+ Compare</h4>
              </div>
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
};
export default Details;
