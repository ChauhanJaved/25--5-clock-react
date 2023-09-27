import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  return (
    <Fragment>
      <h1 className="text-center bg-dark text-white p-3">25 + 5 Clock</h1>
      <div id="main" className="container">              
        <div id="length-btn-box" className="d-flex justify-content-evenly align-items-center">
          <div>
            <h4 id="break-label" className="text-center">Break<br/>Length</h4>            
            <div className="d-flex justify-content-center">
              <button id="break-decrement" className="btn p-1"><i class="bi-arrow-down-circle-fill display-6"></i></button>
              <div id="break-length" className="display-6 p-1">{breakLength}</div>
              <button id="break-increment" className="btn p-1"><i class="bi-arrow-up-circle-fill display-6"></i></button>              
            </div>
          </div>
          <div>
          <h4 id="session-label" className="text-center">Session<br/>Length</h4>            
            <div className="d-flex justify-content-center">
              <button id="session-decrement" className="btn p-1"><i class="bi-arrow-down-circle-fill display-6"></i></button>
              <div id="session-length" className="display-6 p-1">{sessionLength}</div>
              <button id="session-increment" className="btn p-1"><i class="bi-arrow-up-circle-fill display-6"></i></button>              
            </div>
          </div>
        </div>
        <div id="session-timer-box" className="d-flex flex-column justify-content-center mt-3">
          <h2 id="timer-label" className="text-center">Session</h2>
          <div id="time-left"  className="text-center">25:00</div>
        </div>
        <div id="action-tbn-box" className="d-flex justify-content-center">
              <button id="start_stop" className="btn p-3"><i class="bi-play-circle-fill display-6"></i></button>
              <button className="btn p-3"><i class="bi-pause-circle-fill display-6"></i></button>
              <button id="reset" className="btn p-3"><i class="bi-reply-fill display-6"></i></button>
          </div>        
      </div>
    </Fragment>
  );
}

export default App;
