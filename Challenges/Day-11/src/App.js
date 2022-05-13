import { useState } from 'react'
import './App.css';

function App() {

  const [time, setTime] = useState("")

  function formatTime(val) {
    if (val < 10) {
      return "0";
    } else {
      return "";
    }
  }

  useState(() => {
    const timeID = setInterval(
      () => tick(), 1000
    )

    return function cleanup() {
      clearImmediate(timeID);
    }
  })

  function tick() {
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    const s = d.getSeconds();

    setTime(formatTime(h) + h + ":" + formatTime(m) + m + ":" + formatTime(s) + s)
  }

  return (
    <div className="App-header">
      <div className="clock">
        <div className="screen">
          <h1 className="time">{time}</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
