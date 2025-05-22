import React, { useEffect } from 'react';
import { HeaderBar } from '@/widgets/header-bar';
import { FooterNav } from '@/widgets/footer-nav';
import type { User } from '@/entities/user/types';
import Box from '@mui/material/Box';
import { usePersistentState } from '@/shared/hooks/use-persistent-state';
import { CATEGORIES_KEY, CURRENCY_KEY, LANGUAGE_KEY } from '@/shared/constants/storage-keys';
import { InitialSettingsDialog } from '@/features/initial-settings-dialog/initial-settings-dialog';
import i18n from '@/shared/config/i18n/i18n';
import { CATEGORIES_WITH_COLORS } from '@/shared/constants/categories';
import { Category } from '@/shared/types/category';

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

export const MainLayout: React.FC<MainLayoutProps> = ({ user, children }) => {
  const [currency, setCurrency] = usePersistentState(CURRENCY_KEY, '');
  const [language, setLanguageRaw] = usePersistentState(LANGUAGE_KEY, '');
  const [categories, setCategories] = usePersistentState<Category[]>(CATEGORIES_KEY, []);

  const setLanguage = React.useCallback(
    (lang: string) => {
      setLanguageRaw(lang);
      i18n.changeLanguage(lang);
    },
    [setLanguageRaw],
  );

  const putCategories = () => {
    if (language && !categories.length) {
      setCategories(CATEGORIES_WITH_COLORS[language]);
    }
  };

  useEffect(() => {
    putCategories();
  }, []);

  useEffect(() => {
    i18n.changeLanguage(language);
    putCategories();
  }, [language]);

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
