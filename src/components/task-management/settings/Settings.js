import {  useState } from "react";
import {useTimer} from '../../../contexts/timer-context'
import "./settings.css"

export function Settings(prop) {
  const {time, setTime} = useTimer()
  const [focus, setFocus] = useState(0);
  const [breaks, setbreaks] = useState(0);

  const assignTime = () => {
    setTime({focus: focus, break: breaks})
  }

  return (
    <div style={{ display: prop.value }} className="setting_container">
      <div className="focus_container">
        Focus:
        <input
          type="number"
          onChange={(e) => setFocus(Number(e.target.value))}
        />
        mins
      </div>

      <div className="break_container">
        Break:
        <input
          type="number"
          onChange={(e) => setbreaks(Number(e.target.value))}
        />
        mins
      </div>

      <div>
        <button className="focus_btn"
          onClick={assignTime}
        >
          Start Focusing
        </button>
      </div>
    </div>
  );
}
