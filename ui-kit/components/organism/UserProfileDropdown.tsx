import * as React from 'react';
import type { User } from './types';

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
    <div style={{ position: 'relative', display: 'inline-block' }}>
      <button onClick={() => setOpen(o => !o)} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8 }}>
        <img src={user.avatarUrl} alt={user.name} style={{ height: 32, width: 32, borderRadius: '50%', objectFit: 'cover' }} />
        <span>{user.name}</span>
        <span style={{ fontSize: 12 }}>{open ? '▲' : '▼'}</span>
      </button>
      {open && (
        <div style={{ position: 'absolute', right: 0, top: 40, background: '#FFF6E5', border: '1px solid #FBF3DB', borderRadius: 8, boxShadow: '0 2px 8px rgba(42,46,53,0.08)', minWidth: 120, zIndex: 10 }}>
          <button onClick={onProfile} style={{ display: 'block', width: '100%', background: 'none', border: 'none', padding: 8, textAlign: 'left', cursor: 'pointer' }}>Profile</button>
          <button onClick={onLogout} style={{ display: 'block', width: '100%', background: 'none', border: 'none', padding: 8, textAlign: 'left', cursor: 'pointer', color: '#F76C5E' }}>Logout</button>
        </div>
      )}
    </div>
  );
}; 