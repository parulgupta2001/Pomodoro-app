import { useState } from "react";
import { Timer } from "../../timer/Timer";

export function Settings(prop) {
  const [timer, setTimer] = useState({});
  return (
    <div style={{ display: prop.value }}>
      <div>
        Focus:
        <input
          type="number"
          onChange={(e) =>
            setTimer({ ...timer, focus: Number(e.target.value) })
          }
        />
        mins
      </div>

      <div>
        Break:
        <input
          type="number"
          onChange={(e) =>
            setTimer({ ...timer, break: Number(e.target.value) })
          }
        />
        mins
      </div>

      <div>
        <button
          onClick={() => {
            <Timer value={timer} />;
          }}
        >
          Start Focusing
        </button>
      </div>
    </div>
  );
}
