import { createTheme } from '@mui/material/styles'
// MUI default theme
const theme = createTheme()
// Theme customizations
const textShadows = {
  1: '1.5px 1.5px 0px #000',
  2: '4px 4px 0px #000'
}
const boxShadows = {
  1: '1px 1px 0px #000',
  2: '3px 3px 0px #000'
}
const myTheme = createTheme({
  palette: {
    primary: {
      main: '#B7E879',
      dark: '#83C134'
    },
    secondary: {
      main: '#8DE2DB',
      dark: '#3FAAA1'
    },
    info: {
      main: '#F2E391',
      dark: '#CDB84A'
    }
  },
  shadows: {
    1: boxShadows[1],
    2: boxShadows[2]
  },
  typography: {
    fontFamily: 'Red Hat Mono, monospace',
    color: 'white',
    h1: {
      fontFamily: 'Yesteryear, cursive',
      fontSize: '5rem',
      WebkitTextStroke: '2.5px #000',
      textShadow: textShadows[2]
    },
    h2: {
      fontFamily: 'Yesteryear, cursive',
      fontSize: '3.5rem',
      WebkitTextStroke: '1.5px #000',
      textShadow: textShadows[2]
    },
    h3: {
      fontSize: '2.7rem',
      fontWeight: 700,
      WebkitTextStroke: '2.5px #000',
      textShadow: textShadows[2]
    },
    h4: {
      fontSize: '2.2rem',
      fontWeight: 700,
      WebkitTextStroke: '2px #000',
      textShadow: textShadows[2]
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '3px solid #000',
          boxShadow: boxShadows[2],
          fontWeight: 'bold',
          fontSize: '1rem',
          '&:hover': {
            boxShadow: boxShadows[1]
          }
        }
      }
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme.spacing(3)
        }
      }
    }
  }
})

export default myTheme
