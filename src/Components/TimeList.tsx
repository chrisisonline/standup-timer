import React from 'react'

import { Container, Typography } from '@mui/material'
import perPerson from '../imgs/per-person.svg'
import ImgTitle from './ImgTitle'

function TimeList({ timeList }) {
  return (
    <Container sx={{ flexDirection: 'column' }}>
      <ImgTitle imgSrc={perPerson} tilted />
      {timeList.map((item, index) =>
        <Typography key={index + '-' + item} variant='h4'>{item}</Typography>
      )}
    </Container>
  )
}

export default TimeList
