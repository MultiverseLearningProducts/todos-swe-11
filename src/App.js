import { useEffect, useRef, useState } from "react";
import { setStorage } from "./storage";
import Layout from "./components/Layout";
import Form from "./components/Form";
import Task from "./components/Task";

export default function App(props) {
  const inputEl = useRef(null);

  const [tasks, setTasks] = useState(props.tasks);
  const [inputVal, setInputVal] = useState("");
  const [editId, setEditId] = useState(null);

  function addTask(name) {
    if (editId) return void editTask(name);
    const task = { name, done: false, id: crypto.randomUUID() };
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    if (id === editId) disableEditing();
    setTasks(updatedTasks);
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map((task) => {
      return task.id === id ? { ...task, done: !task.done } : task;
    });

    setTasks(updatedTasks);
  }

  function editTask(name) {
    const updatedTasks = tasks.map((task) => {
      return task.id === editId ? { ...task, name } : task;
    });

    setEditId(null);
    setTasks(updatedTasks);
  }

  function enableEditing(id, name) {
    setEditId(id);
    setInputVal(name);
    inputEl.current.focus();
  }

  function disableEditing() {
    setEditId(null);
    setInputVal("");
  }

  useEffect(() => {
    setStorage(tasks);
  }, [tasks]);

  return (
    <Layout>
      <Form
        editId={editId}
        inputEl={inputEl}
        onSubmit={addTask}
        inputVal={inputVal}
        setInputVal={setInputVal}
      />
      {tasks.length ? (
        // eslint-disable-next-line jsx-a11y/no-redundant-roles
        <ul role="list">
          {tasks.map((task) => (
            <Task
              id={task.id}
              key={task.id}
              name={task.name}
              done={task.done}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              enableEditing={enableEditing}
            />
          ))}
        </ul>
      ) : (
        <p className="italic" data-cy="prompt">
          Add some tasks...
        </p>
      )}
    </Layout>
  );
}
