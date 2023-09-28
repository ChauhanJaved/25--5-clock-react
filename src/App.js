import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  return (
    <Fragment>
      <h1 className='text-center bg-dark text-white p-3'>25 + 5 Clock</h1>
      <div id='main' className='container'>
        <div id='action-tbn-box' className='d-flex justify-content-center align-items-center fs-6 mt-2'>
          <button id='start_stop' className='btn btn-dark text-center'>
            <i className='bi bi-play-circle-fill'></i>
          </button>
          <button className='btn btn-dark text-center m-3'>
            <i className='bi-pause-circle-fill'></i>
          </button>
          <button id='reset' className='btn btn-dark text-center'>
            <i className='bi bi-reply-fill'></i>
          </button>
        </div>
        <div id='session-timer-box' className='d-flex flex-column justify-content-center p-3 mt-2'>
          <h2 id='timer-label' className='text-center'>
            Session
          </h2>
          <div id='time-left' className='text-center display-1'>
            <strong>25:00</strong>
          </div>
        </div>
        <div id='length-btn-box' className='d-flex justify-content-center flex-wrap mt-3 fs-6'>
          <div className="m-3">
            <p id='break-label' className='text-center'>
              Break Length
            </p>
            <div className='d-flex justify-content-center align-items-center'>
              <button id='break-decrement' className='btn btn-dark text-center'>
                <i className='bi-arrow-down-circle-fill'></i>
              </button>
              <div id='break-length' className='fs-3 p-3'>
                {breakLength}
              </div>
              <button id='break-increment' className='btn btn-dark text-center'>
                <i className='bi-arrow-up-circle-fill'></i>
              </button>
            </div>
          </div>
          <div className="m-3">
            <p id='session-label' className='text-center'>
              Session Length
            </p>
            <div className='d-flex justify-content-center align-items-center'>
              <button id='session-decrement' className='btn btn-dark text-center'>
                <i className='bi-arrow-down-circle-fill'></i>
              </button>
              <div id='session-length' className='fs-3 p-3'>
                {sessionLength}
              </div>
              <button id='session-increment' className='btn btn-dark text-center'>
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
