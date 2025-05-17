import React, { createContext, useContext } from 'react';
import type { ListItem } from '@/entities/list/types';

interface HistoryListActionsContextValue {
  // Add any future actions here
}

const HistoryListActionsContext = createContext<HistoryListActionsContextValue | null>(null);

export const HistoryListActionsProvider: React.FC<{ value: HistoryListActionsContextValue; children: React.ReactNode }> = ({ value, children }) => (
  <HistoryListActionsContext.Provider value={value}>{children}</HistoryListActionsContext.Provider>
);

export const useHistoryListActions = () => {
  const ctx = useContext(HistoryListActionsContext);
  if (!ctx) throw new Error('useHistoryListActions must be used within HistoryListActionsProvider');
  return ctx;
}; 