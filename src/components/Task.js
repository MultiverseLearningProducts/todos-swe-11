export default function Task(props) {
  return (
    <li className="Task">
      <label htmlFor={props.id}>
        <input type="checkbox" id={props.id} className="Task-checkbox" />
        <span className="Task-label">{props.children}</span>
      </label>
    </li>
  );
}
