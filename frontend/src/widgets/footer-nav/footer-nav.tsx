import * as React from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import ListAltIcon from '@mui/icons-material/ListAltRounded';
import BarChartIcon from '@mui/icons-material/BarChartRounded';
import HistoryIcon from '@mui/icons-material/HistoryRounded';
import SettingsIcon from '@mui/icons-material/SettingsRounded';
import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { goToMainPage, goToRouteReplace } from '@/shared/utils/navigation';

/**
 * FooterNav displays bottom navigation for main app sections.
 * @param sx - Optional style overrides for the wrapper Box.
 */
export interface FooterNavProps {
  sx?: SxProps<Theme>;
}

const tabs = [
  { key: 'list', label: 'List', icon: <ListAltIcon />, route: '/' },
  { key: 'analytics', label: 'Analytics', icon: <BarChartIcon />, route: '/analytics' },
  { key: 'history', label: 'History', icon: <HistoryIcon />, route: '/history' },
  { key: 'settings', label: 'Settings', icon: <SettingsIcon />, route: '/settings' },
];

export const FooterNav: React.FC<FooterNavProps> = ({ sx }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentTab = tabs.find(tab => tab.route === location.pathname)?.key || 'list';

  const handleTabChange = useCallback((_: unknown, newValue: string) => {
    const tab = tabs.find(t => t.key === newValue);
    if (tab) {
      if (tab.route === '/') {
        goToMainPage(navigate);
      } else if (tab.route.startsWith('/')) {
        goToRouteReplace(navigate, tab.route);
      }
    }
  }, [location.pathname, navigate]);

  return (
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
        value={currentTab}
        onChange={handleTabChange}
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
}; 