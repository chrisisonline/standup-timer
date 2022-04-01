import React, { useState } from 'react'
import { Container, Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Image from 'mui-image'
import useTimer from 'easytimer-react-hook'

import Timer from './Components/Timer'
import TotalTime from './Components/TotalTime'
import TimeList from './Components/TimeList'
import myTheme from './theme.js'
import './App.css'

import standupTimer from './imgs/standup-timer.svg'

function App() {
  const [state, setState] = useState({
    startTime: 30,
    showStart: true,
    isStarted: false,
    timeList: []
  })
  // easy-time lib, totalTimer counts up, timer counts down per person
  const [totalTimer] = useTimer()
  const [timer] = useTimer({
    countdown: true,
    startValues: { seconds: state.startTime }
  })

  // Convert seconds to time formatted string
  const timeToString = (time) => {
    let seconds = time
    let minutes = 0

    while (seconds > 59) {
      seconds -= 60
      minutes += 1
    }
    if (minutes < 10) minutes = '0' + minutes
    if (seconds < 10) seconds = '0' + seconds

    return minutes + ':' + seconds
  }

  // Convert time to progress percentage
  const timeToProgress = (time) => {
    return Math.round(time / state.startTime * 100)
  }

  // handle button events
  const handleStart = () => {
    timer.start()
    totalTimer.start()
    setState({
      ...state,
      showStart: false,
      isStarted: true
    })
  }
  const handlePause = () => {
    timer.pause()
    totalTimer.pause()
    setState({
      ...state,
      showStart: true
    })
  }
  const handleNext = () => {
    timer.pause()
    totalTimer.pause()

    const timeSpent = Math.round(state.startTime - timer.getTotalTimeValues().seconds)

    setState({
      ...state,
      showStart: false,
      timeList: [...state.timeList, timeToString(timeSpent)]
    })

    timer.reset()
    totalTimer.start()
  }
  const handleReset = () => {
    timer.reset()
    timer.pause()
    totalTimer.reset()
    totalTimer.pause()
    setState({
      ...state,
      showStart: true,
      isStarted: false,
      timeList: []
    })
  }

  return (
    <ThemeProvider theme={myTheme}>
      <Box mt={6} mx='auto' sx={{ width: '28rem' }}>
        <Image src={standupTimer} style={{
          filter: 'drop-shadow(4px 4px 0 black)'
        }} />
      </Box>
      <Container sx={{
        alignItems: 'flex-start',
        color: 'var(--cream-color)',
        margin: '6rem auto 4rem',
        gap: 0
      }}>
        <Container sx={{
          flexDirection: 'column',
          flexBasis: '50%'
        }}>
          <Timer
            isStarted={state.isStarted}
            showStart={state.showStart}
            timerProgress={timeToProgress(timer.getTotalTimeValues().seconds)}
            timerString={timer.getTimeValues().toString(['minutes', 'seconds'])}
            handleStart={handleStart}
            handlePause={handlePause}
            handleNext={handleNext}
            handleReset={handleReset}
          />
        </Container>
        <Container sx={{
          flexDirection: 'column',
          flexBasis: '50%'
        }}>
          <TotalTime totalTimeString={totalTimer.getTimeValues().toString(['minutes', 'seconds'])} />
          <TimeList timeList={state.timeList} />
        </Container>
      </Container>
    </ThemeProvider >
  )
}

export default App
