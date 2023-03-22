import { React, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Checklist = () => {
  // const [notes, setNotes] = useState(initNotes);
  const [notes, setNotes] = useState("");
  // const [obj, setObj] = useState(getInitObj());

  // получение данных из localStorage
  const [localItem, setLocalItem] = useState(
    JSON.parse(localStorage.getItem("elems")) || []
  );

  //после обновления элементов в notes, запускается запись данных в localStorage
  useEffect(() => {
    localStorage.setItem("elems", JSON.stringify(localItem));
  }, [localItem]);

  const newItem = () => {
    if (notes.trim() !== "") {
      const newElem = {
        id: uuidv4(),
        task: notes,
        isEdit: false,
        isDone: false,
      };
      setLocalItem((localItem) => [...localItem, newElem]);
      setNotes("");
    }
  };

  function editTask(id) {
    setLocalItem(
      localItem.map((note) => {
        if (note.id === id) {
          note.isEdit = !note.isEdit;
        }
        return note;
      })
    );
  }

  function changeItem(id, field, e) {
    setLocalItem(
      localItem.map((note) => {
        if (note.id === id) {
          note[field] = e.target.value;
        }
        return note;
      })
    );
  }

  function doneTask(id) {
    setLocalItem(
      localItem.map((note) => {
        if (note.id === id) {
          note.isDone = !note.isDone;
        }
        return note;
      })
    );
  }

  function removeTask(id) {
    setLocalItem(localItem.filter((note) => note.id !== id));
  }

  function keyPress(el) {
    const code = el.keyCode || el.which;
    if (code === 13) newItem();
  }

  const result = localItem.map((note) => (
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
        <button onClick={() => doneTask(note.id)}>
          {note.isEdit ? "ok" : "✔"}
        </button>
      </td>
    </tr>
  ));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>
              {localItem == [] || localItem == ""
                ? "Добавьте задачу"
                : "Задачи"}
            </td>
          </tr>
        </thead>
        <tbody>{result}</tbody>
      </table>
      <input
        placeholder="Добавить задачу..."
        value={notes}
        onKeyDown={(el) => keyPress(el)}
        onChange={(e) => setNotes(e.target.value)}
      />
      <button onClick={newItem}>add task</button>
    </div>
  );
};

export default Checklist;
