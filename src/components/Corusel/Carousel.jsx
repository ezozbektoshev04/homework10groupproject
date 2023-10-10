import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Carousel.css";

const MyCarousel = () => {
  const [products, setProducts] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <div>
      <Carousel activeIndex={activeIndex} onSelect={handleSelect}>
        {products.slice(0, 4).map((product, index) => (
          <Carousel.Item key={product.id}>
            <div className="carousel-item-container">
              <div className="carousel-text">
                <h3>50+ Beautiful rooms for your inspiration</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quisquam, hic, praesentium.
                </p>
                <button className="btn btn-read-more">Read More</button>
              </div>
              <div className="carousel-image-container">
                <div className="carousel-image-text">
                  <div className="title-div">
                    <p>
                      {product.id}-{product.title}
                    </p>
                  </div>
                  <p className="price-product">{product.price}</p>
                  <button className="btn btn-play">
                    <img
                      src="https://img.icons8.com/ios-filled/50/long-arrow-right.png"
                      alt="long-arrow-right"
                    />
                  </button>
                </div>
                <img
                  src={product.img}
                  alt={product.title}
                  className="carousel-image"
                />

                {index < products.length - 1 && (
                  <img
                    src={products[index + 1].img}
                    alt={products[index + 1].title}
                    className="carousel-image-small"
                  />
                )}
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="carousel-indicators">
        {products.slice(0, 4).map((_, index) => (
          <button
            key={index}
            className={`indicator-btn ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default MyCarousel;
