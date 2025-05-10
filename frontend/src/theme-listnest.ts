import { createTheme } from '@mui/material/styles';

const listNestTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1C394B', // Dark Blue
      contrastText: '#FBF3DB', // Cream
    },
    secondary: {
      main: '#F17856', // Coral
      contrastText: '#FBF3DB',
    },
    background: {
      default: '#FBF3DB', // Cream
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1C394B', // Dark Blue
      secondary: '#927A7D', // Mauve
    },
    info: {
      main: '#99A49A', // Sage
    },
    divider: '#927A7D', // Mauve
  },
  typography: {
    fontFamily: [
      'Nunito',
      'Quicksand',
      'Arial',
      'sans-serif',
    ].join(','),
    fontWeightBold: 700,
    fontWeightRegular: 400,
    fontWeightLight: 300,
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FBF3DB', // Cream
          color: '#1C394B', // Dark Blue
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#1C394B', // Default icon color
          '&.Mui-selected, &[aria-selected="true"]': {
            color: '#F17856', // Coral for active
          },
          '&:hover': {
            color: '#99A49A', // Sage on hover
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#927A7D', // Mauve
        },
      },
    },
  },
});

export default listNestTheme; 