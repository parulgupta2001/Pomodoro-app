import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";
import { useTimer } from "../../contexts/timer-context";

function Timer() {
  const { time } = useTimer();
  const [isFocus, setIsFocus] = useState(true);
  const [isBreak, setIsBreak] = useState(false);

  const renderTime = ({ remainingTime }) => {
    const addZero = (num) => (num < 10 ? "0" + num : num);
    const minutes = addZero(Math.floor(remainingTime / 60));
    const seconds = addZero(remainingTime % 60);
    document.title = `Pomodoro - ${minutes}:${seconds}`;

    return (
      <div>
        {isFocus && <div>Focus</div>}
        {isBreak && <div>Break</div>}
        <div>{`${minutes}:${seconds}`}</div>
      </div>
    );
  };

  return (
    <div>
      {isFocus && (
        <CountdownCircleTimer
          isPlaying
          duration={time.focus * 60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            setIsFocus(false);
            setIsBreak(true);
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}

      {isBreak && (
        <CountdownCircleTimer
          isPlaying
          duration={time.break * 60}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          onComplete={() => {
            setIsBreak(false);
            setIsFocus(true);
          }}
        >
          {renderTime}
        </CountdownCircleTimer>
      )}
    </div>
  );
}

export { Timer };
