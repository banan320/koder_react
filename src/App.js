import "./App.css";

function App() {
  const arr = ["a", "b", "c", "d", "e"];

  return (
    <div className="App">
      <ul>
        {arr.map((el, i) => (
          <li key={i}>{el}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
