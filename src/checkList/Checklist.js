import { React, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const initNotes = [
  {
    id: uuidv4(),
    task: "product1",
    isEdit: false,
    isDone: false,
  },
  {
    id: uuidv4(),
    task: "product2",
    isEdit: false,
    isDone: false,
  },
  {
    id: uuidv4(),
    task: "product3",
    isEdit: false,
    isDone: false,
  },
];

function getInitObj() {
  return {
    id: uuidv4(),
    task: "",
    isEdit: false,
    isDone: false,
  };
}

const Checklist = () => {
  const [notes, setNotes] = useState(initNotes);
  const [obj, setObj] = useState(getInitObj());

  const result = notes.map((note) => (
    <tr key={note.id}>
      <td>
        {note.isEdit ? (
          <input
            value={note.task}
            onChange={(e) => changeItem(note.id, "task", e)}
            onBlur={() => editTask(note.id)}
            autoFocus
          />
        ) : (
          <span
            onDoubleClick={() => editTask(note.id)}
            className={note.isDone ? "done" : ""}
          >
            {note.task}
          </span>
        )}

        <button onClick={() => removeTask(note.id)}>х</button>
        <button onClick={() => doneTask(note.id)}>✔</button>
      </td>
    </tr>
  ));

  function editTask(id) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          note.isEdit = !note.isEdit;
        }
        return note;
      })
    );
  }

  function changeItem(id, field, e) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          note[field] = e.target.value;
        }
        return note;
      })
    );
  }

  function doneTask(id) {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          note.isDone = !note.isDone;
        }
        return note;
      })
    );
  }

  function removeTask(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  function changeProp(prop, e) {
    setObj({ ...obj, [prop]: e.target.value });
  }

  function addNote() {
    setNotes([...notes, obj]);
    setObj(getInitObj());
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Задачи</td>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
      <input value={obj.task} onChange={(e) => changeProp("task", e)} />
      <button onClick={addNote}>add task</button>
    </div>
  );
};

export default Checklist;
