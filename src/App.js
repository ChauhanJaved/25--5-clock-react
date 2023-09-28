import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  const [isPlaying, setIsPlaying] = useState (false);
  const [timerType, setTimerType] = useState('session');
  const [intervalID, setIntervalID] = useState(null);
  const [currentMin, setCurrentMin] = useState(25);
  const [currentSec, setCurrentSec] = useState (0);
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
  const playClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
    }else {
      setIsPlaying(true);
      setIntervalID(setInterval(timerFunction, 1000))
    }
  };
  const timerFunction = () => {
    currentMin
  };
  const handleReset = ()  => {
    setBreakLength(5);
    setSessionLength(25);
    setTimerType('session');
    clearInterval(intervalID);
  };

  return (
    <Fragment>
      <h1 className='text-center bg-dark text-white p-3'>25 + 5 Clock</h1>
      <div id='main' className='container'>
        {/* PLAY PAUSE BOX */}
        <div id='action-tbn-box' className='d-flex justify-content-center align-items-center fs-6 mt-2'>
          <button id='start_stop' className='btn btn-dark text-center' onClick={playClick}>
            {!isPlaying ? (
            <i id='play' className='bi bi-play-circle-fill'></i>
            ): (
              <i id='play' className='bi bi-pause-circle-fill'></i>
            )}            
          </button>
          <button className='btn btn-dark text-center m-3'>
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
            <strong>{currentMin}:{currentSec.toString().padStart(2,'0')}</strong>
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
