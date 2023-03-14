import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Product from "./Product";

const initProds = [
  {
    id: uuidv4(),
    name: "product1",
    cost: "cost1",
    catg: "catg1",
    inCart: false,
    isEdit: false,
  },
  {
    id: uuidv4(),
    name: "product2",
    cost: "cost2",
    catg: "catg2",
    inCart: false,
    isEdit: false,
  },
  {
    id: uuidv4(),
    name: "product3",
    cost: "cost3",
    catg: "catg3",
    inCart: false,
    isEdit: false,
  },
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
      catg={prod.catg}
      inCart={prod.inCart}
      addToCart={addToCart}
      isEdit={prod.isEdit}
      toggleMode={toggleMode}
      editProd={editProd}
    />
  ));

  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Cost</td>
          <td>Category</td>
          <td>Cart</td>
          <td>Edit</td>
        </tr>
      </thead>
      <tbody>{result}</tbody>
    </table>
  );
};

export default Products;
