import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  return (
    <Fragment>
      <h1 className='text-center bg-dark text-white p-3'>25 + 5 Clock</h1>
      <div id='main' className='container'>
        <div id='length-btn-box' className='d-flex justify-content-center' >
          <div>
            <h4 id='break-label' className='text-center'>
              Break Length
            </h4>
            <div className='d-flex justify-content-center'>
              <button id='break-decrement' className='btn btn-dark m-3 text-center rounded-circle'>
                <i className='bi-arrow-down-circle-fill'></i>
              </button>
              <div id='break-length' className='m-3'>
                {breakLength}
              </div>
              <button id='break-increment' className='btn btn-dark m-3 text-center rounded-circle'>
                <i className='bi-arrow-up-circle-fill'></i>
              </button>
            </div>
          </div>
          <div>
            <h4 id='session-label' className='text-center'>
              Session Length
            </h4>
            <div className='d-flex justify-content-center'>
              <button id='session-decrement' className='btn btn-dark m-3 text-center rounded-circle fs-4'>
                <i className='bi-arrow-down-circle-fill'></i>
              </button>
              <div id='session-length' className='m-3'>
                {sessionLength}
              </div>
              <button id='session-increment' className='btn btn-dark m-3 text-center rounded-circle'>
                <i className='bi-arrow-up-circle-fill'></i>
              </button>
            </div>
          </div>
        </div>
        <div id='session-timer-box' className='d-flex flex-column justify-content-center mt-3'>
          <h2 id='timer-label' className='text-center'>
            Session
          </h2>
          <div id='time-left' className='text-center'>
            25:00
          </div>
        </div>
        <div id='action-tbn-box' className='d-flex justify-content-center align-items-center'>
          <button id='start_stop' className='btn btn-dark m-3 text-center rounded-circle fs-3'>
            <i className='bi bi-play-circle-fill'></i>
          </button>
          <button className='btn btn-dark m-3 text-center rounded-circle fs-3'>
            <i className='bi-pause-circle-fill'></i>
          </button>
          <button id='reset' className='btn btn-dark m-3 text-center rounded-circle fs-3'>
            <i className='bi bi-reply-fill'></i>
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
