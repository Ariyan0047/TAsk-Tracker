import React from "react";

const Tasks = ({ task }) => {
  return (
    <div class="items">
      <p>NAME-{task.name}</p>
      <p>PROFESSION-{task.profession}</p>
    </div>
  );
};

export default Tasks;
