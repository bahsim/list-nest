import { createTheme } from '@mui/material/styles';

// Brand color tokens (from summary.md)
const COLOR_PRIMARY = '#F76C5E'; // Coral Red
const COLOR_SECONDARY = '#4A90E2'; // Sky Blue
const COLOR_DARK = '#2A2E35'; // Midnight Navy
const COLOR_ACCENT = '#F9C74F'; // Golden Yellow
const COLOR_BG = '#FEF4DB'; // Soft Beige
const COLOR_DARK_ALT = '#1C394B'; // Dark Blue
const COLOR_BG_ALT = '#FBF3DB'; // Cream
const COLOR_PRIMARY_ALT = '#F17856'; // Coral
const COLOR_CATEGORY_SAGE = '#99A49A'; // Sage
const COLOR_CATEGORY_MAUVE = '#927A7D'; // Mauve
const COLOR_NOTE_BG = '#FFF8ED'; // Soft note input background
const COLOR_DELETED_ICON = '#E57373'; // Red for deleted icon

// Spacing tokens
const SPACING = { XS: 4, SM: 8, MD: 16, LG: 24, XL: 32 };
// Radii tokens
const RADII = { SM: 4, MD: 8, LG: 16, FULL: 9999 };
// Shadow tokens
const SHADOWS = {
  CARD: '0 2px 8px rgba(42,46,53,0.08)',
  MODAL: '0 4px 24px rgba(42,46,53,0.16)',
  BUTTON: '0 1px 4px rgba(42,46,53,0.12)',
};
// Font size tokens
const FONT_SIZES = { CAPTION: 12, BODY: 16, BODY_LG: 18, HEADING: 24, HERO: 32 };

// MUI expects exactly 25 shadow entries
const muiShadows: any = [
  'none',
  SHADOWS.CARD,
  SHADOWS.MODAL,
  SHADOWS.BUTTON,
  ...Array(21).fill('none'),
];

// Custom highlight alpha for list items
const HIGHLIGHT_ALPHA = 0.07;

declare module '@mui/material/styles' {
  interface PaletteBackground {
    note?: string;
  }
  interface TypeBackground {
    note?: string;
  }
  interface Palette {
    deletedIcon?: string;
  }
  interface PaletteOptions {
    deletedIcon?: string;
  }
  interface Theme {
    highlightAlpha: number;
  }
  interface ThemeOptions {
    highlightAlpha?: number;
  }
}

const listNestTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: COLOR_PRIMARY,
      contrastText: COLOR_BG_ALT,
    },
    secondary: {
      main: COLOR_SECONDARY,
      contrastText: COLOR_BG_ALT,
    },
    background: {
      default: COLOR_BG,
      paper: COLOR_BG_ALT,
      note: COLOR_NOTE_BG,
    },
    deletedIcon: COLOR_DELETED_ICON,
    text: {
      primary: COLOR_DARK_ALT,
      secondary: COLOR_CATEGORY_MAUVE,
    },
    info: {
      main: COLOR_CATEGORY_SAGE,
    },
    divider: COLOR_CATEGORY_MAUVE,
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
    fontSize: FONT_SIZES.BODY,
    h1: { fontSize: FONT_SIZES.HERO },
    h2: { fontSize: FONT_SIZES.HEADING },
    h3: { fontSize: FONT_SIZES.BODY_LG },
    body1: { fontSize: FONT_SIZES.BODY },
    body2: { fontSize: FONT_SIZES.CAPTION },
    caption: { fontSize: FONT_SIZES.CAPTION },
  },
  spacing: (factor: number) => `${factor * SPACING.SM}px`,
  shape: {
    borderRadius: RADII.MD,
  },
  shadows: muiShadows,
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLOR_BG_ALT,
          color: COLOR_DARK_ALT,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLOR_DARK_ALT,
          '&.Mui-selected, &[aria-selected="true"]': {
            color: COLOR_PRIMARY_ALT,
          },
          '&:hover': {
            color: COLOR_CATEGORY_SAGE,
          },
          '&:focus-visible': {
            outline: `2px solid ${COLOR_SECONDARY}`,
            outlineOffset: '2px',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: COLOR_CATEGORY_MAUVE,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: RADII.MD,
          boxShadow: SHADOWS.BUTTON,
          transition: 'box-shadow 0.2s, background 0.2s',
          '&:focus-visible': {
            outline: `2px solid ${COLOR_SECONDARY}`,
            outlineOffset: '2px',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: RADII.LG,
          boxShadow: SHADOWS.CARD,
        },
      },
    },
    MuiModal: {
      styleOverrides: {
        root: {
          background: 'rgba(42,46,53,0.16)',
        },
      },
    },
  },
  highlightAlpha: HIGHLIGHT_ALPHA,
});

export default listNestTheme; 