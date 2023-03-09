import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Product from "./Product";

const initProds = [
  { id: uuidv4(), name: "product1", cost: 100, inCart: false },
  { id: uuidv4(), name: "product2", cost: 200, inCart: false },
  { id: uuidv4(), name: "product3", cost: 300, inCart: false },
];

const Products = () => {
  const [prods, setProds] = useState(initProds);

  function addToCart(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.inCart = true;
        }
        return prod;
      })
    );
  }

  const items = prods.map((prod) => {
    return (
      <Product
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        inCart={prod.inCart}
        addToCart={addToCart}
      />
    );
  });

  return <>{items}</>;
};

export default Products;
