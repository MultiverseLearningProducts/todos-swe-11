export default function Task(props) {
  function handleChange() {
    props.onChange(props.id);
  }

  function handleClick() {
    props.onClick(props.id);
  }

  return (
    <li className="Task">
      <label htmlFor={props.id}>
        <input
          type="checkbox"
          id={props.id}
          className="Task-checkbox"
          checked={props.done}
          onChange={handleChange}
        />
        <span className="Task-label">{props.children}</span>
      </label>
      <button
        type="button"
        aria-label={`Delete "${props.children}"`}
        onClick={handleClick}
      >
        &times;
      </button>
    </li>
  );
}
