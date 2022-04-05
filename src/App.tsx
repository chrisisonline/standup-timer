import React, { useState } from 'react'
import { Container, Box, Autocomplete, TextField, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import Image from 'mui-image'
import useTimer from 'easytimer-react-hook'

import Timer from './Components/Timer'
import TotalTime from './Components/TotalTime'
import TimeList from './Components/TimeList'
import Button from './Components/Button'
import myTheme from './theme.js'
import './App.css'

import standupTimer from './imgs/standup-timer.svg'
import startTime from './imgs/start-time.svg'

function App() {
  /* --- State & Hooks --- */
  const [state, setState] = useState({
    startTime: 30,
    showStart: true,
    isStarted: false,
    timeList: []
  })
  // easy-time lib, totalTimer counts up, timer counts down per person
  const [totalTimer] = useTimer()
  const [timer] = useTimer()

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
  // handle button events
  const handleStart = () => {
    timer.start({
      countdown: true,
      startValues: { seconds: state.startTime }
    })
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
    timer.stop()
    totalTimer.reset()
    totalTimer.stop()
    setState({
      ...state,
      showStart: true,
      isStarted: false,
      timeList: []
    })
  }

  /* --- Component Rendering --- */
  return (
    <ThemeProvider theme={myTheme}>
      <Box mt={6} mx='auto' sx={{ width: '28rem' }}>
        <Image src={standupTimer} duration={0} style={{
          filter: 'drop-shadow(4px 4px 0 black)'
        }} />
      </Box>
      <Container sx={{
        alignItems: 'flex-start',
        color: 'var(--cream-color)',
        margin: '3rem auto',
        gap: 0
      }}>
        {
          !state.isStarted
            ? <Container
              sx={{
                backgroundColor: myTheme.palette.secondary.main,
                borderWidth: '6px',
                borderStyle: 'dashed',
                borderColor: myTheme.palette.secondary.dark,
                borderRadius: '24px',
                padding: '3rem',
                flexDirection: 'column',
                width: 'fit-content'
              }}
            >
              <Image src={startTime} duration={0} style={{
                filter: 'drop-shadow(4px 4px 0 black)',
                width: '24rem'
              }} />
              <Autocomplete
                disablePortal
                onChange={handleStartTime}
                options={options()}
                sx={{ width: '16rem' }}
                renderInput={(params) =>
                  <TextField
                    variant='outlined'
                    placeholder='00:00'
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        backgroundColor: 'var(--cream-color)',
                        fontWeight: 'bold',
                        '& fieldset': {
                          border: '4px solid black',
                          borderRadius: 0,
                          boxShadow: myTheme.shadows[2]
                        },
                        '&.Mui-focused fieldset': {
                          border: '4px solid black',
                          boxShadow: myTheme.shadows[1]
                        }
                      }
                    }}
                    {...params}
                  />
                }
              />
              <Button text='Start' handleFunction={handleStart} iconType="play" />
            </Container>
            : <>
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
                />
                <Button text='Reset' handleFunction={handleReset} iconType="reset" />
              </Container>
              <Container sx={{
                flexDirection: 'column',
                flexBasis: '50%'
              }}>
                <TotalTime totalTimeString={totalTimer.getTimeValues().toString(['minutes', 'seconds'])} />
                <TimeList timeList={state.timeList} />
              </Container>
            </>
        }
      </Container>
    </ThemeProvider >
  )
}

export default App
