import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  return (
    <Fragment>
      <h1 className="text-center bg-dark text-white p-3">25 + 5 Clock</h1>
      <div id="main" className="container">              
        <div id="length" className="d-flex justify-content-evenly align-items-center">
          <div>
            <h4 className="text-center">Break Length</h4>            
            <div className="d-flex justify-content-center">
              <div className="p-1"><i class="bi-arrow-up-circle-fill display-6"></i></div>
              <div className="display-6 p-1">{breakLength}</div>
              <div className="p-1"><i class="bi-arrow-down-circle-fill display-6"></i></div>
            </div>
          </div>
          <div>
          <h4 className="text-center">Session Length</h4>            
            <div className="d-flex justify-content-center">
              <div className="p-1"><i class="bi-arrow-up-circle-fill display-6"></i></div>
              <div className="display-6 p-1">{sessionLength}</div>
              <div className="p-1"><i class="bi-arrow-down-circle-fill display-6"></i></div>
            </div>
          </div>
        </div>
        <div id="session-timer" className="d-flex flex-column justify-content-center mt-3">
          <h2 className="text-center">Session</h2>
          <div id="timer" className="text-center">25:00</div>
        </div>
        <div id="action-buttons" className="d-flex justify-content-center">
              <div className="p-1"><i class="bi-play-circle-fill display-6"></i></div>
              <div className="p-1"><i class="bi-pause-circle-fill display-6"></i></div>
              <div className="p-1"><i class="bi-reply-fill display-6"></i></div>
          </div>        
      </div>
    </Fragment>
  );
}

export default App;
