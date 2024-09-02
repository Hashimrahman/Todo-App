import { useRef } from "react";
import propTypes from "prop-types";

const AddTask = ({ taskAddFunction }) => {
  const inputRef = useRef(null);
  const addAndFocus = (add) => {
    inputRef.current.focus();
    add();
  };

  return (
    <div className="mt-4  flex justify-center">
      <div className=" flex justify-around w-1/2">
        <input
          id="taskInput"
          type="text"
          placeholder="Enter task"
          className="border-b-2 border-gray-500 w-3/4 p-2 rounded-md"
          ref={inputRef}
        />
        <button
          className="px-4 rounded-md border-2 border-gray-700"
          onClick={() => addAndFocus(taskAddFunction)}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

AddTask.propTypes = {
  task: propTypes.array.isRequired,
  taskAddFunction: propTypes.func.isRequired,
};

export default AddTask;
