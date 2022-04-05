import React from 'react'

import { Container, Typography } from '@mui/material'
import perPerson from '../imgs/per-person.svg'
import ImgTitle from './ImgTitle'
import myTheme from '../theme'

function TimeList({ timeList }) {
  return (
    <Container sx={{
      flexDirection: 'column',
      gap: 1,
      padding: '2rem 2rem 4rem',
      backgroundColor: myTheme.palette.info.main,
      borderWidth: '6px',
      borderStyle: 'dashed',
      borderColor: myTheme.palette.info.dark,
      borderRadius: '24px'
    }}>
      <ImgTitle imgSrc={perPerson} tilted />
      {timeList.map((item, index) =>
        <Typography key={index + '-' + item} variant='h4'>{item}</Typography>
      )}
    </Container>
  )
}

export default TimeList
