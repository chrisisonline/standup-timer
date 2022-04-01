import React from 'react'

import { Container, Typography, Box } from '@mui/material'
import totalTime from '../imgs/total-time.svg'
import ImgTitle from './ImgTitle'

function TotalTime({ totalTimeString }) {
  return (
    <Container sx={{ flexDirection: 'column', gap: 1 }}>
      <ImgTitle imgSrc={totalTime} tilted />
      <Typography variant='h3'>
        {totalTimeString}
      </Typography>
    </Container>
  )
}

export default TotalTime
