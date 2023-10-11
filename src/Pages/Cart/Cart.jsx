import { Link } from "react-router-dom";
import "./cart.css";
const Cart = () => {
  //   const [myProducts, setMyProducts] = useState([]);
  //   const [myProductCartImg, setMyProductCartImg] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       try {
  //         const response = await axios.get("http://localhost:3000/products");
  //         const data = response.data;
  //         setMyProducts(data);
  //         setMyProductCartImg(data.img);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchData();
  //   }, []);
  return (
    <section className="cart-section">
      <div className="cart-header">
        <img src="../../../public/Meubel House_Logos-05.svg" alt="Eror" />
        <h2>Cart</h2>
        <p>
          <Link to="/" className="linkColor">
            Home
          </Link>
          <img src="../../../public/dashicons_arrow-down-alt2.svg" alt="Eror" />
          <Link to="/Cart" className="linkColor">
            Cart
          </Link>
        </p>
      </div>
      <div className="container">
        <div className="cart-flex">
          <div className="cart-left">
            <table>
              <thead>
                <th>
                  <td>Product</td>
                  <td>Price</td>
                  <td>Quantity</td>
                  <td>Subtotal</td>
                </th>
              </thead>
              <tbody>
                {
                  // Map all trs
                }
              </tbody>
            </table>
          </div>
          <div className="cart-right">
            <h2>Cart Totals</h2>
            {
              // map cart
            }
            <button className="checkout">Check Out</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;
