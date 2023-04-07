import { useContext } from "react";
import { TaskContext } from "../context/taksContent";
import { MdDeleteOutline, MdOutlineTask } from "react-icons/md";

function TaskCard({ task }) {
  const { deleteTasks } = useContext(TaskContext);

  function mostrarAlter() {
    alert(task.id);
  }
  return (
    <div className="bg-zinc-50 text-black p-4 rounded-2xl shadow-2xl">
      <MdOutlineTask className=" mx-auto text-6xl text-gray-400 mb-3  " />
      <h1 className="text-xl font-bold  text-center">{task.title}</h1>
      <p className="text-gray-800 text-sm">{task.description}</p>
      <button
        className="bg-zinc-50 px-2 py-1 hover:bg-blue-700 rounded-md mt-4
        border-blue-700 border-2 border-solid"
        onClick={() => deleteTasks(task.id)}
      >
        <MdDeleteOutline className="text-2xl text-slate-950 " />
      </button>
    </div>
  );
}

export default TaskCard;
