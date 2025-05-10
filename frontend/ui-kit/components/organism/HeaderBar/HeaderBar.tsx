import * as React from 'react';
import styles from './HeaderBar.module.scss';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// NOTE: Update the logo path as needed for your build setup. Assumes '/apple-touch-icon.png' in public root.
// @ts-ignore
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

export const HeaderBar = ({ user, onSettings }: HeaderBarProps) => (
  <header className={styles.headerBar}>
    <div className={styles.headerBar__left}>
      <img src={logo} alt="App Logo" className={styles.headerBar__logo} />
      <span className={styles.headerBar__title}>ListNest</span>
    </div>
    <div className={styles.headerBar__right}>
      {user.avatarUrl && <img src={user.avatarUrl} alt={user.name} className={styles.headerBar__avatar} />}
      <button aria-label="Settings" onClick={onSettings} className={styles.headerBar__settingsBtn}>
        <AccessTimeIcon className={styles.headerBar__settingsIcon} />
      </button>
    </div>
  </header>
); 