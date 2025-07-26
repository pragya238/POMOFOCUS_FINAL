import React, { useState, useEffect } from "react";
import "./Timer.css";
import Quote from "../components/Quote";

const modeTimes = {
  focus: 25 * 60,   
  short: 5 * 60,     
  long: 15 * 60     
}

const Timer = () => {
    const [mode, setMode] = useState("focus");
    const [timeLeft, setTimeLeft] = useState(modeTimes[mode]);
    const [isRunning, setIsRunning] = useState(false);

    const [completedPomodoros, setCompletedPomodoros] = useState(0);
    const [totalFocusTime, setTotalFocusTime] = useState(0); 

    if (mode === "work") {
        setCompletedPomodoros(prev => prev + 1);
        setTotalFocusTime(prev => prev + Math.floor(modeTimes.work / 60));
      }

  useEffect(() => {
    setTimeLeft(modeTimes[mode]);
    setIsRunning(false);
  }, [mode]);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            clearInterval(interval);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, "0");
    const s = (seconds % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const handleReset = () => {
    setTimeLeft(modeTimes[mode]);
    setIsRunning(false);
  };

  return (
   
    <div className="timer-container">
      <div className="mode-buttons">
        {["focus", "short", "long"].map((m) => (
          <button
            key={m}
            onClick={() => setMode(m)}
            className={mode === m ? "active-mode" : ""}
          >
            {m.charAt(0).toUpperCase() + m.slice(1)}
          </button>
        ))}
      </div>


    <div className="stats-container">
    <h3>Focus Stats</h3>
    <p>✅ Pomodoros Completed: {completedPomodoros}</p>
    <p>⏱️ Total Focus Time: {totalFocusTime} minutes</p>
    </div>

      <div className="time-display">{formatTime(timeLeft)}</div>
      <Quote />
      <div className="control-buttons">
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Pause" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Timer;
