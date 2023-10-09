import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <section className="Hero">
        <div className="container">
          <div className="hero-content">
            <h2>New Arrival</h2>
            <h1>Discover Our New Collection</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="hero-btn">BUY Now</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
