import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
<<<<<<< HEAD
import Shop from "./Pages/Shop/Shop";
import Details from "./Pages/SingleProduct/Details";
=======
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";

import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Randge from "./components/Randge.jsx/Randge";
import Furniro from "./components/Furniro/Furniro";
const Header = React.lazy(() => import("./components/Header/Header"));
const Shop = React.lazy(() => import("./Pages/Shop/Shop"));
const AllProducs = React.lazy(() => import("./Pages/AllProducs/AllProducs"));
>>>>>>> d7f1c8e2f582c710c8df4ab01244df7037bf7e50

function App() {
  return (
    <div>
      <Router>
        <Header />
        {/* <Randge /> */}
        {/* <Furniro /> */}
        <Routes>
          {/* //birinchi project ↓ */}
          {/* <Route path="/" element={<AllProducs />}></Route> */}
          {/* ikkinchi project ↓ */}
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Details/:id" element={<Details />}></Route>
          {/* uchinchi project ↓ */}
          {/* <Route path="/______" element={<_______ />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
