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
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);
  const [value, setValue] = useState("");

  const result = arr.map((el, i) => (
    <p key={i}>
      {el}
      <button onClick={() => remove(i)}>delete</button>
      <button onClick={() => edit(i)}>edit</button>
    </p>
  ));

  function add() {
    setArr([...arr, value]);
  }

  function edit(i) {
    setArr([...arr.slice(0, i), "hello", ...arr.slice(i + 1)]);
  }

  function remove(i) {
    setArr([...arr.slice(0, i), ...arr.slice(i + 1)]);
  }
  function inputChange(e) {
    setValue(e.target.value);
  }

  function reverse() {
    setArr([...arr.slice().reverse()]);
  }

  return (
    <div className="App">
      {result}
      <input type="text" value={value} onChange={inputChange} />
      <button onClick={add}>add element</button>
      <button onClick={reverse}>reverse</button>
    </div>
  );
}
export default App;
