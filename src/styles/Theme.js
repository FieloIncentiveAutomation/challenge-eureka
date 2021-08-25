import ThemeProvider from '@material-ui/styles/ThemeProvider';
import { createTheme, CssBaseline } from '@material-ui/core';
import error from '@material-ui/core/colors/red';

const theme = createTheme({
  typography: {
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontFamily: '"Noto Sans", sans-serif',
    fontSize: 16,
    color: '#2d2d2d',
    body1: {
      fontWeight: 400,
      fontSize: 13,
      lineHeight: '16px',
    },
    body2: {
      fontWeight: 400,
      fontSize: 13,
      lineHeight: '16px',
    },
    h1: {
      fontSize: 32,
      fontWeight: 300,
      lineHeight: '56px',
    },
    h2: {
      fontSize: 28,
      fontWeight: 300,
    },
    h3: {
      fontSize: 24,
      fontWeight: 300,
      lineHeight: '40px',
    },
  },
  breakpoints: {
    keys: ['xs', 'sm', 'md', 'lg', 'xl'],
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920,
    },
  },
  palette: {
    error: {
      light: error[300],
      main: '#EF4E22',
      dark: error[700],
      contrastText: '#ffffff',
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          background: '#d3d3d3 !important',
        },
      },
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);

export default Theme;
