import React, { useState, useEffect } from 'react';
import './App.css'

/* Loading spinner */
import GridLoader from "react-spinners/GridLoader";
import RingLoader from "react-spinners/RingLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
    <div className="App">
      {
        loading ?

          <div className='loading-pag'>
            <GridLoader
              color={"#00e5fe"}
              loading={loading}
              size={100}
            />
          </div>

          :
          <header className="App-header">
            <div className='App-logo'>
              <RingLoader
                color={"#00e5fe"}
                size={200}
              />
            </div>
            <h1>Spinners</h1>
          </header>
      }
    </div>
  );
}

export default App;
