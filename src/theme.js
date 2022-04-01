import { createTheme } from '@mui/material/styles'
// MUI default theme
const theme = createTheme()
// Theme customizations
const myTheme = createTheme({
  palette: {
    primary: {
      main: '#B7E879',
      dark: '#83C134'
    }
  },
  typography: {
    fontFamily: 'Red Hat Mono, monospace',
    color: 'white',
    h1: {
      fontFamily: 'Yesteryear, cursive',
      fontSize: '5rem',
      WebkitTextStroke: '2.5px #000',
      textShadow: '2.5px 2.5px 0px #000'
    },
    h2: {
      fontFamily: 'Yesteryear, cursive',
      fontSize: '3rem',
      WebkitTextStroke: '1.5px #000',
      textShadow: '1.5px 1.5px 0px #000'
    },
    h3: {
      fontSize: '2.5rem',
      fontWeight: 700,
      WebkitTextStroke: '2.5px #000',
      textShadow: '2.5px 2.5px 0px #000'
    },
    h4: {
      fontSize: '2rem',
      fontWeight: 700,
      WebkitTextStroke: '2px #000',
      textShadow: '2.5px 2.5px 0px #000'
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          border: '3px solid #000',
          boxShadow: '4px 4px 0px #000',
          fontWeight: 'bold',
          fontSize: '1rem',
          '&:hover': {
            boxShadow: '1px 1px 0px #000'
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
