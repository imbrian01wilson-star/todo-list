import { useState } from "react";
import "./App.css";
import Items from "./items";

function App() {
  const [work, setWork] = useState([{ id: 1, title: "hello" }]);
  const [todo, setTodo] = useState("");

  const addBtn = () => {
    if (todo.trim() === "") {
      alert("it cant be empty!");
    } else if (work.some((i) => i.title === todo.toLowerCase().trim())) {
      alert("it already added!");
      setTodo("");
    } else {
      setWork([...work, { id: Date.now(), title: todo.toLowerCase().trim() }]);
      setTodo("");
    }
  };

  return (
    <>
      <div className="box">
        <h2>To-Do List</h2>

        <div className="input-btn">
          <input
            className="input"
            placeholder="Add some task"
            type="text"
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button className="btn" onClick={addBtn}>
            Add
          </button>
        </div>

        {work.map((c) => (
          <Items
            key={Math.random()}
            work={work}
            setWork={setWork}
            todo={todo}
            setTodo={setTodo}
          >
            {c}
          </Items>
        ))}
      </div>
    </>
  );
}

export default App;
