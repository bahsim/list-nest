import { useState } from 'react';
import type { MainListItem } from '../../../entities/list/types';

export const useDeleteDialog = (setItems: (fn: (prev: MainListItem[]) => MainListItem[]) => void) => {
  const [deletingItem, setDeletingItem] = useState<MainListItem | null>(null);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const handleDeleteItem = (item: MainListItem): void => {
    setDeletingItem(item);
    setIsDeleteDialogOpen(true);
  };
  const confirmDeleteItem = () => {
    if (deletingItem) {
      setItems((prev) => prev.map((i) => i.id === deletingItem.id ? { ...i, isDeleted: true } : i));
    }
    setIsDeleteDialogOpen(false);
    setDeletingItem(null);
  };
  const cancelDeleteItem = () => {
    setIsDeleteDialogOpen(false);
    setDeletingItem(null);
  };

  return {
    deletingItem,
    isDeleteDialogOpen,
    handleDeleteItem,
    confirmDeleteItem,
    cancelDeleteItem,
  };
}; 