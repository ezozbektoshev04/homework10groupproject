import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Shop from "./Pages/Shop/Shop";
// import Details from "./Pages/SingleProduct/Details";
import AllProducs from "./Pages/AllProducs/AllProducs";

function App() {
  return (
    <div>
      <Router>
        <Header />
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
