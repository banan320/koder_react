import React, { useState } from "react";

const ProductField = ({ id, text, type, editProd }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <td>
      {isEdit ? (
        <input
          value={text}
          onChange={(e) => editProd(id, type, e)}
          onBlur={() => setIsEdit(false)}
          autoFocus
        />
      ) : (
        <span onClick={() => setIsEdit(true)}>{text}</span>
      )}
    </td>
  );
};

export default ProductField;
