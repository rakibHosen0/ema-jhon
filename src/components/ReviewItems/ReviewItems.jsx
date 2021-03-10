import React from "react";

const ReviewItems = (props) => {
  const { name, quantity, key } = props.product;
  const reviewItemStyle = {
    borderBottom: "1px solid black",
    marginBottom: "5px",
    paddingBorder: "5px",
    marginLeft: "200PX",
  };

  return (
    <div style={reviewItemStyle}>
      <h3>{name}</h3>
      <p>Quantity: {quantity}</p>
      <br />
      <button onClick={() => props.removeProduct(key)} className="btn">
        Remove
      </button>
    </div>
  );
};

export default ReviewItems;
