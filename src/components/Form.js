export default function Form() {
  return (
    <form>
      <p>
        <label htmlFor="task-name">Task name</label>
        <br />
        <input id="task-name" type="text" required />
      </p>
      <p>
        <button type="submit">Add task</button>
      </p>
    </form>
  );
}
