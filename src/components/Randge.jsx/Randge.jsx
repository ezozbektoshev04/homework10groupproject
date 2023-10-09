import React from "react";
import "./Randge.scss";
const Randge = () => {
  return (
    <div className="container">
      <div className="section1">
        <p className="randge-p1">Browse The Range</p>
        <p className="randge-p2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="randge-cards">
          <div className="card-randge">
            <img className="randge-img1" src="randge-img1.png" alt="" />
            <p className="randge-p3">Dining</p>
          </div>

          <div className="card-randge">
            <img className="randge-img1" src="randge-img2.png" alt="" />
            <p className="randge-p3">Living</p>
          </div>

          <div className="card-randge">
            <img className="randge-img1" src="randge-img3.png" alt="" />
            <p className="randge-p3">Badroom</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Randge;
