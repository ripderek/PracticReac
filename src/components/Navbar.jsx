import { SiTask } from "react-icons/si";
import { MdSearch } from "react-icons/md";
import { TaskContext } from "../context/taksContent";
import { useContext } from "react";

function Navbar() {
  const { searchtasks } = useContext(TaskContext);
  return (
    <nav className="bg-white shadow-lg rounded-xl border-gray-200   ">
      <div className="grid grid-cols-2 gap-1 p-4 ">
        <div className="flex flex-wrap">
          <a
            href="https://www.instagram.com/raul_steven_616/"
            className="flex items-center"
          >
            <SiTask className="text-4xl text-blue-800 mr-2" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-blue-800   ">
              Tareas
            </span>
          </a>
        </div>
        <div className="flex shadow-md rounded-2xl p-3 bg-zinc-50">
          <input
            type="text"
            placeholder="buscar"
            className="bg-zinc-50 focus:outline-none mx-auto w-full"
            id="buscar"
          />
          <button className="bg-zinc-50  hover:bg-white rounded-md ">
            <MdSearch
              className="text-4xl text-slate-950 "
              onClick={() =>
                searchtasks(document.getElementById("buscar").value)
              }
            />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
