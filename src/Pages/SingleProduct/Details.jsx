import React, { useEffect, useState, useReducer } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css";
import "./Details.scss";
import Header from "../../components/Header/Header";
//↓↓↓↓↓↓↓↓↓↓↓↓↓Umar qigan↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
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
  //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
  // Elbotir qilgan ↓↓↓↓↓↓↓↓↓↓↓↓↓/
  const [myProducts, setMyProducts] = useState([]);
  const [sliceimg, setSliceimg] = useState([]);
  const [sliceimg2, setSliceimg2] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setMyProducts(response.data);
        setSliceimg(myProducts.slice(-3, -1));
        setSliceimg2(myProducts.slice(-4, 4));
        // console.log(sliceimg);
        // console.log(setSliceimg2);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  let limit = 6;
  let numOfpages = Math.ceil(allPosts.length / limit);
  let arrBtns = [];
  for (let i = 1; i <= numOfpages; i++) {
    arrBtns.push(i);
  }
  useEffect(() => {
    const fetchPosts = async (page) => {
      try {
        let url = `http://localhost:3000/products?_page=${page}&_limit=${limit}`;
        const res = await axios.get(url);
        setPosts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchPosts();
  }, []);

  //↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑

  //↓↓↓↓↓↓↓↓↓↓↓
  const initialState = {
    firstCounter: 1,
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case "increment":
        return {
          ...state,
          firstCounter: state.firstCounter + action.payload,
        };
      case "decrement":
        return {
          ...state,
          firstCounter:
            state.firstCounter > 0 ? state.firstCounter - action.payload : 0,
        };
    }
  };

  const [count, dispatch] = useReducer(reducer, initialState);

  // const [cartItem, setCartItem] = useState([])
  // function addToCart(item){
  //   setCartItem([...cartItem, item])
  // }
  // localStorage.setItem("cartItems", JSON.stringify(cartItem))
  // ↑↑↑↑↑↑↑↑↑↑
  return (
    <div>
      {/* Umar aka section */}
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
                <div className="btn-div btn-item">
                  <button
                    className="decrementButton"
                    onClick={() => dispatch({ type: "decrement", payload: 1 })}
                  >
                    -
                  </button>
                  <button className="counts">{count.firstCounter}</button>
                  <button
                    className="incrementButton"
                    onClick={() => dispatch({ type: "increment", payload: 1 })}
                  >
                    +
                  </button>
                </div>
                <button className="btn-item" onClick={() => addToCart(el)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* Elbotir section */}
      <section className="elbotir-section1">
        <div className="container">
          <div className="phars">
            <b>Description</b>
            <span>Additional Information</span>
            <span>Reviews 5</span>
          </div>
          <p className="p1">
            Embodying the raw, wayward spirit of rock roll, the Kilburn portable
            active stereo speaker takes the unmistakable look and sound of
            Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p className="p2">
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of
            vintage styled engineering. Setting the bar as one of the loudest
            speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio which boasts a clear midrange and
            extended highs for a sound that is both articulate and pronounced.
            The analogue knobs allow you to fine tune the controls to your
            personal preferences while the guitar-influenced leather strap
            enables easy and stylish travel.
          </p>
          <div className="flex-class">
            <img
              src="../../../public/Cloud sofa three seater + ottoman_2 1.svg"
              alt="Eror"
            />
            <img
              src="../../../public/Cloud sofa three seater + ottoman_2 1.svg"
              alt="Eror"
            />
          </div>
        </div>
      </section>
      {/* Elbotir section2 */}
      <section className="elbotir-section2">
        <div className="container">
          <div className="cards-content">
            <div className=" cards">
              {posts.map((news, index) => (
                <div key={index} className="cards-item">
                  <div className="bg-img">
                    <img className="boxs" src={news.img} alt="" />
                    <p>{news.name}</p>
                  </div>
                  <h3 className="des">{news.title}</h3>
                  <div className="prices">
                    <p className="price">Rp {news.price}</p>

                    <p className="notPrice">Rp {news.price + 1000000}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="d-flex justify-center buttons">
              {/* {arrBtns?.map((item) => (
                <button key={item} onClick={() => setPage(item)}>
                  {item}
                </button>
              ))} */}
            </div>
          </div>
          <button className="showMore">
            <NavLink to="/Shop">Show More</NavLink>
          </button>
        </div>
      </section>
      {/* <Header counter={count.firstCounter} /> */}
    </div>
  );
};
export default Details;
