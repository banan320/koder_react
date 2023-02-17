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
  const [value, setValue] = useState("1");

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <div className="App">
      <input onChange={handleChange} defaultValue={value} />
      урок 25
      <p>text: {value}</p>
    </div>
  );
}

export default App;
