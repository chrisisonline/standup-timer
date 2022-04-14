import React from 'react'
import Image from 'mui-image'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'

function SectionTitles({ text, tilted }: { imgSrc: string, tilted?: boolean }) {
  return (
    <Box sx={{
      transform: tilted ? 'translateX(-50px) rotate(353deg)' : 'none'
    }}>
      <Typography variant='h3'>{text}</Typography>
    </Box>
  )
}

export default SectionTitles
