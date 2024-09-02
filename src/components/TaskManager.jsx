import { useState } from "react";

import TaskList from "./TaskList";
import AddTask from "./TaskAdd";

const TaskManager = () => {
  const [task, setTask] = useState([]);

  const handleUpdateTask = () => {
    let newTask = document.getElementById("taskInput").value;
    if (newTask.length == 0) {
      alert("Input Field Can't Be Empty");
    } else {
      setTask((t) => [...t, newTask]);
      document.getElementById("taskInput").value = "";
    }
  };

  const handleTaskDelete = (index) => {
    setTask((t) => t.filter((_, i) => i !== index));
  };

  return (
    <>
      <AddTask task={task} taskAddFunction={handleUpdateTask} />
      <TaskList task={task} taskDeleteFunction={handleTaskDelete} />
    </>
  );
};

export default TaskManager;
