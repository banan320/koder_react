import "./App.css";
import { useState } from "react";
// import uuid from "react-uuid";
//
//
//
//
//
//

// !============
function App() {
  const [notes, setNotes] = useState([5252, 1, 2, 3, 4, 5]);
  const [editNum, setEditNum] = useState(null);

  const result = notes.map((note, index) => {
    return (
      <p key={index}>
        {note}
        <button onClick={() => setEditNum(index)}>edit</button>
      </p>
    );
  });

  function changeItem(event) {
    setNotes([
      ...notes.slice(0, editNum),
      event.target.value,
      ...notes.slice(editNum + 1),
    ]);
  }
  return (
    <div className="App">
      {result}
      <input
        value={editNum !== null ? notes[editNum] : ""}
        onChange={changeItem}
        onBlur={() => setEditNum(null)}
      />
    </div>
  );
}
export default App;
