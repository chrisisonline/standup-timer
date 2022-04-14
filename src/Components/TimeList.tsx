import React from 'react'

import { Box, Typography } from '@mui/material'
import SectionTitle from './SectionTitle'
import { colors } from '../theme'
import SectionContainer from './SectionContainer'

function TimeList({ timeList }) {
  return (
    <SectionContainer color={colors.yellow} sx={{ paddingBottom: '3rem' }}>
      <SectionTitle text="Per Person" tilted />
      {timeList.map((item, index) =>
        <Typography key={index + '-' + item} variant='h4'>{item}</Typography>
      )}
    </SectionContainer>
  )
}

export default TimeList
