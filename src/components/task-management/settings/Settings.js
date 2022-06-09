import { useEffect, useState } from "react";
import {useTimer} from '../../../contexts/timer-context'

export function Settings(prop) {
  const {time, setTime} = useTimer()
  const [focus, setFocus] = useState(0);
  const [breaks, setbreaks] = useState(0);

  const assignTime = () => {
    setTime({focus: focus, break: breaks})
  }

  return (
    <div style={{ display: prop.value }}>
      <div>
        Focus:
        <input
          type="number"
          onChange={(e) => setFocus(Number(e.target.value))}
        />
        mins
      </div>

      <div>
        Break:
        <input
          type="number"
          onChange={(e) => setbreaks(Number(e.target.value))}
        />
        mins
      </div>

      <div>
        <button
          onClick={assignTime}
        >
          Start Focusing
        </button>
      </div>
    </div>
  );
}
