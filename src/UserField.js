import React, { useState } from "react";

const UserField = ({ id, text, type, editChange }) => {
  const [isEdits, setIsEdits] = useState(false);
  return (
    <>
      {isEdits ? (
        <input
          value={text}
          onChange={(e) => editChange(id, type, e)}
          autoFocus
          onBlur={() => setIsEdits(false)}
        />
      ) : (
        <span onClick={() => setIsEdits(true)}>{text}</span>
      )}
    </>
  );
};

export default UserField;
