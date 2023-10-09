import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum dolorum
        dolores ad quam natus quia deserunt, voluptate vel quis maxime fugiat
        repellendus quos, nobis mollitia cumque consequuntur modi cupiditate.
        Deserunt?
      </h1>
      {product.map((el) => {
        <div key={el.id}>
          <h1>{el.category}</h1>
        </div>;
      })}
      {/* Отобразите остальные свойства продукта */}
    </div>
  );
};

export default Details;
