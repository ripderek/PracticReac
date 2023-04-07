import { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/Task";

export const TaskContext = createContext();
export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  function createTasks(newtask) {
    setTasks([
      ...tasks,
      {
        id: tasks.length,
        title: newtask.title,
        description: newtask.description,
      },
    ]);
  }
  function deleteTasks(tasksid) {
    setTasks(tasks.filter((task) => task.id !== tasksid));
  }
  useEffect(() => {
    setTasks(data);
  }, []);

  function searchtasks(tasktitle) {
    if (tasktitle !== "") {
      setTasks(tasks.filter((task) => task.title == tasktitle));
    } else {
      setTasks(data);
    }
  }
  return (
    <TaskContext.Provider
      value={{ tasks, createTasks, deleteTasks, searchtasks }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
