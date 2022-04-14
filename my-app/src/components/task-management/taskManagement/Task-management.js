import { useState } from "react";
import "./task-management.css";
import { Task } from "../task/Task";
import "./task-management.css";

function TaskManagement() {
  const [display, setDisplay] = useState({ tasks: true, settings: false });

  return (
    <div className="management-container">
      <div className="functional-container">
        <button
          className="functional-btn "
          onClick={() => setDisplay({ tasks: true, settings: false })}
        >
          Tasks
        </button>
        <button
          className="functional-btn "
          onClick={() => setDisplay({ tasks: false, settings: true })}
        >
          Settings
        </button>
      </div>
      <Task />
    </div>
  );
}

export { TaskManagement };
