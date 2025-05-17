import React, { createContext, useContext } from 'react';
import type { ListItem } from '@/entities/list/types';

interface MainListActionsContextValue {
  handleToggleBought: (item: ListItem) => void;
  handleToggleCurrent: (item: ListItem) => void;
  handleRestoreItem: (item: ListItem) => void;
  handleEditItem?: (item: ListItem) => void;
  handleDeleteItem?: (item: ListItem) => void;
  handleSaveNote?: (id: string, note: string) => void;
}

const MainListActionsContext = createContext<MainListActionsContextValue | null>(null);

export const MainListActionsProvider: React.FC<{ value: MainListActionsContextValue; children: React.ReactNode }> = ({ value, children }) => (
  <MainListActionsContext.Provider value={value}>{children}</MainListActionsContext.Provider>
);

export const useMainListActions = () => {
  const ctx = useContext(MainListActionsContext);
  if (!ctx) throw new Error('useMainListActions must be used within MainListActionsProvider');
  return ctx;
}; 