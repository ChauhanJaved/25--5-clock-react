import "./App.css";
import { Fragment, useState } from "react";

function App() {
  const [breakLength, setBreakLength] = useState(5);
  const [sessionLength, setSessionLength] = useState(25);
  return (
    <Fragment>
      <div id="main" className="container row justify-content-center">
        <h1 className="text-center">25 + 5 Clock</h1>
        <div id="" className="row mt-3">
          <div className="col">
            <h3 className="text-center">Break Length</h3>            
            <div className="row">
              <div className="col text-end"><i class="bi-arrow-up-circle-fill display-6"></i></div>
              <div className="col text-center display-6">{breakLength}</div>
              <div className="col text-start"><i class="bi-arrow-down-circle-fill display-6"></i></div>
            </div>
          </div>
          <div className="col">
            <h3 className="text-center">Session Length</h3>
            <div className="row">
              <div className="col text-end"><i class="bi-arrow-up-circle-fill display-6"></i></div>
              <div className="col text-center display-6">{sessionLength}</div>
              <div className="col text-start"><i class="bi-arrow-down-circle-fill display-6"></i></div>
            </div>
          </div>
        </div>
        <div id="session-timer" className="mt-3">
          <h3 className="fs-2 text-center">Session</h3>
          <div id="timer" className="text-center">25:00</div>
        </div>
        <div id="action-buttons" className="row mt-3">
          <div className="col text-end"><i class="bi-play-circle-fill display-6"></i></div>
          <div className="col text-center"><i class="bi-pause-circle-fill display-6"></i></div>
          <div className="col text-start"><i class="bi-reply-fill display-6"></i></div>
          
        </div>
      </div>
    </Fragment>
  );
}

export default App;
