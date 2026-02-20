import "./App.css";
import { Trash2, Pencil } from "lucide-react";

function Items(props) {
  const handleDelete = () => {
    props.setWork(props.work.filter((e) => e !== props.children));
  };

  const handleEdit=()=>{
    props.setWork(props.work.filter((e) => e !== props.children));
    props.setTodo(props.children)
    
    
  }
  return (
    <>
      <div className="items">
        <p>{props.children}</p>
        <div className="trash-edit">
          <button className="trash" onClick={handleDelete}>
            <Trash2 size={18} color="red"></Trash2>
          </button>
          <button className="edit" onClick={handleEdit}>
            <Pencil size={18} color="blue"></Pencil>
          </button>
        </div>
      </div>
    </>
  );
}

export default Items;
