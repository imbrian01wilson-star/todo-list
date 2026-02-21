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
  return (
    <>
      <div className="items">
        <p>{props.children.title}</p>
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
