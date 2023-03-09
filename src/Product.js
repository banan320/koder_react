import React from "react";

const Product = ({ id, name, cost, inCart, addToCart }) => {
  return (
    <div>
      name: <span>{name}</span>, cost: <span>{cost}</span>
      <span>{inCart ? "in cart" : "not in cart"}</span>
      <button onClick={() => addToCart(id)}>to cart</button>
    </div>
  );
};

export default Product;
