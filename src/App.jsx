import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./Pages/Shop/Shop";
import Details from "./Pages/SingleProduct/Details";

// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Footer from "./components/Footer/Footer";

// import React from "react";
// import "./App.css";

// import Shop from "./Pages/Shop/Shop";
// import AllProducs from "./Pages/AllProducs/AllProducs";

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
          <Route path="/" element={<Hero />}></Route>
          <Route path="/Shop" element={<Shop />}></Route>
          <Route path="/Details/:id" element={<Details />}></Route>
          {/* uchinchi project ↓ */}
          {/* <Route path="/______" element={<_______ />}></Route> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
