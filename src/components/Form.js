import { useState } from "react";

export default function Form(props) {
  const [name, setName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedName = name.trim();

    if (trimmedName) {
      props.onSubmit(name);
    }

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
          required
          id="task-name"
          type="text"
          value={name}
          onChange={handleChange}
        />
      </p>
      <p>
        <button type="submit">Add task</button>
      </p>
    </form>
  );
}
