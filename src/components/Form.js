export default function Form(props) {
  function handleChange(event) {
    props.setInputVal(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const trimmedVal = props.inputVal.trim();

    if (trimmedVal) {
      props.onSubmit(trimmedVal);
    }

    props.setInputVal("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="task-name">Task name</label>
        <br />
        <input
          required
          type="text"
          id="task-name"
          ref={props.inputEl}
          value={props.inputVal}
          onChange={handleChange}
        />
      </p>
      <p>
        <button type="submit">{props.editId ? "Save" : "Add"} task</button>
      </p>
    </form>
  );
}
