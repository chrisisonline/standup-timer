import React from 'react'

import { Container, Typography } from '@mui/material'
import { colors } from '../theme'
import SectionTitle from './SectionTitle'
import SectionContainer from './SectionContainer'

function TotalTime({ totalTimeString }) {
  return (
    <SectionContainer color={colors.orange}>
      <SectionTitle text="Total Time" tilted />
      <Typography variant='h4'>
        {totalTimeString}
      </Typography>
    </SectionContainer>
  )
}

export default TotalTime
