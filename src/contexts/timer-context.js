import { useContext, createContext, useState, useEffect } from "react";

const timerContext = createContext();
const useTimer = () => useContext(timerContext);
const timeFromLocalStorage = JSON.parse(localStorage.getItem("time"));

function TimerProvider({ children }) {
  const [time, setTime] = useState(timeFromLocalStorage);
  return (
    <timerContext.Provider value={{ time }}>{children}</timerContext.Provider>
  );
}

export { TimerProvider, useTimer };
