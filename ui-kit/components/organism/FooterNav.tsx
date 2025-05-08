import * as React from 'react';
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
  { key: 'list', label: 'List', icon: '📝' },
  { key: 'analytics', label: 'Analytics', icon: '📊' },
  { key: 'history', label: 'History', icon: '🕑' },
  { key: 'settings', label: 'Settings', icon: '⚙️' },
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