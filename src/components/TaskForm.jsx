import { useState, useContext } from "react";
import { TaskContext } from "../context/taksContent";
import { AiOutlineSave } from "react-icons/Ai";

function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const { createTasks } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTasks({ title, description });
    setTitle("");
    setdescription("");
  };
  return (
    <div className="max-w-md mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-10 mb-4 rounded-2xl shadow-2xl"
      >
        <h1 className="text-black text-2xl font-bold mb-2">Crear Tarea</h1>
        <input
          type="text"
          placeholder="escribe la tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          autoFocus
          className="bg-zinc-50 focus:outline-none  shadow-md  p-3 w-full mb-2"
        />
        <textarea
          placeholder="descripcion"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          className="bg-zinc-50 p-3 w-full mb-2 focus:outline-none  shadow-md
          "
        />
        <button className="bg-blue-700 px-10 py-1 text-white rounded-lg">
          <AiOutlineSave className="text-2xl" />
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
