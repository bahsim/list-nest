import * as React from 'react';
import type { User } from '../types';
import styles from './UserProfileDropdown.module.scss';

/**
 * UserProfileDropdown displays the current user and a dropdown for profile actions.
 * @param user - The current user.
 * @param onLogout - Logout handler.
 * @param onProfile - Profile handler.
 */
export interface UserProfileDropdownProps {
  user: User;
  onLogout: () => void;
  onProfile: () => void;
}

export const UserProfileDropdown: React.FC<UserProfileDropdownProps> = ({ user, onLogout, onProfile }) => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className={styles.userProfileDropdown}>
      <button onClick={() => setOpen(o => !o)} className={styles.userProfileDropdown__button}>
        <img src={user.avatarUrl} alt={user.name} className={styles.userProfileDropdown__avatar} />
        <span>{user.name}</span>
        <span className={styles.userProfileDropdown__arrow}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div className={styles.userProfileDropdown__menu}>
          <button onClick={onProfile} className={styles.userProfileDropdown__menuButton}>Profile</button>
          <button onClick={onLogout} className={`${styles.userProfileDropdown__menuButton} ${styles.userProfileDropdown__logout}`}>Logout</button>
        </div>
      )}
    </div>
  );
}; 