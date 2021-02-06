import { useState } from "react";
import Button from "./Button";

const AddTasks = () => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [reminder, setreminder] = useState(false);

  const btnClassInfo = "btn btn-outline-info btn-lg text-uppercase w-100";

  const btnClick = () => {
    console.log("CLICKED");
  };

  return (
    <form className="form-control">
      <div className="mt-2">
        <label htmlFor="name" className="text-uppercase">
          name
        </label>
        <input
          type="text"
          id="name"
          className="form-control"
          placeholder="ADD NAME"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <label htmlFor="profession" className="text-uppercase">
          profession
        </label>
        <input
          type="text"
          id="profession"
          className="form-control"
          placeholder="ADD PROFESSION"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
      </div>
      <div className="d-flex justify-content-between align-items-center mt-2">
        <label htmlFor="reminder" className="text-uppercase">
          set reminder
        </label>
        <input
          type="checkbox"
          id="reminder"
          value={reminder}
          onChange={(e) => setreminder(e.currentTarget.checked)}
        />
      </div>
      <div className="w-100 mt-2">
        <Button className={btnClassInfo} text="add" btnClick={btnClick} />
      </div>
    </form>
  );
};

export default AddTasks;
