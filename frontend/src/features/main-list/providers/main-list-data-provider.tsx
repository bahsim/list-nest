import React, { createContext, useContext } from 'react';
import type { MainListItem } from '@/entities/list/types';
import { mockItems } from '../utils/mock-data';

interface MainListDataContextProps {
  initialItems: MainListItem[];
}

const MainListDataContext = createContext<MainListDataContextProps | undefined>(undefined);

export const MainListDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <MainListDataContext.Provider value={{ initialItems: mockItems }}>
    {children}
  </MainListDataContext.Provider>
);

export const useMainListData = (): MainListDataContextProps => {
  const ctx = useContext(MainListDataContext);
  if (!ctx) throw new Error('useMainListData must be used within MainListDataProvider');
  return ctx;
}; 