// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// const Details = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://localhost:3000/products/" + id
//         );
//         setProduct(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, [id]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h2>{news.name}</h2>
//       <p>{product.description}</p>
//       {/* Отобразите остальные свойства продукта */}
//     </div>
//   );
// };

// export default Details;
