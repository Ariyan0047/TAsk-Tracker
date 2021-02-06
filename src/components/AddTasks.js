import { useState } from "react";
import Button from "./Button";

const AddTasks = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [hired, setHired] = useState(false);

  const btnClassInfo = "btn btn-outline-info btn-lg text-uppercase w-100";

  const btnClick = () => {
    console.log("CLICKED");
  };

  const onSubmit = (event) => {
    event.preventDefault();

    if (!name) {
      alert("ADD TEXT");
      return;
    }

    onAdd({ name, profession, hired });

    setName("");
    setProfession("");
    setHired(false);
  };

  return (
    <form className="form-control" onSubmit={onSubmit}>
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
          checked={hired}
          value={hired}
          onChange={(e) => setHired(e.currentTarget.checked)}
        />
      </div>
      <div className="w-100 mt-2">
        <Button className={btnClassInfo} text="add" btnClick={btnClick} />
      </div>
    </form>
  );
};

export default AddTasks;
