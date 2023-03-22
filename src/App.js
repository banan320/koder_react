import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Products from "./Products";
import Users from "./Users";
import Employee from "./Employee";
import Calculator from "./Calculator";
import Checklist from "./checkList/Checklist";
import Notebook from "./notebook/Notebook";

// import { nanoid } from "nanoid";
//
//
//
//
//
//! ===========================================
const initNotes = [
  {
    id: uuidv4(),

    prop1: "value11",
    prop2: "value12",
    prop3: "value13",
  },
  {
    id: uuidv4(),

    prop1: "value21",
    prop2: "value22",
    prop3: "value23",
  },
  {
    id: uuidv4(),

    prop1: "value31",
    prop2: "value32",
    prop3: "value33",
  },
];

// const prods = [
//   { id: uuidv4(), name: "product1", cost: 100 },
//   { id: uuidv4(), name: "product2", cost: 200 },
//   { id: uuidv4(), name: "product3", cost: 300 },
// ];

const users = [
  { name: "Alex", surName: "Ger", age: 27 },
  { name: "Ksy", surName: "Ger", age: 26 },
  { name: "John", surName: "Brow", age: 10 },
];

// !============
function App() {
  // const result = prods.map((prod) => {
  //   return <Products key={prod.id} name={prod.name} cost={prod.cost} />;
  // });

  // const user = users.map((user, index) => {
  //   return (
  //     <Users
  //       key={index}
  //       name={user.name}
  //       surName={user.surName}
  //       age={user.age}
  //     />
  //   );
  // });

  return (
    <div className="App">
      {/* <Checklist /> */}
      <Notebook />
      {/* <Products /> */}
      {/* <Employee
        lastName="Alex"
        firstName="Ger"
        middleName="Evgen"
        salary="50.000"
      />
      <Employee
        lastName="John"
        firstName="Ken"
        middleName="Evgen"
        salary="35.000"
      />
      <Employee
        lastName="Ksy"
        firstName="Ger"
        middleName="And"
        salary="50.000"
      /> */}
      {/* <Users />
      <Calculator /> */}
    </div>
  );
}
export default App;
