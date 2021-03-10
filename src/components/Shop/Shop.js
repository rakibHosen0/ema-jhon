import React, { useEffect } from "react";
import fakeData from "../../fakeData";
import { useState } from "react";
import "./Shop.css";
import Products from "../Products/Products";
import { Link } from "react-router-dom";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";

const Shop = () => {
  const first10 = fakeData.slice(0, 20);
  const [products, setProducts] = useState(first10);
  const [card, setCart] = useState([]);

  useEffect(() => {
    const saveCart = getDatabaseCart();
    const productKey = Object.keys(saveCart);
    const previousCard = productKey.map((existingKey) => {
      const product = fakeData.find((pd) => pd.key === existingKey);
      product.quantity = saveCart[existingKey];
      return product;
    });
    setCart(previousCard);
  }, []);

  const handleAddProduct = (product) => {
    const toBeAddedKey = product.key;
    const sameProduct = card.find((pd) => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if (sameProduct) {
      count = sameProduct.quantity + 1;
      sameProduct.quantity = count;
      const others = card.filter((pd) => pd.key !== toBeAddedKey);
      newCart = [...others, sameProduct];
    } else {
      product.quantity = 1;
      newCart = [...card, product];
    }
    setCart(newCart);

    addToDatabaseCart(product.key, count);
  };

  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Products
            key={product.key}
            showAddToCard={true}
            product={product}
            handleAddProduct={handleAddProduct}
          ></Products>
        ))}
      </div>
      <div className="product-card">
        <Cart cart={card}>
          <Link to={"/orderReview"}>
            <button className="btn"> Review Order</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
