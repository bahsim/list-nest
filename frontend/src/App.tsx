import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MainListPage } from './pages/main-list-page';
import { AnalyticsPage } from './pages/analytics-page';
import { HistoryListPage } from './pages/history-list-page';
import { SettingsPage } from './pages/settings-page';
import { MainLayout } from '@/layouts/main-layout';
import { mockUser } from '@/features/main-list/utils/mock-data';
import { useTranslation } from 'react-i18next';

export const App: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <BrowserRouter>
      <MainLayout user={mockUser}>
        <Routes>
          <Route path="/" element={<MainListPage />} />
          <Route path="/analytics" element={<AnalyticsPage />} />
          <Route path="/history" element={<HistoryListPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
