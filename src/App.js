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
  const [value1, setValue1] = useState("0");

  function handleChange1(event) {
    setValue1(event.currentTarget.value);
  }

  function blur(num) {
    let str = num;
    let arr = str.split("");
    let sum = arr.reduce((a, b) => Number(a) + Number(b));
    return sum;
  }

  return (
    <div className="App">
      <input placeholder={value1} onChange={handleChange1} onBlur={blur} />

      <p>result: {blur(value1)}</p>
    </div>
  );
}

export default App;
