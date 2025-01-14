import React, { useState, useRef } from "react";
import ResultModal from "./ResultModal";

// let timer; 

export default function TimerChallenge({ title, targetTime }) {
    const timer = useRef();

  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTImerExpired] = useState(false);  

  function handlStart() {
    timer.current = setTimeout(() => {
      setTImerExpired(true);
    }, targetTime * 1000);
    setTimerStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
    {timerExpired && <ResultModal targetTime={targetTime} result="lost"/>}
    <section className="challenge">
      <h2>{title}</h2>
      {timerExpired && <p>You Lost!</p>}
      <p className="challenge-time">
        {targetTime} seconds{targetTime > 1 ? "s" : ""}
      </p>
      <p>
        <button onClick={timerStarted ? handleStop : handlStart}>
          {timerStarted ? "Stop" : "Start"}Start Challenge
        </button>
      </p>
      <p className={timerStarted ? "active" : undefined}>
        {timerStarted ? "Time is running..." : "Timer inactive"}
      </p>
    </section>
    </>
  );
}
