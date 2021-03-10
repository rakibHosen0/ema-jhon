import React from "react";

const Cart = (props) => {
  let cart = props.cart;
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    totalPrice = totalPrice + product.price * product.quantity;
  }
  let shipping = 0;
  if (totalPrice > 15) {
    shipping = 4.99;
  } else if (totalPrice > 0) {
    shipping = 12.99;
  }

  const tax = (totalPrice / 10).toFixed(2);
  const intTax = parseInt(tax);
  const grandTotal = totalPrice + shipping + intTax;
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items Ordered :{cart.length}</p>
      <p>Shiiping : {shipping}</p>
      <p>
        <small>Tax + Vat : {tax}</small>
      </p>
      <p>Total Price : {grandTotal}</p>
      <br />
      {props.children}
    </div>
  );
};

export default Cart;
