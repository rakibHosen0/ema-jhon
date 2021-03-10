import React, { useEffect, useState } from "react";
import fakeData from "../../fakeData";
import happyImage from "../../images/giphy.gif";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import Cart from "../Cart/Cart";
import ReviewItems from "../ReviewItems/ReviewItems";
import "./OrderReview.css";

const OrderReview = () => {
  const [cart, setCart] = useState([]);
  const [orderPlace, setOrderPlace] = useState(false);
  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  const handlePlaceOrder = () => {
    setCart([]);
    setOrderPlace(true);
    processOrder();
  };

  let thankYou;
  if (orderPlace) {
    thankYou = <img src={happyImage} alt=""></img>;
  }
  useEffect(() => {
    //cart data
    const savedCart = getDatabaseCart();
    const productKey = Object.keys(savedCart);
    const cartProducts = productKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedCart[key];
      return product;
    });
    setCart(cartProducts);
  }, []);
  return (
    <div className="review-container">
      <div className="review-items">
        {cart.map((pd) => (
          <ReviewItems
            key={pd.key}
            product={pd}
            removeProduct={removeProduct}
          ></ReviewItems>
        ))}
        {thankYou}
      </div>
      <div className="review-cart">
        <Cart cart={cart}>
          <button onClick={handlePlaceOrder} className="btn">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default OrderReview;
