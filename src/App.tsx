import React, { useEffect, useState } from 'react'
import { Container, Box, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import useTimer from 'easytimer-react-hook'

import Timer from './Components/Timer'
import TotalTime from './Components/TotalTime'
import TimeList from './Components/TimeList'
import Button from './Components/Button'
import myTheme from './theme.js'
import './App.css'

import Configuration from './Components/Configuration'

function App() {
  /* --- State & Hooks --- */
  const [state, setState] = useState({
    startTime: 30,
    isPaused: true,
    isStarted: false,
    timeList: [],
    isOvertime: false
  })
  // easy-time lib, totalTimer counts up, timer counts down per person
  const [totalTimer] = useTimer()
  const [timer] = useTimer()
  const [overTimer] = useTimer()

  // Check if overtime
  useEffect(() => {
    if (state.isStarted && timer.getTotalTimeValues().seconds === 0) {
      setState({
        ...state,
        isOvertime: true
      })
      overTimer.start()
    }
  }, [timer.getTotalTimeValues().seconds])

  /* --- Helper Functions --- */
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
  // Convert seconds to time formatted string
  const stringToTime = (s: string) => {
    let [minutes, seconds] = s.split(':')
    minutes = parseInt(minutes)
    seconds = parseInt(seconds)
    while (minutes > 0) {
      seconds += 60
      minutes -= 1
    }
    return seconds
  }
  // Creates the start time values
  const options = () => {
    const timeVals = []
    for (let i = 1; i < 61; i++) {
      timeVals.push({
        label: timeToString(i * 30)
      })
    }
    return timeVals
  }
  // Convert time to progress percentage
  const timeToProgress = (time) => {
    return Math.round(time / state.startTime * 100)
  }

  /* --- Component Methods --- */
  // handle button events
  const handleStartTime = (e) => {
    e.preventDefault()
    setState({
      ...state,
      startTime: stringToTime(e.target.innerHTML)
    })
  }
  const handleStart = () => {
    if (state.isOvertime) {
      overTimer.start()
    }
    timer.start({
      countdown: true,
      startValues: { seconds: state.startTime }
    })
    totalTimer.start()
    setState({
      ...state,
      isPaused: false,
      isStarted: true
    })
  }
  const handlePause = () => {
    timer.pause()
    overTimer.pause()
    totalTimer.pause()
    setState({
      ...state,
      isPaused: true
    })
  }
  const handleNext = () => {
    timer.pause()
    overTimer.pause()
    totalTimer.pause()

    const timeSpent = Math.round(
      state.isOvertime
        ? state.startTime + overTimer.getTotalTimeValues().seconds
        : state.startTime - timer.getTotalTimeValues().seconds
    )

    setState({
      ...state,
      isPaused: false,
      isOvertime: false,
      timeList: [...state.timeList, timeToString(timeSpent)]
    })

    overTimer.reset()
    overTimer.stop()
    timer.reset()
    totalTimer.start()
  }
  const handleReset = () => {
    timer.reset()
    timer.stop()
    overTimer.reset()
    overTimer.stop()
    totalTimer.reset()
    totalTimer.stop()
    setState({
      ...state,
      isPaused: true,
      isStarted: false,
      isOvertime: false,
      timeList: []
    })
  }

  /* --- Component Rendering --- */
  return (
    <ThemeProvider theme={myTheme}>
      <Box mt={6} mx='auto'>
        <Typography variant='h1'>Standup Timer</Typography>
      </Box>
      <Container sx={{
        alignItems: 'flex-start',
        color: 'var(--cream-color)',
        margin: '3rem auto',
        gap: 0,
        width: '900px'
      }}>
        {
          !state.isStarted
            // Landing page - configurations
            ? <Configuration
              handleStartTime={handleStartTime}
              options={options}>
              <Button text='Start' handleFunction={handleStart} iconType="play" />
            </Configuration>
            : <>
              {/* Timer GUI & It's Controls */}
              <Container sx={{
                flexDirection: 'column',
                width: '55%'
              }}>
                <Timer
                  isStarted={state.isStarted}
                  isPaused={state.isPaused}
                  timerProgress={timeToProgress(
                    timer.getTotalTimeValues().seconds
                  )}
                  timerString={
                    state.isOvertime
                      ? overTimer.getTimeValues().toString(['minutes', 'seconds'])
                      : timer.getTimeValues().toString(['minutes', 'seconds'])
                  }
                  isOverTime={state.isOvertime}
                  handleStart={handleStart}
                  handlePause={handlePause}
                  handleNext={handleNext}
                />
                <Button text='Reset' handleFunction={handleReset} iconType="reset" />
              </Container>
              {/* Time trackers */}
              <Container sx={{
                flexDirection: 'column',
                width: '45%'
              }}>
                <TotalTime totalTimeString={totalTimer.getTimeValues().toString(['minutes', 'seconds'])} />
                <TimeList timeList={state.timeList} />
              </Container>
            </>
        }
      </Container>
    </ThemeProvider>
  )
}

export default App
