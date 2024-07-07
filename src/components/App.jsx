import React, { useState } from "react";

function App() {
  const [item, setItem] = useState("");
  const [array, setArray] = useState([]);
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    setArray((prev) => {
      return [...prev, item];
    });
    setItem("");
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          value={item}
          onChange={handleChange}
          placeholder="enter item"
        />
        <button onClick={handleClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {array.map((x) => (
            <li>{x}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
