import React, { createContext, useContext } from 'react';
import type { ListItem } from '@/entities/list/types';
import { mockItems } from '../utils/mock-data';

interface HistoryListDataContextProps {
  initialItems: ListItem[];
}

const HistoryListDataContext = createContext<HistoryListDataContextProps | undefined>(undefined);

export const HistoryListDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <HistoryListDataContext.Provider value={{ initialItems: mockItems }}>
    {children}
  </HistoryListDataContext.Provider>
);

export const useHistoryListData = (): HistoryListDataContextProps => {
  const ctx = useContext(HistoryListDataContext);
  if (!ctx) throw new Error('useHistoryListData must be used within HistoryListDataProvider');
  return ctx;
}; 