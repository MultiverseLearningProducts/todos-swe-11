import { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.onSubmit(name);
    setName("");
  }

  function handleChange(event) {
    setName(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="task-name">Task name</label>
        <br />
        <input
          id="task-name"
          type="text"
          value={name}
          onChange={handleChange}
          required
        />
      </p>
      <p>
        <button type="submit">Add task</button>
      </p>
    </form>
  );
}
