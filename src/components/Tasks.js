import React from "react";
import { FaTimes } from "react-icons/fa";

const Tasks = ({ task }) => {
  return (
    <div class="items d-flex justify-content-between align-items-center p-2">
      <div>
        <p>NAME-{task.name}</p>
        <p>PROFESSION-{task.profession}</p>
      </div>
      <div>
        <FaTimes style={{ color: "red", cursor: "pointer" }} />
      </div>
    </div>
  );
};

export default Tasks;
