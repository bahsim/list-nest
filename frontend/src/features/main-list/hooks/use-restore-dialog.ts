import { useState } from 'react';
import type { MainListItem } from '../../../entities/list/types';

export const useRestoreDialog = (setItems: (fn: (prev: MainListItem[]) => MainListItem[]) => void) => {
  const [restoringItem, setRestoringItem] = useState<MainListItem | null>(null);
  const [isRestoreDialogOpen, setIsRestoreDialogOpen] = useState(false);

  const handleRestoreItem = (item: MainListItem): void => {
    setRestoringItem(item);
    setIsRestoreDialogOpen(true);
  };
  const confirmRestoreItem = () => {
    if (restoringItem) {
      setItems((prev) => prev.map((i) => i.id === restoringItem.id ? { ...i, isDeleted: false } : i));
    }
    setIsRestoreDialogOpen(false);
    setRestoringItem(null);
  };
  const cancelRestoreItem = () => {
    setIsRestoreDialogOpen(false);
    setRestoringItem(null);
  };

  return {
    restoringItem,
    isRestoreDialogOpen,
    handleRestoreItem,
    confirmRestoreItem,
    cancelRestoreItem,
  };
}; 