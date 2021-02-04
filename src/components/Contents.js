import Button from "./Button";
import Tasks from "./Tasks";
import { useState } from "react";

const Contents = () => {
  const [tasks, setTasks] = useState([
    { name: "frank", profession: "frontend developer" },
    { name: "joe", profession: "ui/ux designer" },
    { name: "calie", profession: "backend developer" },
    { name: "phill", profession: "androoid developer" },
  ]);

  const btnClassInfo = "btn btn-outline-info btn-lg text-uppercase w-100";

  // HEADER BUTTON CLICK FUNCTION
  const btnClick = () => {
    alert("BUTTON IS CLICKED !!!!!");
  };

  return (
    <div className="wrapper container text-uppercase text-center">
      {tasks.map((task) => (
        <Tasks task={task} />
      ))}
      <div className="w-100 mt-2">
        <Button className={btnClassInfo} text="add" btnClick={btnClick} />
      </div>
    </div>
  );
};

export default Contents;
