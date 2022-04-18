import { useEffect, useState } from "react";

export function Settings(prop) {
  const [timer, setTimer] = useState({ focus: 0, break: 0 });
  const [focus, setFocus] = useState(0);
  const [breaks, setbreaks] = useState(0);

  useEffect(() => {
    localStorage.setItem("time", JSON.stringify(timer));
  }, [timer]);

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
          onClick={() => {
            setTimer({ focus: focus, break: breaks });
          }}
        >
          Start Focusing
        </button>
      </div>
    </div>
  );
}
