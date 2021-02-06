import Button from "./Button";
import Tasks from "./Tasks";
import AddTasks from "./AddTasks";
import { useState } from "react";

const Contents = () => {
  const [tasks, setTasks] = useState([
    { id: 1, name: "frank", profession: "frontend developer", hired: true },
    { id: 2, name: "joe", profession: "ui/ux designer", hired: false },
    { id: 3, name: "calie", profession: "backend developer", hired: true },
    { id: 4, name: "phill", profession: "android developer", hired: false },
  ]);

  const noItem = "display-3 text-center text-muted";

  // DELETING ENTIRES
  const deleteItem = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // TODDLE REMINDER
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              hired: !task.hired,
            }
          : task
      )
    );
  };

  return (
    <div className="wrapper container text-uppercase text-left p-2">
      {tasks.length > 0 ? (
        tasks.map((task) => (
          <Tasks
            key={task.id}
            task={task}
            onDelete={deleteItem}
            onToggle={toggleReminder}
          />
        ))
      ) : (
        <h1 className={noItem}>No Item To Show</h1>
      )}
      <AddTasks />
    </div>
  );
};

export default Contents;
