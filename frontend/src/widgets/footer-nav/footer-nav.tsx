import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListAltIcon from '@mui/icons-material/ListAltRounded';
import BarChartIcon from '@mui/icons-material/BarChartRounded';
import HistoryIcon from '@mui/icons-material/HistoryRounded';
import SettingsIcon from '@mui/icons-material/SettingsRounded';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';

/**
 * FooterNav displays bottom navigation for main app sections.
 * @param activeTab - The current active tab.
 * @param onTabChange - Handler for tab change.
 * @param sx - Optional style overrides for the wrapper Box.
 */
export interface FooterNavProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
  /**
   * Optional style overrides for the wrapper Box.
   */
  sx?: SxProps<Theme>;
}

const tabs = [
  { key: 'list', label: 'List', icon: <ListAltIcon />, isDisabled: false },
  { key: 'analytics', label: 'Analytics', icon: <BarChartIcon />, isDisabled: true },
  { key: 'history', label: 'History', icon: <HistoryIcon />, isDisabled: true },
  { key: 'settings', label: 'Settings', icon: <SettingsIcon />, isDisabled: true },
];

export const FooterNav: React.FC<FooterNavProps> = ({ activeTab, onTabChange, sx }) => (
  <Box
    sx={{
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 56,
      zIndex: 2,
      ...sx,
    }}
  >
    <BottomNavigation
      value={activeTab}
      onChange={(_, newValue) => onTabChange(newValue)}
      showLabels
      sx={{
        borderTop: theme => `1px solid ${theme.palette.divider}`,
        bgcolor: theme => theme.palette.background.default,
        px: 0,
        py: 0,
        minHeight: 56,
        boxShadow: theme => theme.shadows[1],
      }}
    >
      {tabs.map(tab => (
        <BottomNavigationAction
          key={tab.key}
          label={tab.label}
          value={tab.key}
          icon={tab.icon}
          disabled={tab.isDisabled}
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
  </Box>
); 