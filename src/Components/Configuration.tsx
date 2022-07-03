import React from 'react'
import { Autocomplete, TextField, Typography } from '@mui/material'
import myTheme, { colors } from '../theme'
import SectionContainer from './SectionContainer'

function Configuration({ handleStartTime, options, children }) {
  return (
    <SectionContainer color={colors.yellow} sx={{ width: '50%', gap: '1.5rem' }}>
      <Typography variant='h3'>Time per Participant</Typography>
      <Autocomplete
        disablePortal
        onChange={handleStartTime}
        options={options()}
        isOptionEqualToValue={(option, value) =>
          option.label === value.label
        }
        sx={{ width: '16rem' }}
        renderInput={(params) =>
          <TextField
            variant='outlined'
            placeholder='00:00'
            sx={{
              '& .MuiOutlinedInput-root': {
                fontWeight: 'bold',
                backgroundColor: 'var(--cream-color)',
                borderRadius: '12px',
                '& fieldset': {
                  border: '4px solid black',
                  borderRadius: '12px',
                  boxShadow: myTheme.shadows[2]
                },
                '&.Mui-focused fieldset': {
                  border: '4px solid black',
                  boxShadow: myTheme.shadows[1]
                }
              }
            }}
            {...params}
          />
        }
      />
      {children}
    </SectionContainer>
  )
}

export default Configuration
