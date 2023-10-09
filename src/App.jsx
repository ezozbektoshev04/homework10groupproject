import "./App.css";
// import MyCarousel from "./components/Home/Corusel/Corusel";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Shop from "./Pages/Shop/Shop";
import Details from "./Pages/SingleProduct/Details";

function App() {
  return (
    <div>
      {/* <MyCarousel /> */}
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
