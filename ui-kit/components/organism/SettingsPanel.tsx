import * as React from 'react';
import styles from './SettingsPanel.module.scss';

/**
 * SettingsPanel displays app settings (theme, notifications, account).
 * @param theme - Current theme.
 * @param onThemeChange - Theme change handler.
 * @param notificationsEnabled - Notifications toggle.
 * @param onNotificationsChange - Notifications toggle handler.
 * @param onAccountManage - Account management handler.
 */
export interface SettingsPanelProps {
  theme: string;
  onThemeChange: (theme: string) => void;
  notificationsEnabled: boolean;
  onNotificationsChange: (enabled: boolean) => void;
  onAccountManage: () => void;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  theme,
  onThemeChange,
  notificationsEnabled,
  onNotificationsChange,
  onAccountManage,
}) => (
  <section className={styles.settingsPanel}>
    <div className={styles.settingsPanel__section}>
      <label className={styles.settingsPanel__label}>Theme</label>
      <select
        className={styles.settingsPanel__input}
        value={theme}
        onChange={e => onThemeChange(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
    <div className={styles.settingsPanel__section}>
      <label className={styles.settingsPanel__label}>
        <input
          type="checkbox"
          checked={notificationsEnabled}
          onChange={e => onNotificationsChange(e.target.checked)}
          className={styles.settingsPanel__input}
        />
        Enable Notifications
      </label>
    </div>
    <button className={styles.settingsPanel__button} onClick={onAccountManage}>
      Manage Account
    </button>
  </section>
); 