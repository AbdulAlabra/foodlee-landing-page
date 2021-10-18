import { createTheme } from '@mui/material/styles';
const baseTheme = createTheme({
  palette: {
    alternate: {
      main: '#f7f9fc',
      dark: '#edf1f7',
    },
    cardShadow: 'rgba(23, 70, 161, .11)',
    mode: 'light',
    primary: {
      main: '#f57c00',
      light: '#ff9800',
      dark: '#e65100',
      contrastText: '#fff',
    },
    secondary: {
      main: '#00AB55',
      light: '#33CC70',
      dark: '#009357',
      contrastText: '#fff',
    },
    text: {
      primary: '#2d3748',
      secondary: '#646e73',
    },
    divider: 'rgba(0, 0, 0, 0.12)',
    background: {
      paper: '#fff',
      default: '#fff',
      //@ts-ignore
      level2: '#f5f5f5',
      level1: '#fff',
    },
  },
  typography: {
    //fontFamily: 'monospace',
  },
});
export const RTLTheme = createTheme({
  ...baseTheme,
  direction: 'rtl',
});
export default baseTheme;
