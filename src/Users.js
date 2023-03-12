import React from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import User from "./User";

// const users = [
//   { name: "Alex", surName: "Ger", age: 27 },
//   { name: "Ksy", surName: "Ger", age: 26 },
//   { name: "John", surName: "Brow", age: 10 },
// ];

const initUsers = [
  {
    id: uuidv4(),
    name: "user1",
    surName: "surn1",
    age: 30,
    isBan: false,
    isEdits: false,
  },
  {
    id: uuidv4(),
    name: "user2",
    surName: "surn2",
    age: 31,
    isBan: false,
    isEdits: false,
  },
  {
    id: uuidv4(),
    name: "user3",
    surName: "surn3",
    age: 32,
    isBan: false,
    isEdits: false,
  },
];

const Users = () => {
  const [user, setUsers] = useState(initUsers);

  function addBan(id) {
    setUsers(
      user.map((elem) => {
        if (elem.id === id) {
          elem.isBan = !elem.isBan;
        }
        return elem;
      })
    );
  }

  function toggleEdit(id) {
    setUsers(
      user.map((elem) => {
        if (elem.id === id) {
          elem.isEdits = !elem.isEdits;
        }
        return elem;
      })
    );
  }

  function editChange(id, field, event) {
    setUsers(
      user.map((elem) => {
        if (elem.id === id) {
          elem[field] = event.target.value;
        }
        return elem;
      })
    );
  }

  const users = user.map((elem) => {
    return (
      <User
        key={elem.id}
        id={elem.id}
        name={elem.name}
        surName={elem.surName}
        age={elem.age}
        isBan={elem.isBan}
        isEdits={elem.isEdits}
        addBan={addBan}
        toggleEdit={toggleEdit}
        editChange={editChange}
      />
    );
  });

  return (
    <table>
      <tbody>{users}</tbody>
    </table>
  );
};

export default Users;
