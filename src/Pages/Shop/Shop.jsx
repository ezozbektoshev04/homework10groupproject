import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Shop.scss";
import axios from "axios";
import Header from "../../components/Header/Header";
// import { log } from "console";
// import Search, { input } from "../../components/Search/Search";
// import { input } from "../../components/Search/Search";

// import { Button } from "bootstrap";
// import { Form } from "react-router-dom";

const Shop = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedPost, setSelectedPost] = useState("");

  // console.log(input);
  // PAGINATION
  let limit = 6;
  let numOfpages = Math.ceil(allPosts.length / limit);
  let arrBtns = [];
  for (let i = 1; i <= numOfpages; i++) {
    arrBtns.push(i);
  }

  const fetchPosts = async (page) => {
    try {
      let url = `http://localhost:3000/products?_page=${page}&_limit=${limit}`;
      const res = await axios.get(url);
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const [input, setInput] = useState("");
  const searchText = (e) => {
    const inputText = e.target.value.toLowerCase();
    setInput(inputText);
    console.log(input);
  };

  const filtered = posts.filter((el) => {
    if (input === "") {
      return el;
    } else {
      return (
        el.name.toLowerCase().includes(input) ||
        el.title.toLowerCase().includes(input)
      );
    }
  });

  const fetchAllPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/products");
      setAllPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchAllPosts();
  }, []);

  useEffect(() => {
    fetchPosts(page);
  }, [page, selectedCategory]);

  const filterPostsByCategory = (category) => {
    setSelectedCategory(category);
    setPage(2);
  };
  // const filterData = (e) => {
  //   const aa = e.target.value;
  //   setSelectedPost(aa);
  //   console.log(selectedPost);
  // };
  function addToCart(item){
    console.log(item);
  }

  return (
    <div>
      <Header searchText={searchText} />
      <section className="home-section">
        <img className="shop-img" src="/Shop.img.png" alt="Shop" />
        <div className="container">
          <div className="home-content">
            <h1>Shop</h1>
            <div className="sd">
              <NavLink className="text-white" to="/">
                <p>Home</p>
              </NavLink>
              <p>→</p>
              <NavLink className="text-white" to="/Shop">
                <p>Shop</p>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
      {/* /////////////////////////////// */}
      <section className="filtered-section">
        <div className="container">
          <div className="content">
            <div className="first">
              <select
                className="filter"
                name="filter"
                id="All"
                onChange={(e) => {
                  const aa = e.target.value;
                  setSelectedPost(aa);
                  console.log(selectedPost);
                }}
              >
                <option className="opn" value="All">
                  All
                </option>
                <option className="opn" value="Syltherine">
                  Syltherine
                </option>
                <option className="opn" value="Leviosa">
                  Leviosa
                </option>
                <option className="opn" value="Lolito">
                  Lolito
                </option>
                <option className="opn" value="Respira">
                  Respira
                </option>
              </select>
              <h1>Showing 1 - 8 of 30 results</h1>
            </div>
            <div className="second">
              <h1>Show</h1>
              <h2>8</h2>
              <h1>Short By</h1>
              <h2>Default</h2>
            </div>
          </div>
        </div>
      </section>
      {/* /////////////////////////////// */}
      <div className="container">
        <div className="cards-content">
          <div className=" cards">
            {filtered.map((shop, index) => (
              <div key={index} className="cards-item">
                <div className="bg-img">
                  <img className="boxs" src={shop.img} alt="" />
                  <p>{shop.name}</p>
                </div>
                <h3 className="des">{shop.title}</h3>
                <div className="prices">
                  <p className="price">Rp {shop.price}</p>
                  <p className="notPrice">Rp {shop.price + 1000000}</p>
                </div>
                <div className="hovered">
                  <Link to={`/Details/${shop.id}`}>
                    <button className="hj">Shop Details</button>
                  </Link>
                  <div className="items">
                    <svg
                      className="rf"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M12 10.6667C11.4747 10.6667 11 10.8733 10.644 11.2047L5.94 8.46667C5.97333 8.31334 6 8.16 6 8C6 7.84 5.97333 7.68667 5.94 7.53334L10.64 4.79334C11 5.12667 11.4733 5.33334 12 5.33334C13.1067 5.33334 14 4.44 14 3.33334C14 2.22667 13.1067 1.33334 12 1.33334C10.8933 1.33334 10 2.22667 10 3.33334C10 3.49334 10.0267 3.64667 10.06 3.8L5.36 6.54C5 6.20667 4.52667 6 4 6C2.89333 6 2 6.89334 2 8C2 9.10667 2.89333 10 4 10C4.52667 10 5 9.79333 5.36 9.46L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6667C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
                        fill="white"
                      />
                    </svg>
                    <p>Share</p>
                  </div>
                  <div className="items">
                    <svg
                      className="rf"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00001V5.2H11.82L10.08 7ZM5.86001 9L4.86001 8L1.42001 11.5L4.91001 15L5.91001 14L4.10001 12.2H14V10.8H4.10001L5.86001 9Z"
                        fill="white"
                      />
                    </svg>
                    <p>Compare</p>
                  </div>
                  <div className="items">
                    <svg
                      className="rf"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M7.99973 14.0361C-5.33333 6.66667 3.99999 -1.33333 7.99973 3.72537C12 -1.33334 21.3333 6.66667 7.99973 14.0361Z"
                        stroke="white"
                        stroke-width="1.8"
                      />
                    </svg>
                    <p>Like</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="d-flex justify-center buttons">
            {arrBtns?.map((item) => (
              <button key={item} onClick={() => setPage(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
      {/* /////////////////////////////// */}
      {/* <section className="buttom">
        <div className="container">
          <div className="buttom-content">
            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <path
                  d="M49.3546 3.51562C48.0743 3.51562 46.8741 3.86121 45.8389 4.46156V1.75781C45.8389 0.787031 45.0519 0 44.0811 0H15.9561C14.9852 0 14.1982 0.787031 14.1982 1.75781V4.48301C13.1549 3.8693 11.9409 3.51562 10.6454 3.51562C6.7684 3.51562 3.61418 6.66984 3.61418 10.5469C3.61418 13.5041 4.49051 16.3615 6.14836 18.8102C8.97071 22.9789 12.4511 24.0607 15.3309 25.2127C16.9915 29.348 20.3495 32.6252 24.5384 34.1769L23.2421 42.4219H22.9874C20.0796 42.4219 17.7139 44.7875 17.7139 47.6953V56.4844H15.9561C14.9854 56.4844 14.1983 57.2714 14.1983 58.2422C14.1983 59.213 14.9854 60 15.9561 60H44.0811C45.0519 60 45.8389 59.213 45.8389 58.2422C45.8389 57.2714 45.0519 56.4844 44.0811 56.4844H42.3233V47.6953C42.3233 44.7875 39.9577 42.4219 37.0499 42.4219H36.7951L35.499 34.177C39.694 32.623 43.0557 29.3386 44.7138 25.1948C47.4343 24.1066 51.0005 23.0217 53.8518 18.8102C55.5096 16.3615 56.3859 13.504 56.3859 10.5469C56.3858 6.66984 53.2316 3.51562 49.3546 3.51562ZM14.1852 20.968C9.89918 19.2536 7.12981 15.1631 7.12981 10.5469C7.12981 8.60836 8.70692 7.03125 10.6454 7.03125C12.5839 7.03125 14.1611 8.60836 14.1611 10.5469C14.1611 10.6705 14.1741 10.791 14.1983 10.9073V19.3359C14.1983 19.9009 14.2287 20.4588 14.2868 21.0087L14.1852 20.968ZM38.8077 56.4844H21.2296V52.9688H38.8077V56.4844ZM37.0499 45.9375C38.0191 45.9375 38.8077 46.7261 38.8077 47.6953V49.4531H21.2296V47.6953C21.2296 46.7261 22.0181 45.9375 22.9874 45.9375C23.9411 45.9375 34.8134 45.9375 37.0499 45.9375ZM26.8009 42.4219L27.9641 35.023C28.6368 35.1107 29.3224 35.1562 30.0186 35.1562C30.7148 35.1562 31.4005 35.1105 32.0732 35.023L33.2364 42.4219H26.8009ZM42.3233 19.3359C42.3233 26.1207 36.8034 31.6406 30.0186 31.6406C23.2338 31.6406 17.7139 26.1207 17.7139 19.3359V10.5469H42.3233V19.3359ZM42.3233 7.03125H17.7139V3.51562H42.3233V7.03125ZM45.8147 20.968L45.7522 20.993C45.8092 20.4483 45.8388 19.8955 45.8388 19.3359V10.5469C45.8389 8.60836 47.4161 7.03125 49.3546 7.03125C51.2931 7.03125 52.8702 8.60836 52.8702 10.5469C52.8702 15.1631 50.1008 19.2537 45.8147 20.968Z"
                  fill="#242424"
                />
              </svg>
              <div className="hg">
                <h5>High Quality</h5>
                <p>crafted from top materials</p>
              </div>
            </div>
            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <g clip-path="url(#clip0_117_621)">
                  <path
                    d="M57.1194 21.2612C56.3276 18.8097 56.6651 15.1296 54.6073 12.2882C52.5333 9.42438 48.9262 8.61039 46.8894 7.1207C44.874 5.64672 42.999 2.43918 39.6089 1.33293C36.3144 0.257852 32.9455 1.71672 30.3333 1.71672C27.7216 1.71672 24.3529 0.2575 21.0578 1.33281C17.6683 2.43883 15.7918 5.64707 13.7777 7.12035C11.7431 8.60828 8.13323 9.42449 6.05959 12.2879C4.00354 15.127 4.33764 18.8154 3.54733 21.2611C2.79522 23.5888 0.333344 26.3825 0.333344 30.0003C0.333344 33.6203 2.79241 36.4032 3.54733 38.7393C4.33905 41.1909 4.00155 44.8709 6.05936 47.7123C8.13323 50.5763 11.7403 51.3902 13.7773 52.88C15.7924 54.3537 17.6677 57.5615 21.0578 58.6676C24.3501 59.742 27.7243 58.2838 30.3333 58.2838C32.9388 58.2838 36.3208 59.7405 39.6089 58.6677C42.9985 57.5617 44.8739 54.3542 46.889 52.8802C48.9236 51.3923 52.5335 50.5761 54.6071 47.7127C56.6633 44.8735 56.3289 41.1854 57.1194 38.7394C57.8715 36.4116 60.3333 33.618 60.3333 30.0003C60.3333 26.3805 57.8749 23.5984 57.1194 21.2612ZM52.6591 37.298C51.7362 40.1545 51.978 43.3512 50.8108 44.963C49.6279 46.5962 46.5202 47.3423 44.1222 49.0963C41.7505 50.8308 40.0882 53.5804 38.1548 54.2112C36.3257 54.8082 33.3449 53.5961 30.3335 53.5961C27.2999 53.5961 24.3499 54.8107 22.512 54.2112C20.5789 53.5804 18.9189 50.8327 16.5446 49.0962C14.1608 47.3528 11.0354 46.5914 9.85588 44.9628C8.69245 43.3564 8.92506 40.1375 8.00784 37.2981C7.10877 34.5162 5.02084 32.1074 5.02084 30.0003C5.02084 27.891 7.1069 25.4905 8.0076 22.7025C8.93045 19.8462 8.68869 16.6492 9.85588 15.0375C11.0381 13.4054 14.1481 12.6569 16.5446 10.9042C18.9239 9.1641 20.5757 6.42109 22.5118 5.78934C24.3393 5.19309 27.3298 6.40445 30.3332 6.40445C33.3722 6.40445 36.3149 5.18898 38.1547 5.78934C40.0876 6.42004 41.7489 9.16879 44.1222 10.9043C46.5057 12.6477 49.6313 13.4091 50.8108 15.0377C51.9745 16.6444 51.7406 19.86 52.6589 22.7023V22.7024C53.5579 25.4843 55.6458 27.8931 55.6458 30.0003C55.6458 32.1095 53.5598 34.51 52.6591 37.298ZM41.1314 22.4774C42.0467 23.3928 42.0467 24.8767 41.1314 25.792L29.4002 37.5231C28.4848 38.4385 27.0008 38.4384 26.0855 37.5231L19.5355 30.973C18.6201 30.0577 18.62 28.5737 19.5353 27.6585C20.4507 26.7433 21.9349 26.7432 22.8499 27.6585L27.7428 32.5513L37.8166 22.4775C38.7319 21.5622 40.216 21.5622 41.1314 22.4774Z"
                    fill="#242424"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_117_621">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.333344)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="hg">
                <h5>Warranty Protection</h5>
                <p>Over 2 years</p>
              </div>
            </div>
            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="61"
                height="60"
                viewBox="0 0 61 60"
                fill="none"
              >
                <g clip-path="url(#clip0_117_629)">
                  <path
                    d="M56.0146 31.1019V3.77964C56.0146 2.80489 55.2243 2.01465 54.2496 2.01465H6.96174C5.98699 2.01465 5.19675 2.80489 5.19675 3.77964V33.28C4.34531 33.404 3.51295 33.7346 2.77659 34.2812C0.455278 35.9273 -0.0937517 39.6109 1.85068 41.8827L9.80055 51.5204C14.7216 57.2798 19.9491 57.9854 27.7205 57.9854C34.3894 57.9854 37.371 58.0148 43.1831 56.6905L48.8426 55.3369C49.7603 56.6184 51.2171 57.4485 52.8549 57.4485H55.6429C58.4129 57.4485 60.6666 55.0744 60.6666 52.1561V36.3784C60.6667 33.592 58.6116 31.3031 56.0146 31.1019ZM48.0813 34.7326L45.7296 33.5382C41.863 31.5865 37.3925 31.5142 33.4648 33.3403C32.3932 33.7618 30.056 35.1759 28.8437 35.1286H20.6834C17.9766 35.1286 15.7743 37.3307 15.7743 40.0376V41.3247C15.7591 41.3087 15.7433 41.2936 15.7283 41.2773L9.90091 34.9519C9.54827 34.5692 9.15209 34.2489 8.72684 33.9919V16.481H23.1707V22.951C23.1707 23.9257 23.9609 24.7159 24.9357 24.7159H36.0729C37.0476 24.7159 37.8379 23.9257 37.8379 22.951V16.481H52.4847V31.1018C50.4225 31.2611 48.7029 32.7364 48.0813 34.7326ZM26.7006 16.481H34.3078V21.186H26.7006V16.481ZM52.4846 12.951H37.8379V5.54463H52.4847V12.951H52.4846ZM34.3079 5.54463V12.9511H26.7007V5.54463H34.3079ZM23.1706 5.54463V12.9511H8.72673V5.54463H23.1706ZM42.3639 53.2568C36.9948 54.4865 33.7612 54.4367 27.7838 54.4367C20.4885 54.4367 16.9636 54.3188 12.5238 49.274L4.57394 39.6363C3.19113 37.8357 5.69577 35.7101 7.30473 37.3435L13.1321 43.669C14.6723 45.2941 16.6103 46.1885 18.9991 46.2411H35.1556C36.1303 46.2411 36.9206 45.4508 36.9206 44.4761C36.9206 43.5013 36.1303 42.7111 35.1556 42.7111H19.3042V40.0373C19.3042 39.277 19.9228 38.6583 20.6832 38.6583H28.8436C30.682 38.79 33.3355 37.2549 34.9529 36.541C37.8946 35.1733 41.2429 35.2274 44.135 36.6872L47.8314 38.5646V51.9489L42.3639 53.2568ZM57.1367 52.156C57.1367 53.1278 56.4666 53.9184 55.643 53.9184H52.855C52.0313 53.9184 51.3613 53.1278 51.3613 52.156V36.3784C51.3613 35.4066 52.0315 34.6159 52.855 34.6159H55.643C56.4666 34.6159 57.1367 35.4065 57.1367 36.3784V52.156Z"
                    fill="#242424"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_117_629">
                    <rect
                      width="60"
                      height="60"
                      fill="white"
                      transform="translate(0.666687)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <div className="hg">
                <h5>Free Shipping</h5>
                <p>Order over 150 $</p>
              </div>
            </div>
            <div className="item">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
              >
                <g clip-path="url(#clip0_117_635)">
                  <path
                    d="M54.6936 23.9628C54.2992 10.6825 43.3742 0 29.9999 0C16.6257 0 5.70065 10.6825 5.30618 23.9628L3.52936 25.7396V37.7898L5.29406 39.5545V47.7647C5.29406 52.5652 9.19948 56.4706 13.9999 56.4706H16.1858C16.9143 58.5246 18.8758 60 21.1764 60H24.7058C27.0079 60 28.9705 58.5225 29.6978 56.4664C29.7987 56.4681 29.8997 56.4706 29.9999 56.4706C38.5221 56.4706 45.6527 50.3981 47.2922 42.3529H51.9074L56.4705 37.7898V25.7396L54.6936 23.9628ZM29.9999 3.52941C40.4742 3.52941 49.1954 11.174 50.8807 21.1765H47.2922C45.6527 13.1313 38.5221 7.05882 29.9999 7.05882C21.4778 7.05882 14.3472 13.1313 12.7077 21.1765H9.11924C10.8045 11.174 19.5257 3.52941 29.9999 3.52941ZM43.6709 21.1765C37.9663 21.1594 33.9369 21.5068 30.6148 16.6506L29.0016 14.2926L27.6152 16.7907C25.5952 20.4306 22.8749 21.1765 19.4117 21.1765H16.329C17.9002 15.0944 23.4337 10.5882 29.9999 10.5882C36.5662 10.5882 42.0997 15.0944 43.6709 21.1765ZM12.3529 38.8235H9.55442L7.05877 36.3279V27.2015L9.55442 24.7059H12.3529V38.8235ZM8.82348 47.7647V42.3529H12.7043C13.3687 45.6441 14.9582 48.6652 17.313 51.0916C16.8194 51.6191 16.4322 52.2467 16.1858 52.9412H13.9999C11.1456 52.9412 8.82348 50.6191 8.82348 47.7647ZM24.7058 56.4706H21.1764C20.2032 56.4706 19.4117 55.6791 19.4117 54.7059C19.4117 53.7328 20.2032 52.9412 21.1764 52.9412H24.7058C25.6789 52.9412 26.4705 53.7328 26.4705 54.7059C26.4705 55.6791 25.6789 56.4706 24.7058 56.4706ZM44.1176 38.8235C44.1176 46.608 37.7844 52.9412 29.9999 52.9412C29.8988 52.9412 29.7968 52.9392 29.6949 52.9368C28.9652 50.8851 27.0048 49.4118 24.7058 49.4118C21.0823 49.4198 21.1401 49.3936 20.6884 49.4352C17.6247 46.7498 15.8823 42.9248 15.8823 38.8235V24.7059H19.4117C22.5349 24.7059 26.3384 24.1909 29.2827 20.6076C33.1674 24.6786 37.9147 24.7059 42.1762 24.7059H44.1176V38.8235ZM52.9411 36.3279L50.4455 38.8235H47.647V24.7059H50.4455L52.9411 27.2015V36.3279Z"
                    fill="#242424"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_117_635">
                    <rect width="60" height="60" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className="hg">
                <h5>24 / 7 Support</h5>
                <p>Dedicated support</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Shop;
