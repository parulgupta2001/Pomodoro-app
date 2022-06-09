import { useContext, createContext, useState, useEffect } from "react";

const timerContext = createContext();
const useTimer = () => useContext(timerContext);


function TimerProvider({ children }) {
  const [time, setTime] = useState({focus: null, break: null});
  return (
    <timerContext.Provider value={{ time, setTime }}>{children}</timerContext.Provider>
  );
}

export { TimerProvider, useTimer };
