import { TaskManagement } from "../../components/task-management/taskManagement/Task-management";
import { Timer } from "../../components/timer/Timer";
import {Link} from "react-router-dom";
import "./home.css";

function Home() {
  return (
    <div className="home_container">
      <Link to="/" className="header_link"><h2 className="header">Focus</h2></Link>
      <h3 className="welcome_msg user">Welcome,Parul</h3>
      <div className="timer"> <Timer /></div>
      <TaskManagement />
    </div>
  );
}

export { Home };
