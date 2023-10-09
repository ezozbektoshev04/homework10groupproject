import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css"

const Details = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/products/" + id
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{news.name}</h2>
      <p>{product.description}</p>
      {/* Отобразите остальные свойства продукта */}
    </div>
  );
};

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

  // if (!product) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div>
      {product.map((el) => {
        return (
          <div key={el.id}>
            <h1 style={{ marginTop: "200px" }}>{el.title}</h1>
          </div>
        );
      })}
      {/* Отобразите остальные свойства продукта */}
    </div>
  );
};

export default Details;
