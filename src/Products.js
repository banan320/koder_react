import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Product from "./Product";

const initProds = [
  { id: uuidv4(), name: "product1", cost: 100, inCart: false, isEdit: false },
  { id: uuidv4(), name: "product2", cost: 200, inCart: false, isEdit: false },
  { id: uuidv4(), name: "product3", cost: 300, inCart: false, isEdit: false },
];

const Products = () => {
  const [prods, setProds] = useState(initProds);

  function addToCart(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.inCart = !prod.inCart;
        }
        return prod;
      })
    );
  }

  function toggleMode(id) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod.isEdit = !prod.isEdit;
        }

        return prod;
      })
    );
  }

  function editProd(id, field, event) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod[field] = event.target.value;
        }

        return prod;
      })
    );
  }

  const result = prods.map((prod) => (
    <Product
      key={prod.id}
      id={prod.id}
      name={prod.name}
      cost={prod.cost}
      inCart={prod.inCart}
      addToCart={addToCart}
      isEdit={prod.isEdit}
      toggleMode={toggleMode}
      editProd={editProd}
    />
  ));

  return <>{result}</>;
};

export default Products;
