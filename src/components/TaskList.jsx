import React, { useRef } from "react";
import propTypes from "prop-types";

const TaskList = ({ task, taskDeleteFunction }) => {
  const taskRefs = useRef([]);

  taskRefs.current = task.map(
    (_, i) => taskRefs.current[i] ?? React.createRef()
  );

  const handleCheckboxClick = (index) => {
    const taskItem = taskRefs.current[index].current;
    const checkbox = taskItem.querySelector('input[type="checkbox"]');
    const text = taskItem.querySelector(".task-text");

    if (checkbox.checked) {
      text.style.textDecoration = "line-through";
      text.style.opacity = "0.5";
      checkbox.style.opacity = "0.5";
    } else {
      text.style.textDecoration = "none";
      text.style.opacity = "1";
    }
  };

  return (
    <div className="flex justify-center">
      <ul className="bg-slate-100 flex flex-col justify-center items-center mt-4 text-lg p-4 w-[75%] rounded-md space-y-4">
        {task.map((taskItem, index) => (
          <li
            key={index}
            ref={taskRefs.current[index]}
            className="w-full flex items-center justify-around text-center"
          >
            <div className="w-[90%] flex items-center">
              <button
                className="w-[5%] flex justify-centermr-4"
                onClick={() => handleCheckboxClick(index)}
              >
                <label className="custom-checkbox-container">
                  <input type="checkbox" className="hidden-checkbox hidden" />
                  <div className="custom-checkbox"></div>
                </label>
              </button>
              <span className="task-text">{taskItem}</span>
            </div>
            <button
              className="deleteButton text-center px-1 text-3xl"
              onClick={() => taskDeleteFunction(index)}
            >
              <i className="bx bx-x text-center"></i>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

TaskList.propTypes = {
  task: propTypes.array.isRequired,
  taskDeleteFunction: propTypes.func.isRequired,
};

export default TaskList;
