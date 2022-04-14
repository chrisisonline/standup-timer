import React from 'react'

import { Container } from '@mui/material'
import myTheme from '../theme'

function SectionContainer({ children, sx, color, pb }) {
  return (
    <Container sx={[
      {
        flexDirection: 'column',
        gap: 1,
        padding: '2rem',
        paddingBottom: pb || '2rem',
        backgroundColor: color,
        borderColor: 'black',
        borderWidth: '4px',
        borderStyle: 'solid',
        borderRadius: '24px',
        boxShadow: myTheme.shadows[3]
      },
      ...(Array.isArray(sx) ? sx : [sx])
    ]}>
      {children}
    </Container>
  )
}

export default SectionContainer
