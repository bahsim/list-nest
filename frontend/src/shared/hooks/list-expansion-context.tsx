import React, { createContext, useContext } from 'react';
import { useExpandedItem } from './use-expanded-item';

interface ListExpansionContextValue {
  expandedItem: { group: string; itemId: string } | null;
  handleExpandItem: (group: string, itemId: string) => void;
}

const ListExpansionContext = createContext<ListExpansionContextValue | null>(null);

export const ListExpansionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { expandedItem, handleExpandItem } = useExpandedItem<string, string>();
  return (
    <ListExpansionContext.Provider value={{ expandedItem, handleExpandItem }}>
      {children}
    </ListExpansionContext.Provider>
  );
};

export const useListExpansion = () => {
  const ctx = useContext(ListExpansionContext);
  if (!ctx) throw new Error('useListExpansion must be used within ListExpansionProvider');
  return ctx;
}; 