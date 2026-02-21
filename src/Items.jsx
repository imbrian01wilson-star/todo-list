import { useState } from "react";
import "./Items.css";
import { Trash2, Pencil } from "lucide-react";

function Items(props) {
  const handleDelete = () => {
    props.setWork(props.work.filter((e) => e.id !== props.children.id));
  };

  const handleEdit = () => {
    props.setWork(props.work.filter((e) => e.id !== props.children.id));
    props.setTodo(props.children.title);
  };

  const handleCheckBox = () => {
    props.setWork((prev) =>
      prev.map((e) => (e.id === props.children.id ? { ...e, done: !e.done } : e)),
    );
  };

  if (props.work.length) {
    return (
      <>
        
          <div className="items" >
            <div className="items-item">
              <input
                type="checkbox"
                checked={props.children.done}
                onChange={handleCheckBox}
              />
              <p className={props.children.done ? "checked" : ""}>{props.children.title}</p>
            </div>

            <div className="items-item">
              <button
                className="trash"
                onClick={handleDelete}
                disabled={props.children.done}
              >
                <Trash2 size={18} color="red"></Trash2>
              </button>
              <button
                className="edit"
                onClick={handleEdit}
                disabled={props.children.done}
              >
                <Pencil size={18} color="blue"></Pencil>
              </button>
            </div>
          </div>
        
      </>
    );
  } else {
    return <p>there is no task...!</p>;
  }
}

export default Items;
