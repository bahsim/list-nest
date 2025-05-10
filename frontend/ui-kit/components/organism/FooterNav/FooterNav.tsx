import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListAltIcon from '@mui/icons-material/ListAltRounded';
import BarChartIcon from '@mui/icons-material/BarChartRounded';
import HistoryIcon from '@mui/icons-material/HistoryRounded';
import SettingsIcon from '@mui/icons-material/SettingsRounded';
import styles from './FooterNav.module.scss';

/**
 * FooterNav displays bottom navigation for main app sections.
 * @param activeTab - The current active tab.
 * @param onTabChange - Handler for tab change.
 */
export interface FooterNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const tabs = [
  { key: 'list', label: 'List', icon: <ListAltIcon /> },
  { key: 'analytics', label: 'Analytics', icon: <BarChartIcon /> },
  { key: 'history', label: 'History', icon: <HistoryIcon /> },
  { key: 'settings', label: 'Settings', icon: <SettingsIcon /> },
];

export const FooterNav: React.FC<FooterNavProps> = ({ activeTab, onTabChange }) => (
  <BottomNavigation
    className={styles.footerNav}
    value={activeTab}
    onChange={(_, newValue) => onTabChange(newValue)}
    showLabels
    sx={{
      borderTop: theme => `1px solid ${theme.palette.divider}`,
      bgcolor: theme => theme.palette.background.default,
    }}
  >
    {tabs.map(tab => (
      <BottomNavigationAction
        key={tab.key}
        label={tab.label}
        value={tab.key}
        icon={tab.icon}
        sx={{
          color: theme => theme.palette.text.primary,
          fontWeight: 400,
          '&.Mui-selected': {
            color: theme => theme.palette.secondary.main,
            fontWeight: 700,
          },
        }}
      />
    ))}
  </BottomNavigation>
); 