import React, { createContext, useContext } from 'react';
import type { ListItem } from '@/entities/list/types';

/**
 * MainListContextProps defines the contract for main list actions and state.
 */
export interface MainListContextProps {
  expandedItem: { group: 'current' | 'all'; itemId: string } | null;
  handleEditItem: (item: ListItem) => void;
  handleDeleteItem: (item: ListItem) => void;
  handleToggleBought: (item: ListItem) => void;
  handleToggleCurrent: (item: ListItem) => void;
  handleRestoreItem: (item: ListItem) => void;
  handleSaveNote: (id: string, note: string) => void;
  handleExpandItem: (group: string, itemId: string) => void;
}

const MainListContext = createContext<MainListContextProps | undefined>(undefined);

/**
 * Provides main list actions and state to its children.
 */
export const MainListProvider: React.FC<{ value: MainListContextProps; children: React.ReactNode }> = ({ value, children }) => (
  <MainListContext.Provider value={value}>{children}</MainListContext.Provider>
);

/**
 * useMainListContext returns the main list context value.
 * Throws if used outside MainListProvider.
 */
export function useMainListContext(): MainListContextProps {
  const ctx = useContext(MainListContext);
  if (!ctx) throw new Error('useMainListContext must be used within MainListProvider');
  return ctx;
} 