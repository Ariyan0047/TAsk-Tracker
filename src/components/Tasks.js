import React from "react";
import { FaTimes } from "react-icons/fa";

const Tasks = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`items d-flex justify-content-between align-items-center p-2 ${
        task.hired ? "hired" : ""
      }`}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div>
        <p>NAME-{task.name}</p>
        <p>PROFESSION-{task.profession}</p>
      </div>
      <div>
        <FaTimes
          style={{ color: "red", cursor: "pointer" }}
          onClick={() => onDelete(task.id)}
        />
      </div>
    </div>
  );
};

export default Tasks;
