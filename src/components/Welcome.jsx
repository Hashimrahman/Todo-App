// import React from "react";
// import AddTask from "./TaskAdd";
import TaskManager from "./TaskManager";

const Welcome = () => {
  return (
    <>
      <h1 className="text-white text-center bg-slate-900 mb-4 py-4 m-4 rounded-md">Todo List</h1>
      <TaskManager />
    </>
  );
};

export default Welcome;
