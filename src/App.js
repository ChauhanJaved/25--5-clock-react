import "./App.css";
import { Fragment, useState, useEffect, useRef } from "react";
import beepSound from "./beep.wav";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [curSeconds, setCurSeconds] = useState(25 * 60);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timerType, setTimerType] = useState("Session");
  const [intervalID, setIntervalID] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    if (curSeconds === 0) {
      audioRef.current.play();
      if (timerType === "Session") {
        setTimerType("Break");
        setCurSeconds(breakLength * 60);
      } else {
        setTimerType("Session");
        setCurSeconds(sessionLength * 60);
      }
    }
  }, [curSeconds]);

  // Set break length
  const breakLengthClick = (keyType) => {
    if (keyType === "D") {
      if (!(breakLength <= 1)) {
        setBreakLength(breakLength - 1);
      }
    } else if (keyType === "U") {
      if (!(breakLength >= 60)) {
        setBreakLength(breakLength + 1);
      }
    }
  };

  // Set session length
  const sessionLengthClick = (keyType) => {
    if (keyType === "D") {
      if (!(sessionLength <= 1)) {
        setSessionLength(sessionLength - 1);
      }
    } else if (keyType === "U") {
      if (!(sessionLength >= 60)) {
        setSessionLength(sessionLength + 1);
      }
    }
  };

  // Play buttion click
  const playClick = () => {
    if (!isPlaying && !isPaused) {
      setIsPlaying(true);
      setCurSeconds(sessionLength * 60);
      setIntervalID(setInterval(timerFunction, 1000));
    } else if (isPlaying && !isPaused) {
      setIsPaused(true);
      clearInterval(intervalID);
    } else if (isPlaying && isPaused) {
      setIsPaused(false);
      setIntervalID(setInterval(timerFunction, 1000));
    }
  };

  //Timmer function
  const timerFunction = () => {
    setCurSeconds((prevCurSeconds) => prevCurSeconds - 1);
  };

  // Reset defaults
  const handleReset = () => {
    clearInterval(intervalID);
    setTimerType("Session");
    setBreakLength(5);
    setSessionLength(25);
    setCurSeconds(25 * 60);
    setIsPlaying(false);
    setIsPaused(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  // Stop timer
  const handleStop = () => {
    clearInterval(intervalID);
    setTimerType("Session");
    setCurSeconds(sessionLength * 60);
    setIsPlaying(false);
    setIsPaused(false);
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };

  // Format min and sec string based on curSeconds
  const formatTime = () => {
    const minutes = Math.floor(curSeconds / 60)
      .toString()
      .padStart(2, "0");
    const seconds = (curSeconds % 60).toString().padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <Fragment>
      {/* Beep audio  */}
      <audio ref={audioRef} id='beep' src={beepSound}></audio>

      <h1 className='text-center bg-dark text-white p-3'>25 + 5 Clock</h1>
      <div id='main' className='container'>
        {/* PLAY PAUSE BOX */}
        <div id='action-tbn-box' className='d-flex justify-content-center align-items-center fs-6 mt-2'>
          <button id='start_stop' className='btn btn-dark text-center' onClick={playClick}>
            {isPlaying && !isPaused ? (
              <i id='play' className='bi bi-pause-circle-fill'></i>
            ) : (
              <i id='play' className='bi bi-play-circle-fill'></i>
            )}
          </button>
          <button className='btn btn-dark text-center m-3' disabled={!isPlaying} onClick={handleStop}>
            <i className='bi-stop-circle-fill'></i>
          </button>
          <button id='reset' className='btn btn-dark text-center' onClick={handleReset}>
            <i className='bi bi-reply-fill'></i>
          </button>
        </div>

        {/* SESSION TIMER BOX */}
        <div id='session-timer-box' className='d-flex flex-column justify-content-center p-3 mt-2'>
          <h2 id='timer-label' className='text-center'>
            {timerType}
          </h2>
          <div id='time-left' className='text-center display-1'>
            <strong>{formatTime()}</strong>
          </div>
        </div>

        {/* LENGTH SETTING BOX */}
        <div id='length-btn-box' className='d-flex justify-content-center flex-wrap mt-3 fs-6'>
          <div className='m-3'>
            <p id='break-label' className='text-center'>
              Break Length
            </p>
            <div className='d-flex justify-content-center align-items-center'>
              <button
                id='break-decrement'
                className='btn btn-dark text-center'
                onClick={() => {
                  breakLengthClick("D");
                }}>
                <i className='bi-arrow-down-circle-fill'></i>
              </button>
              <div id='break-length' className='fs-3 p-3'>
                {breakLength}
              </div>
              <button
                id='break-increment'
                className='btn btn-dark text-center'
                onClick={() => {
                  breakLengthClick("U");
                }}>
                <i className='bi-arrow-up-circle-fill'></i>
              </button>
            </div>
          </div>
          <div className='m-3'>
            <p id='session-label' className='text-center'>
              Session Length
            </p>
            <div className='d-flex justify-content-center align-items-center'>
              <button
                id='session-decrement'
                className='btn btn-dark text-center'
                onClick={() => {
                  sessionLengthClick("D");
                }}>
                <i className='bi-arrow-down-circle-fill'></i>
              </button>
              <div id='session-length' className='fs-3 p-3'>
                {sessionLength}
              </div>
              <button
                id='session-increment'
                className='btn btn-dark text-center'
                onClick={() => {
                  sessionLengthClick("U");
                }}>
                <i className='bi-arrow-up-circle-fill'></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
