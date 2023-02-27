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
// const initNotes = [
//   {
//     id: uuidv4(),
//     prop1: "value11",
//     prop2: "value12",
//     prop3: "value13",
//   },
//   {
//     id: uuidv4(),
//     prop1: "value21",
//     prop2: "value22",
//     prop3: "value23",
//   },
//   {
//     id: uuidv4(),
//     prop1: "value31",
//     prop2: "value32",
//     prop3: "value33",
//   },
// ];
// const initProds = [
//   { id: uuidv4(), name: "prod1", catg: "catg1", cost: 100 },
//   { id: uuidv4(), name: "prod2", catg: "catg2", cost: 200 },
//   { id: uuidv4(), name: "prod3", catg: "catg3", cost: 300 },
// ];

// function getInitObj() {
//   return {
//     id: uuidv4(),
//     name: "",
//     catg: "",
//     cost: "",
//   };
// }

const initNotes = [
  {
    id: uuidv4(),
    name: "name1",
    desc: "long description 1",
    show: false,
  },
  {
    id: uuidv4(),
    name: "name2",
    desc: "long description 2",
    show: false,
  },
  {
    id: uuidv4(),
    name: "name3",
    desc: "long description 3",
    show: false,
  },
];

const initProds = [
  {
    id: uuidv4(),
    name: "prod1",
    cost: "cost1",
    desc: "long description 1",
    comm: "my super comment 1",
    show: false,
  },
  {
    id: uuidv4(),
    name: "prod2",
    cost: "cost2",
    desc: "long description 2",
    comm: "my super comment 2",
    show: false,
  },
  {
    id: uuidv4(),
    name: "prod3",
    cost: "cost3",
    desc: "long description 3",
    comm: "my super comment 3",
    show: false,
  },
];

// !============
function App() {
  // const [notes, setNotes] = useState(initProds);
  // const [notes, setNotes] = useState(initNotes);
  // const [obj, setObj] = useState(getInitObj());
  // const [editId, setEditId] = useState(null);

  // const result = notes.map((item) => (
  //   <tr key={item.id}>
  //     <td>{item.name}</td>
  //     <td>{item.catg}</td>
  //     <td>{item.cost}</td>
  //     <td>
  //       <button onClick={() => setEditId(item.id)}>edit</button>
  //     </td>
  //   </tr>
  // ));

  // const result = notes.map((note) => (
  //   <p key={note.id}>
  //     <span>{note.prop1}</span>,<span>{note.prop2}</span>,
  //     <span>{note.prop3}</span>
  //     <button onClick={() => setEditId(note.id)}>edit</button>
  //   </p>
  // ));
  // function getValue(prop) {
  //   return notes.reduce(
  //     (res, note) => (note.id === editId ? note[prop] : res),
  //     ""
  //   );
  // }
  // function getValue(prop) {
  //   if (editId) {
  //     return notes.reduce(
  //       (res, note) => (note.id === editId ? note[prop] : res),
  //       ""
  //     );
  //   } else {
  //     return obj[prop];
  //   }
  // }

  // function changeItem(prop, event) {
  //   if (editId) {
  //     setNotes(
  //       notes.map((note) =>
  //         note.id === editId ? { ...note, [prop]: event.target.value } : note
  //       )
  //     );
  //   } else {
  //     setObj({ ...obj, [prop]: event.target.value });
  //   }
  // }

  // function saveItem() {
  //   if (editId) {
  //     setEditId(null);
  //   } else {
  //     setNotes([...notes, obj]);
  //     setObj(getInitObj());
  //   }
  // }

  const [notes, setNotes] = useState(initProds);

  function showDesc(id) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          return { ...note, show: !note.show };
        } else {
          return note;
        }
      })
    );
  }

  const result = notes.map((note) => {
    let desc;
    if (note.show) {
      desc = <i>{note.desc}</i>;
    }

    let comm;
    if (note.show) {
      comm = <i>{note.comm}</i>;
    }

    return (
      <li key={note.id}>
        {note.name}
        <button onClick={() => showDesc(note.id)}>
          {note.show ? "hide" : "show"}
        </button>

        {desc}
        {comm}
      </li>
    );
  });

  return (
    <div className="App">
      <ul>{result}</ul>

      {/* <table>
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
      <button onClick={() => setEditId(null)}>save</button> */}
      {/* <br />
      {result}
      <input
        value={getValue("prop1")}
        onChange={(event) => changeItem("prop1", event)}
      />
      <input
        value={getValue("prop2")}
        onChange={(event) => changeItem("prop2", event)}
      />
      <input
        value={getValue("prop3")}
        onChange={(event) => changeItem("prop3", event)}
      />

      <button onClick={saveItem}>save</button> */}
    </div>
  );
}
export default App;
