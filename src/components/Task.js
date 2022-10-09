import { ReactComponent as Pencil } from "../pencil.svg";
import { ReactComponent as Trash } from "../trash.svg";

export default function Task(props) {
  function deleteTask() {
    const message = `Are you sure you want to delete "${props.name}"?`;
    const deletionConfirmed = window.confirm(message);
    if (!deletionConfirmed) return;
    props.deleteTask(props.id);
  }

  function toggleTask() {
    props.toggleTask(props.id);
  }

  function enableEditing() {
    props.enableEditing(props.id, props.name);
  }

  return (
    <li className="Task">
      <label htmlFor={props.id}>
        <input
          id={props.id}
          type="checkbox"
          checked={props.done}
          onChange={toggleTask}
          className="Task-checkbox"
        />
        <span className="Task-label">{props.name}</span>
      </label>
      <button
        type="button"
        className="Task-button"
        onClick={enableEditing}
        aria-label={`Edit "${props.name}"`}
      >
        <Pencil />
      </button>
      <button
        type="button"
        onClick={deleteTask}
        className="Task-button"
        aria-label={`Delete "${props.name}"`}
      >
        <Trash />
      </button>
    </li>
  );
}
