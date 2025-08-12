// theme.js

import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#007bff', // Set your primary color
    },
    secondary: {
      main: '#6c757d', // Set your secondary color
    },
    // You can define more custom colors here
    // For example:
    // customColor: '#ff0000',
  },
});

export default theme;
