import { useEffect, useState } from "react";
import { setStorage } from "./storage";
import Layout from "./components/Layout";
import Form from "./components/Form";
import Task from "./components/Task";

export default function App(props) {
  const [tasks, setTasks] = useState(props.tasks);

  function addTask(name) {
    const task = { name, done: false, id: crypto.randomUUID() };
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, done: !task.done } : task;
    });

    setTasks(updatedTasks);
  }

  useEffect(() => {
    setStorage(tasks);
  }, [tasks]);

  return (
    <Layout>
      <Form onSubmit={addTask} />
      {tasks.length ? (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <ul role="list">
          {tasks.map((task) => (
            <Task
              id={task.id}
              done={task.done}
              key={task.id}
              onChange={toggleTask}
              onClick={deleteTask}
            >
              {task.name}
            </Task>
          ))}
        </ul>
      ) : (
        <p className="italic">Add some tasks...</p>
      )}
    </Layout>
  );
}
