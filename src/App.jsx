import { useState } from "react";
import "./App.css";
import Items from "./items";

function App() {
  const [work, setWork] = useState(["hello"]);
  const [todo, setTodo] = useState("");

  const addBtn = () => {
    if (todo === "") {
      alert("it cant be empty!");
    } else if (work.includes(todo)) {
      alert("it already added!");
    } else {
      setWork([...work, todo]);
      setTodo("");
    }
    
  };

  return (
    <>
      <div className="box">
        <h2>To-Do List</h2>

        <div>
          <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
          <button onClick={addBtn}>Add</button>
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
