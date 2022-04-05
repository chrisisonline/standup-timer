import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

import { Box, Button, Container } from '@mui/material'
import myTheme from '../theme.js'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import FastForwardIcon from '@mui/icons-material/FastForward'

function Timer({
  isStarted,
  showStart,
  timerProgress,
  timerString,
  handleStart,
  handlePause,
  handleNext
}) {
  return (
    <>
      <Box sx={{
        width: 240
      }}>
        <CircularProgressbar
          value={isStarted ? timerProgress : 100}
          maxValue={100}
          text={timerString}
          strokeWidth={10}
          counterClockwise
          background
          styles={{
            root: {
              overflow: 'visible'
            },
            background: {
              fill: 'var(--cream-color)',
              stroke: 'black',
              strokeWidth: '14px',
              r: '45'
            },
            text: {
              textShadow: myTheme.shadows[2],
              fill: myTheme.palette.primary.main,
              paintOrder: 'stroke',
              stroke: 'black',
              strokeWidth: '3px',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              transform: 'translateY(2px)'
            },
            path: {
              strokeLinecap: 'butt',
              stroke: myTheme.palette.primary.main
            },
            trail: {
              stroke: 'var(--cream-color)',
              filter: 'drop-shadow(4px 4px 0 black)'
            }
          }}
        />
      </Box>
      <Container sx={{ justifyContent: 'center', gap: 2 }}>
        {showStart
          ? <Button variant="contained" onClick={handleStart}>Resume <PlayArrowIcon /></Button>
          : <Button variant="contained" onClick={handlePause}>Pause <PauseIcon /></Button>}
        <Button variant="contained" onClick={handleNext}>Next <FastForwardIcon /></Button>
      </Container>
    </>
  )
}

export default Timer
