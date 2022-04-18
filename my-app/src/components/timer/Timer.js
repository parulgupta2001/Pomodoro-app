import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";

function Timer(prop) {
  const [isFocus, setIsFocus] = useState(true);
  const [isBreak, setIsBreak] = useState(false);

  const renderTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

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
          duration={prop.value.focus}
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
          duration={prop.value.break}
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
