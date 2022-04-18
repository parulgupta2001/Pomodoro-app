import { TaskManagement } from "../../components/task-management/taskManagement/Task-management";
import { Timer } from "../../components/timer/Timer";
import "./home.css";

function Home() {
  return (
    <div className="home-container">
      <div className="website-name">Green Pomodoro</div>
      <Timer className="timer-container" />
      <TaskManagement />
    </div>
  );
}

export { Home };
