import { useState } from "react";
import "./task-management.css";
import { Task } from "../task/Task";
import { Settings } from "../settings/Settings";
import "./task-management.css";

function TaskManagement() {
  const [display, setDisplay] = useState({ tasks: true, settings: "none" });

  return (
    <div className="management_container">
      <div className="functional_container">
        <button
          className="functional_btn "
          onClick={() => setDisplay({ tasks: true, settings: "none" })}
        >
          Tasks
        </button>
        <button
          className="functional_btn "
          onClick={() => setDisplay({ tasks: "none", settings: true })}
        >
          Settings
        </button>
      </div>
      <Task value={display.tasks} />
      <Settings value={display.settings} />
    </div>
  );
}

export { TaskManagement };
