import React from "react";

const User = ({ id, name, surName, age, isBan, addBan }) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{surName}</td>
        <td>{age}</td>
        <td>{isBan ? "ban" : "not a ban"}</td>
        <td>
          <button onClick={() => addBan(id)}>ban</button>
        </td>
      </tr>
    </>
  );
};

export default User;
