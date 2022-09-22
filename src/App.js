import { Fragment } from "react";
import Form from "./components/Form";
import Task from "./components/Task";

function App() {
  const todos = [];

  return (
    <Fragment>
      <header>
        <h1>Todos</h1>
      </header>
      <main>
        <Form />
        {todos.length ? (
          // eslint-disable-next-line jsx-a11y/no-redundant-roles
          <ul role="list">
            {todos.map((todo) => (
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
