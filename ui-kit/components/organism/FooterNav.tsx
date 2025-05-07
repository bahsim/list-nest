import * as React from 'react';

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
  <nav style={{ position: 'fixed', bottom: 0, left: 0, width: '100vw', background: '#FFF6E5', borderTop: '1px solid #FBF3DB', display: 'flex', justifyContent: 'space-around', alignItems: 'center', height: 56, zIndex: 100 }}>
    {tabs.map(tab => (
      <button
        key={tab.key}
        onClick={() => onTabChange(tab.key)}
        style={{
          background: 'none',
          border: 'none',
          color: activeTab === tab.key ? '#F76C5E' : '#99A49A',
          fontWeight: activeTab === tab.key ? 700 : 400,
          fontSize: 18,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          cursor: 'pointer',
        }}
        aria-current={activeTab === tab.key ? 'page' : undefined}
      >
        <span>{tab.icon}</span>
        <span style={{ fontSize: 12 }}>{tab.label}</span>
      </button>
    ))}
  </nav>
); 