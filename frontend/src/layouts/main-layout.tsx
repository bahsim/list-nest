import React from 'react';
import { HeaderBar } from '@/widgets/header-bar';
import { FooterNav } from '@/widgets/footer-nav';
import type { User } from '@/entities/user/types';
import Box from '@mui/material/Box';

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
}) => (
  <>
    <HeaderBar user={user} />
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
