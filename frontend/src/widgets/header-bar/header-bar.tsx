import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
// import { Avatar } from '../../atomic/avatar';
import Typography from '@mui/material/Typography';

// NOTE: Update the logo path as needed for your build setup. Assumes '/apple-touch-icon.png' in public root.
const logo = '/favicon-96x96.png';

/**
 * HeaderBar component for the Family Grocery App.
 * @param user - The current user object.
 * @param onSettings - Callback for settings button click.
 */
export interface User {
  id: string;
  name: string;
  avatarUrl?: string;
}

export interface HeaderBarProps {
  user: User;
  onSettings: () => void;
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ user, onSettings }) => (
  <Box sx={{ position: 'absolute', top: 0, left: 0, right: 0, height: 56, zIndex: 2 }}>
    <AppBar position="static" elevation={0} color="default" sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minHeight: 56,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <img src={logo} alt="App Logo" style={{ width: 54, height: 54, borderRadius: 10 }} />
          <Typography variant="h6" color="inherit" sx={{ fontWeight: 700, letterSpacing: 1 }}>
            ListNest
          </Typography>
        </Box>
        {/* <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {user.avatarUrl ? (
            <Avatar name={user.name} avatarUrl={user.avatarUrl} size={32} />
          ) : (
            <Avatar name={user.name} size={32} />
          )}
        </div> */}
      </Toolbar>
    </AppBar>
  </Box>
); 