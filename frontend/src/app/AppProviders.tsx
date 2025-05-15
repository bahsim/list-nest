import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import listNestTheme from '../shared/theme-listnest';

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => (
  <ThemeProvider theme={listNestTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
); 