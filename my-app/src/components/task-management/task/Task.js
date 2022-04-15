import { RiAddFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { CgTrash } from "react-icons/cg";
import { GrEdit } from "react-icons/gr";
import { v4 as uuid } from "uuid";
import "./task.css";

export function Task() {
  const [inputData, setInputData] = useState("");
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState("");

  const taskClickHandler = () => {
    setTasks([...tasks, { task: inputData, isEdit: false, id: uuid() }]);
    setInputData("");
  };

  const deleteClickHandler = (id) => {
    const updatedTask = tasks.filter((item) => {
      return item.id !== id;
    });
    setTasks(updatedTask);
  };

  const editClickHandler = (id) => {
    setTasks(
      tasks.map((item) => (item.id === id ? { ...item, isEdit: true } : item))
    );
  };

  const updateHandler = (id) => {
    setTasks(
      tasks.map((item) =>
        item.id === id ? { ...item, isEdit: false, task: editTask } : item
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <>
      <div className="task-container">
        <div className="add-task">
          <input
            type="text"
            placeholder="Add Tasks..."
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          ></input>
          <RiAddFill title="Add Task" onClick={taskClickHandler} />
        </div>

        <div className="showItem">
          {tasks.map(({ task, id, isEdit }) => {
            return (
              <div className="eachItem">
                <h3>{task}</h3>

                {isEdit && (
                  <div>
                    <input
                      type="text"
                      onChange={(e) => setEditTask(e.target.value)}
                    />
                    <button
                      type="submit"
                      title="Update Task"
                      onClick={() => updateHandler(id)}
                    >
                      Update
                    </button>
                  </div>
                )}
                {!isEdit && (
                  <div className="icon-container">
                    <CgTrash
                      title="Delete Task"
                      onClick={() => deleteClickHandler(id)}
                    />
                    <GrEdit
                      title="Edit Task"
                      onClick={() => editClickHandler(id)}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
