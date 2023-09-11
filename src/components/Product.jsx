import React from "react";

const Product = ({ name, price, description }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: ${price}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Product;
