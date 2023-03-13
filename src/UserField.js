import React from "react";

const UserField = ({ id, text, type, isEdits, editChange }) => {
  return (
    <>
      {isEdits ? (
        <input value={text} onChange={(e) => editChange(id, type, e)} />
      ) : (
        <span>{text}</span>
      )}
    </>
  );
};

export default UserField;
