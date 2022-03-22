import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import useTimer from 'easytimer-react-hook'

function App() {
  const [count, setCount] = useState(0)
  const [timer, isTargetAchieved] = useTimer({
    startValues: 100,
    countdown: true
  })
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Standup Timer</p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
      </header>
    </div>
  )
}

export default App
