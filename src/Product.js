import React from "react";
import ProductField from "./ProductField";

const Product = ({
  id,
  name,
  cost,
  inCart,
  addToCart,
  isEdit,
  toggleMode,
  editProd,
}) => {
  return (
    // <div>
    //   name:{" "}
    //   {isEdit ? (
    //     <input value={name} onChange={(event) => editProd(id, "name", event)} />
    //   ) : (
    //     <span>{name}</span>
    //   )}
    //   , cost:{" "}
    //   {isEdit ? (
    //     <input value={cost} onChange={(event) => editProd(id, "cost", event)} />
    //   ) : (
    //     <span>{cost}</span>
    //   )}
    //   <span>{inCart ? "in cart" : "not in cart"}</span>
    //   <button onClick={() => addToCart(id)}>to cart</button>
    //   <button onClick={() => toggleMode(id)}>{isEdit ? "save" : "edit"}</button>
    // </div>
    <div>
      name:{" "}
      <ProductField
        id={id}
        text={name}
        type={"name"}
        inCart={inCart}
        isEdit={isEdit}
        editProd={editProd}
      />
      cost:{" "}
      <ProductField
        id={id}
        text={cost}
        type={"cost"}
        inCart={inCart}
        isEdit={isEdit}
        editProd={editProd}
      />
      <span>{inCart ? "in cart" : "not in cart"}</span>
      <button onClick={() => addToCart(id)}>to cart</button>
      <button onClick={() => toggleMode(id)}>{isEdit ? "save" : "edit"}</button>
    </div>
  );
};

export default Product;
