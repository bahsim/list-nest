import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import AccessTimeIcon from '@mui/icons-material/AccessTimeRounded';
import styles from './header-bar.module.scss';

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

/**
 * Get initials from user name.
 * @param name - User's full name.
 * @returns Initials string.
 */
function getInitialsFromName(name: string): string {
  if (!name) return '';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const HeaderBar: React.FC<HeaderBarProps> = ({ user, onSettings }) => (
  <AppBar position="static" elevation={0} color="default" sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}>
    <Toolbar className={styles.headerBar__toolbar}>
      <div className={styles.headerBar__left}>
        <img src={logo} alt="App Logo" style={{ width: 54, height: 54, borderRadius: 10 }} />
        <Typography variant="h6" color="inherit" sx={{ fontWeight: 700, letterSpacing: 1 }}>
          ListNest
        </Typography>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        {user.avatarUrl ? (
          <Avatar src={user.avatarUrl} alt={user.name} sx={{ width: 32, height: 32 }} />
        ) : (
          <Avatar sx={{ width: 32, height: 32 }}>
            {user.name ? getInitialsFromName(user.name) : null}
          </Avatar>
        )}
        <IconButton aria-label="Settings" onClick={onSettings} color="inherit">
          <AccessTimeIcon />
        </IconButton>
      </div>
    </Toolbar>
  </AppBar>
); 