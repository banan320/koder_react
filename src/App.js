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
    fields: [
      { name: "prop1", value: "value11", isEdit: false },
      { name: "prop2", value: "value12", isEdit: false },
      { name: "prop3", value: "value13", isEdit: false },
    ],
  },
  {
    id: uuidv4(),
    fields: [
      { name: "prop1", value: "value21", isEdit: false },
      { name: "prop2", value: "value22", isEdit: false },
      { name: "prop3", value: "value23", isEdit: false },
    ],
  },
  {
    id: uuidv4(),
    fields: [
      { name: "prop1", value: "value31", isEdit: false },
      { name: "prop2", value: "value32", isEdit: false },
      { name: "prop3", value: "value33", isEdit: false },
    ],
  },
];

// !============
function App() {
  const [notes, setNotes] = useState(initNotes);

  const rows = notes.map((note) => {
    const cells = note.fields.map((field) => {
      let elem;
      if (!field.isEdit) {
        elem = (
          <span onClick={() => startEdit(note.id, field.name)}>
            {field.value}
          </span>
        );
      } else {
        elem = (
          <input
            value={field.value}
            onChange={(event) => changeCell(note.id, field.name, event)}
            onBlur={() => endEdit(note.id, field.name)}
          ></input>
        );
      }
      return <td key={field.name}>{elem}</td>;
    });
    return <tr key={note.id}>{cells}</tr>;
  });

  function startEdit(id, name) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          const fields = note.fields.map((field) => {
            if (field.name === name) {
              return { ...field, isEdit: true };
            } else {
              return field;
            }
          });
          return { id, fields };
        } else {
          return note;
        }
      })
    );
  }

  function endEdit(id, name) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          const fields = note.fields.map((field) => {
            if (field.name === name) {
              return { ...field, isEdit: false };
            } else {
              return field;
            }
          });

          return { id, fields };
        } else {
          return note;
        }
      })
    );
  }

  function changeCell(id, name, event) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          const fields = note.fields.map((field) => {
            if (field.name === name) {
              return { ...field, value: event.target.value };
            } else {
              return field;
            }
          });

          return { id, fields };
        } else {
          return note;
        }
      })
    );
  }

  return (
    <div className="App">
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
export default App;
