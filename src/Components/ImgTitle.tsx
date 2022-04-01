import React from 'react'
import Image from 'mui-image'
import { Box } from '@mui/system'

function ImgTitle({ imgSrc, tilted }: { imgSrc: string, tilted?: boolean }) {
  return (
    <Box sx={{
      width: '8rem',
      transform: tilted ? 'translateX(-50px) rotate(350deg)' : 'none'
    }}>
      <Image src={imgSrc} style={{
        filter: 'drop-shadow(2px 2px 0 black)'
      }} />
    </Box>
  )
}

export default ImgTitle
