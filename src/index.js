import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { getStorage } from "./storage";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const tasks = getStorage();

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <StrictMode>
    <App tasks={tasks} />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
