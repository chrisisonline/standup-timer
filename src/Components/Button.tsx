import React from 'react'

import { Button as MuiButton } from '@mui/material'

import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import FastForwardIcon from '@mui/icons-material/FastForward'
import ReplayIcon from '@mui/icons-material/Replay'

const icons = {
  play: PlayArrowIcon,
  pause: PauseIcon,
  next: FastForwardIcon,
  reset: ReplayIcon
}

function Button({
  text,
  handleFunction,
  iconType
}) {
  const Icon = icons[iconType]
  return (
    <MuiButton variant="contained" onClick={handleFunction}>{text} <Icon /></MuiButton>
  )
}

export default Button
