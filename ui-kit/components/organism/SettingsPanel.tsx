import * as React from 'react';

/**
 * SettingsPanel displays app settings (theme, notifications, account).
 * @param theme - Current theme.
 * @param onThemeChange - Theme change handler.
 * @param notificationsEnabled - Notifications toggle.
 * @param onNotificationsChange - Notifications toggle handler.
 * @param onAccountManage - Account management handler.
 */
export interface SettingsPanelProps {
  theme: 'light' | 'dark';
  onThemeChange: (theme: 'light' | 'dark') => void;
  notificationsEnabled: boolean;
  onNotificationsChange: (enabled: boolean) => void;
  onAccountManage: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({ theme, onThemeChange, notificationsEnabled, onNotificationsChange, onAccountManage }) => (
  <section style={{ background: '#FEF4DB', borderRadius: 12, boxShadow: 'var(--shadow-card, 0 2px 8px rgba(42,46,53,0.08))', padding: 24, maxWidth: 400, margin: '24px auto' }}>
    <h2>Settings</h2>
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        Theme:
        <select value={theme} onChange={e => onThemeChange(e.target.value as 'light' | 'dark')}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </label>
    </div>
    <div style={{ marginBottom: 16 }}>
      <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <input type="checkbox" checked={notificationsEnabled} onChange={e => onNotificationsChange(e.target.checked)} />
        Enable Notifications
      </label>
    </div>
    <div>
      <button onClick={onAccountManage} style={{ background: '#4A90E2', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 700 }}>Manage Account</button>
    </div>
  </section>
); 