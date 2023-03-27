import { React, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const initNotes = [
  {
    id: uuidv4(),
    value: "Задача 1. Как дела",
  },
  {
    id: uuidv4(),
    value: "Задача 2. Написать поиск",
  },
  {
    id: uuidv4(),
    value: "Задача 3. Проверить поиск",
  },
];

function getInitObj() {
  return {
    id: uuidv4(),
    value: "",
  };
}

const filterNotes = (searchText, listOfNotes) => {
  if (!searchText) {
    return listOfNotes;
  }
  return listOfNotes.filter(({ value }) =>
    value.toLowerCase().includes(searchText.toLowerCase())
  );
};

const Notebook = () => {
  const [notes, setNotes] = useState(initNotes);
  const [obj, setObj] = useState(getInitObj());
  const [editId, setEditId] = useState(null);

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const Debounce = setTimeout(() => {
      const filteredNotes = filterNotes(searchTerm, initNotes);
      setNotes(filteredNotes);
    }, 500);
    return () => clearTimeout(Debounce);
  }, [searchTerm]);

  function getValue(prop) {
    if (editId) {
      return notes.reduce(
        (res, note) => (note.id === editId ? note[prop] : res),
        ""
      );
    } else {
      return obj[prop];
    }
  }

  function changeItem(prop, event) {
    if (editId) {
      setNotes(
        notes.map((note) =>
          note.id === editId ? { ...note, [prop]: event.target.value } : note
        )
      );
    } else {
      setObj({ ...obj, [prop]: event.target.value });
    }
  }

  function saveItem() {
    if (editId) {
      setEditId(null);
    } else {
      setNotes([...notes, obj]);
      setObj(getInitObj());
    }
  }

  function removeNote(id) {
    setNotes(notes.filter((el) => el.id !== id));
  }

  const result = notes.map((el) => (
    <li key={el.id} onClick={() => setEditId(el.id)}>
      {el.value}
      <button className="removeNote" onClick={() => removeNote(el.id)}>
        x
      </button>
    </li>
  ));

  return (
    <div className="notes">
      <div>
        <div>
          <input
            type="text"
            autoComplete="off"
            placeholder="Поиск заметки"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="notes__list">
          <ul>{result}</ul>
        </div>
      </div>
      <div>
        <textarea
          value={getValue("value")}
          onChange={(e) => changeItem("value", e)}
          cols="30"
          rows="5"
        ></textarea>
      </div>
      <div>
        <button onClick={saveItem}>save note</button>
      </div>
    </div>
  );
};

export default Notebook;
