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
import { useTranslation } from 'react-i18next';

/**
 * FooterNav displays bottom navigation for main app sections.
 * @param sx - Optional style overrides for the wrapper Box.
 */
export interface FooterNavProps {
  sx?: SxProps<Theme>;
}

const tabs = [
  { key: 'list', labelKey: 'footerNav.list', icon: <ListAltIcon />, route: '/' },
  { key: 'analytics', labelKey: 'footerNav.analytics', icon: <BarChartIcon />, route: '/analytics' },
  { key: 'history', labelKey: 'footerNav.history', icon: <HistoryIcon />, route: '/history' },
  { key: 'settings', labelKey: 'footerNav.settings', icon: <SettingsIcon />, route: '/settings' },
];

export const FooterNav: React.FC<FooterNavProps> = ({ sx }) => {
  const { t } = useTranslation();
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
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        zIndex: 100,
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
          paddingBottom: 'env(safe-area-inset-bottom)',
        }}
      >
        {tabs.map(tab => (
          <BottomNavigationAction
            key={tab.key}
            label={t(tab.labelKey)}
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