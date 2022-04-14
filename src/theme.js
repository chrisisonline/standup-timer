import { createTheme } from '@mui/material/styles'

// MUI default theme
const theme = createTheme()

// Theme customizations
const boxShadows = {
  1: '1px 1px 0px #000',
  2: '3px 3px 0px #000',
  3: '4px 4px 0px #000'
}

const background = '#F8F4DE'
const text = 'hsl(0, 0%, 0%, 0.8)'
const blue = '#78D6B4'
const blueDarker = '#2DA177'
const yellow = '#EED865'
const orange = '#F1997A'
const brown = '#4E331F'
export const colors = {
  background,
  text,
  blue,
  blueDarker,
  yellow,
  orange,
  brown
}

const myTheme = createTheme({
  palette: {
    primary: {
      main: colors.blue,
      dark: colors.blueDarker
    },
    secondary: {
      main: '#8DE2DB'
    },
    info: {
      main: '#F2E391'
    }
  },
  shadows: {
    1: boxShadows[1],
    2: boxShadows[2],
    3: boxShadows[3]
  },
  typography: {
    fontFamily: 'Red Hat Mono, monospace',
    color: 'white',
    h1: {
      fontFamily: 'Vollkorn, serif',
      fontSize: '4rem',
      letterSpacing: '-0.04em',
      color: colors.brown
    },
    h2: {
      fontFamily: 'Vollkorn, serif',
      fontSize: '3.2rem',
      letterSpacing: '-0.04em',
      color: colors.text
    },
    h3: {
      fontFamily: 'Vollkorn, serif',
      fontSize: '2rem',
      letterSpacing: '-0.04em',
      color: colors.text
    },
    h4: {
      fontSize: '2.2rem',
      fontWeight: 700,
      color: colors.text
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          border: '3.5px solid #000',
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
