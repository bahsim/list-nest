import * as React from 'react';
import { HeaderBar } from '../../components/organism/header-bar/header-bar';
import { SettingsPanel } from '../../components/organism/SettingsPanel/SettingsPanel';
import type { User } from '../../components/types';
import { FooterNav } from '../../components/organism/footer-nav/footer-nav';
import { SPACING } from '../../tokens/spacing';

export const SettingsPage: React.FC = () => {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [notifications, setNotifications] = React.useState(true);
  const [activeTab, setActiveTab] = React.useState('settings');
  const user: User = { id: '1', name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?img=1' };

  return (
    <div style={{ paddingBottom: SPACING.XL + SPACING.LG }}>
      <HeaderBar user={user} onSettings={() => {}} />
      <SettingsPanel
        theme={theme}
        onThemeChange={(theme: string) => setTheme(theme as 'light' | 'dark')}
        notificationsEnabled={notifications}
        onNotificationsChange={setNotifications}
        onAccountManage={() => {}}
      />
      <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}; 