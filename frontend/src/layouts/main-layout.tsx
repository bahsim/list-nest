import React from 'react';
import { HeaderBar } from '@/widgets/header-bar';
import { FooterNav } from '@/widgets/footer-nav';
import type { User } from '@/entities/user/types';
import Box from '@mui/material/Box';
import { usePersistentState } from '@/shared/hooks/use-persistent-state';
import { CURRENCY_KEY, LANGUAGE_KEY } from '@/shared/constants/storage-keys';
import { InitialSettingsDialog } from '@/features/initial-settings-dialog/initial-settings-dialog';

/**
 * MainLayout wraps page content with HeaderBar and FooterNav.
 * @param user - The user object for HeaderBar.
 * @param onSettings - Settings handler for HeaderBar.
 * @param children - Page content.
 */
export interface MainLayoutProps {
  user: User;
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({
  user,
  children,
}) => {
  const [currency, setCurrency] = usePersistentState(CURRENCY_KEY, '');
  const [language, setLanguage] = usePersistentState(LANGUAGE_KEY, '');

  const showDialog = !currency || !language;

  return (
    <>
      <HeaderBar user={user} />
      <InitialSettingsDialog
        open={showDialog}
        currency={currency}
        setCurrency={setCurrency}
        language={language}
        setLanguage={setLanguage}
        onClose={() => {}}
      />
      {/* Main Content (scrollable) */}
      <Box
        sx={{
          position: 'absolute',
          top: 24,
          bottom: 56,
          left: 0,
          right: 0,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 5,
          width: '100%',
          paddingBottom: 12,
        }}
      >
        {children}
      </Box>
      <FooterNav />
    </>
  );
};
