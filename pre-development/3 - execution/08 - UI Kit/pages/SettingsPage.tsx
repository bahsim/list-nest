import * as React from 'react';
import { HeaderBar, SettingsPanel, FooterNav } from '../components';
import type { User } from '../components/types';

export const SettingsPage: React.FC = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [notifications, setNotifications] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState('settings');
  const user: User = { id: '1', name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?img=1' };

  return (
    <div style={{ paddingBottom: 56 }}>
      <HeaderBar user={user} onSettings={() => {}} />
      <SettingsPanel
        theme={theme}
        onThemeChange={setTheme}
        notificationsEnabled={notifications}
        onNotificationsChange={setNotifications}
        onAccountManage={() => {}}
      />
      <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}; 