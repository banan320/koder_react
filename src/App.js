import "./App.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// import { nanoid } from "nanoid";
//
//
//
//
//
//
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
// // !============
// function App() {
//   const [notes, setNotes] = useState(initNotes);
//   const [prods, setProds] = useState(initProds);

//   const [value1, setValue1] = useState("");
//   const [value2, setValue2] = useState("");
//   const [value3, setValue3] = useState("");

//   // initProds ==========
//   const rows = prods.map((item) => (
//     <tr key={item.id}>
//       <td>{item.name}</td>
//       <td>{item.catg}</td>
//       <td>{item.cost}</td>
//       <td>
//         <button onClick={() => remItem(item.id)}>remove</button>
//       </td>
//     </tr>
//   ));

//   // initNotes =======

//   // const result = notes.map((item) => (
//   //   <p key={item.id}>
//   //     <span>{item.prop1}</span>
//   //     <span>{item.prop2}</span>
//   //     <span>{item.prop3}</span>
//   //     <button onClick={() => remItem(item.id)}>remove</button>
//   //   </p>
//   // ));

//   function remItem(id) {
//     setNotes(notes.filter((note) => note.id !== id));
//     setProds(prods.filter((prod) => prod.id !== id));
//   }

//   function addItem() {
//     // let obj = {
//     //   id: uuidv4(),
//     //   prop1: value1,
//     //   prop2: value2,
//     //   prop3: value3,
//     // };
//     let data = {
//       id: uuidv4(),
//       name: value1,
//       catg: value2,
//       cost: value3,
//     };
//     // setNotes([...notes, obj]);
//     setProds([...prods, data]);
//     setValue1("");
//     setValue2("");
//     setValue3("");
//   }

//   return (
//     <div className="App">
//       <table>
//         <thead>
//           <tr>
//             <td>Name</td>
//             <td>Category</td>
//             <td>Cost</td>
//             <td>Remove</td>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//       <br />
//       {/* {result} */}
//       <br />
//       <input
//         value={value1}
//         onChange={(event) => setValue1(event.target.value)}
//       />
//       <input
//         value={value2}
//         onChange={(event) => setValue2(event.target.value)}
//       />
//       <input
//         type="number"
//         value={value3}
//         onChange={(event) => setValue3(event.target.value)}
//       />

//       <button onClick={addItem}>save</button>
//     </div>
//   );
// }
// export default App;

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

function getInitObj() {
  return {
    id: uuidv4(),
    prop1: "",
    prop2: "",
    prop3: "",
  };
}

// !============
function App() {
  const [notes, setNotes] = useState(initNotes);
  // const [prods, setProds] = useState(initProds);
  const [obj, setObj] = useState(getInitObj());

  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");

  // initNotes =======
  const result = notes.map((item) => (
    <p key={item.id}>
      <span>{item.prop1}</span>
      <span>{item.prop2}</span>
      <span>{item.prop3}</span>
      <button onClick={() => remItem(item.id)}>remove</button>
    </p>
  ));

  function remItem(id) {
    setNotes(notes.filter((note) => note.id !== id));
  }

  // function addItem() {
  //   let obj = {
  //     id: uuidv4(),
  //     prop1: value1,
  //     prop2: value2,
  //     prop3: value3,
  //   };

  //   setNotes([...notes, obj]);
  //   setValue1("");
  //   setValue2("");
  //   setValue3("");
  // }

  function changeProp(prop, event) {
    setObj({ ...obj, [prop]: event.target.value });
  }

  function addItem() {
    setNotes([...notes, obj]);
    setObj(getInitObj());
  }

  return (
    <div className="App">
      {result}
      <br />
      <input
        value={obj.prop1}
        onChange={(event) => changeProp("prop1", event)}
      />
      <input
        value={obj.prop2}
        onChange={(event) => changeProp("prop2", event)}
      />
      <input
        type="number"
        value={obj.prop3}
        onChange={(event) => changeProp("prop3", event)}
      />

      <button onClick={addItem}>save</button>
    </div>
  );
}
export default App;
