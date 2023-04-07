import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="bg-stone-50 h-full">
      <div className="container mx-auto p-5">
        <Navbar className="mt-3" />
      </div>
      <div className="container mx-auto px-10 py-5">
        <TaskForm />
        <TaskList />
      </div>
    </main>
  );
}

export default App;
