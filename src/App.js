import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
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
const initProds = [
  { id: uuidv4(), name: "prod1", catg: "catg1", cost: 100 },
  { id: uuidv4(), name: "prod2", catg: "catg2", cost: 200 },
  { id: uuidv4(), name: "prod3", catg: "catg3", cost: 300 },
];

// function getInitObj() {
//   return {
//     id: uuidv4(),
//     name: "",
//     catg: "",
//     cost: "",
//   };
// }

// !============
function App() {
  const [notes, setNotes] = useState(initProds);
  const [editId, setEditId] = useState(null);

  const result = notes.map((item) => (
    <tr key={item.id}>
      <td>{item.name}</td>
      <td>{item.catg}</td>
      <td>{item.cost}</td>
      <td>
        <button onClick={() => setEditId(item.id)}>edit</button>
      </td>
    </tr>
  ));

  // const result = notes.map((item) => (
  //   <p key={item.id}>
  //     <span>{item.prop1}</span>
  //     <span>{item.prop2}</span>
  //     <span>{item.prop3}</span>
  //     <button onClick={() => setEditId(item.id)}>edit</button>
  //   </p>
  // ));

  function getValue(prop) {
    return notes.reduce(
      (res, note) => (note.id === editId ? note[prop] : res),
      ""
    );
  }

  function changeItem(prop, event) {
    setNotes(
      notes.map((note) =>
        note.id === editId ? { ...note, [prop]: event.target.value } : note
      )
    );
  }

  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <td>Name</td>
            <td>Category</td>
            <td>Cost</td>
            <td>Edit</td>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
      <input
        value={getValue("name")}
        onChange={(event) => changeItem("name", event)}
      />
      <input
        value={getValue("catg")}
        onChange={(event) => changeItem("catg", event)}
      />
      <input
        value={getValue("cost")}
        onChange={(event) => changeItem("cost", event)}
      />
      <button onClick={() => setEditId(null)}>save</button>
    </div>

    // <div className="App">
    //   {result}
    //   <input
    //     value={getValue("prop1")}
    //     onChange={(event) => changeItem("prop1", event)}
    //   />
    //   <input
    //     value={getValue("prop2")}
    //     onChange={(event) => changeItem("prop2", event)}
    //   />
    //   <input
    //     value={getValue("prop3")}
    //     onChange={(event) => changeItem("prop3", event)}
    //   />
    //   <button onClick={() => setEditId(null)}>save</button>
    // </div>
  );
}
export default App;
