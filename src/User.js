import React from "react";
import UserField from "./UserField";

const User = ({
  id,
  name,
  surName,
  age,
  isBan,
  addBan,
  isEdits,
  toggleEdit,
  editChange,
}) => {
  return (
    <>
      <tr>
        <td>{id}</td>
        <td>
          {/* {isEdits ? (
            <input value={name} onChange={(e) => editChange(id, "name", e)} />
          ) : (
            <span>{name}</span>
          )} */}
          <UserField
            id={id}
            text={name}
            type={"name"}
            isEdits={isEdits}
            isBan={isBan}
            editChange={editChange}
          />
        </td>
        <td>
          {/* {isEdits ? (
            <input
              value={surName}
              onChange={(e) => editChange(id, "surName", e)}
            />
          ) : (
            <span>{surName}</span>
          )} */}
          <UserField
            id={id}
            text={surName}
            type={"surName"}
            isEdits={isEdits}
            isBan={isBan}
            editChange={editChange}
          />
        </td>
        <td>
          {/* {isEdits ? (
            <input value={age} onChange={(e) => editChange(id, "age", e)} />
          ) : (
            <span>{age}</span>
          )} */}
          <UserField
            id={id}
            text={age}
            type={"age"}
            isEdits={isEdits}
            isBan={isBan}
            editChange={editChange}
          />
        </td>
        <td>{isBan ? "ban" : "not a ban"}</td>
        <td>
          <button onClick={() => addBan(id)}>ban</button>
        </td>
        <td>
          <button onClick={() => toggleEdit(id)}>
            {isEdits ? "save" : "edit"}
          </button>
        </td>
      </tr>
    </>
  );
};

export default User;
