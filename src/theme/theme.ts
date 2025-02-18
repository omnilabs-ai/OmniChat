import { createTheme } from '@mui/material/styles';

export const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: '#FF9800', // Primary orange
      light: '#FFB74D', // Using the 'lighter' color here
      dark: '#F57C00', // Dark orange
    },
    background: {
      default: mode === 'light' ? '#FFFFFF' : '#212121',
      paper: mode === 'light' ? '#F9FAFB' : '#545454',
    },
    text: {
      primary: mode === 'light' ? '#000000' : '#FFFFFF',
      secondary: mode === 'light' ? '#424242' : '#BDBDBD',
    },
    divider: mode === 'light' ? '#E0E0E0' : '#FFFFFF',
  },
}); 