import * as React from 'react';
import styles from './FooterNav.module.scss';
import ListAltIcon from '@mui/icons-material/ListAlt';
import BarChartIcon from '@mui/icons-material/BarChart';
import HistoryIcon from '@mui/icons-material/History';
import SettingsIcon from '@mui/icons-material/Settings';

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
  <nav className={styles.footerNav}>
    {tabs.map(tab => (
      <button
        key={tab.key}
        onClick={() => onTabChange(tab.key)}
        className={
          `${styles.footerNav__button} ${activeTab === tab.key ? styles['is-active'] : ''}`
        }
        aria-current={activeTab === tab.key ? 'page' : undefined}
      >
        <span className={styles.footerNav__icon}>{tab.icon}</span>
        <span className={styles.footerNav__label}>{tab.label}</span>
      </button>
    ))}
  </nav>
); 