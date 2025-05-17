import React, { createContext, useContext } from 'react';

/**
 * HistoryListContextProps defines the contract for history list actions and state.
 */
export interface HistoryListContextProps {
  expandedItem: { group: string; itemId: string } | null;
  handleExpandItem: (group: string, itemId: string) => void;
}

const HistoryListContext = createContext<HistoryListContextProps | undefined>(undefined);

/**
 * Provides main list actions and state to its children.
 */
export const HistoryListProvider: React.FC<{ value: HistoryListContextProps; children: React.ReactNode }> = ({ value, children }) => (
  <HistoryListContext.Provider value={value}>{children}</HistoryListContext.Provider>
);

/**
 * useMainListContext returns the main list context value.
 * Throws if used outside MainListProvider.
 */
export function useHistoryListContext(): HistoryListContextProps {
  const ctx = useContext(HistoryListContext);
  if (!ctx) throw new Error('useHistoryListContext must be used within HistoryListProvider');
  return ctx;
} 