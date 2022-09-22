import { Fragment, useState } from "react";
import Form from "./components/Form";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(name) {
    const task = { name, done: false, id: crypto.randomUUID() };
    setTasks([...tasks, task]);
  }

  return (
    <Fragment>
      <header>
        <h1>Todos</h1>
      </header>
      <main>
        <Form onSubmit={addTask} />
        {tasks.length ? (
          // eslint-disable-next-line jsx-a11y/no-redundant-roles
          <ul role="list">
            {tasks.map((todo) => (
              <Task id={todo.id} key={todo.id}>
                {todo.name}
              </Task>
            ))}
          </ul>
        ) : (
          <p className="italic">Add some tasks...</p>
        )}
      </main>
    </Fragment>
  );
}

export default App;
