import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
const Header = React.lazy(() => import("./components/Header/Header"));
const Shop = React.lazy(() => import("./Pages/Shop/Shop"));
const AllProducs = React.lazy(() => import("./Pages/AllProducs/AllProducs"));

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
          {/* uchinchi project ↓ */}
          {/* <Route path="/______" element={<_______ />}></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
