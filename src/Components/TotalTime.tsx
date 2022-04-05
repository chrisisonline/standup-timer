import React from 'react'

import { Container, Typography, Box } from '@mui/material'
import myTheme from '../theme'
import totalTime from '../imgs/total-time.svg'
import ImgTitle from './ImgTitle'

function TotalTime({ totalTimeString }) {
  return (
    <Container sx={{
      flexDirection: 'column',
      gap: 1,
      padding: '2rem',
      backgroundColor: myTheme.palette.secondary.main,
      borderWidth: '6px',
      borderStyle: 'dashed',
      borderColor: myTheme.palette.secondary.dark,
      borderRadius: '24px'
    }}>
      <ImgTitle imgSrc={totalTime} tilted />
      <Typography variant='h3'>
        {totalTimeString}
      </Typography>
    </Container>
  )
}

export default TotalTime
