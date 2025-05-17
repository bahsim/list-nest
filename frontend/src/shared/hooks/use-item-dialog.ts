import { useState } from 'react';

/**
 * Interface for the return value of useItemDialog.
 */
export interface UseItemDialogResult<T> {
  targetItem: T | null;
  isDialogOpen: boolean;
  handleOpen: (item: T) => void;
  confirm: () => void;
  cancel: () => void;
}

/**
 * useItemDialog manages dialog state and the targeted item for confirm/cancel flows.
 * @template T - The item type.
 */
export function useItemDialog<T>(): UseItemDialogResult<T> {
  const [targetItem, setTargetItem] = useState<T | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleOpen = (item: T) => {
    setTargetItem(item);
    setIsDialogOpen(true);
  };

  const confirm = () => {
    setIsDialogOpen(false);
    // Consumer should handle mutation using targetItem
    setTargetItem(null);
  };

  const cancel = () => {
    setIsDialogOpen(false);
    setTargetItem(null);
  };

  return {
    targetItem,
    isDialogOpen,
    handleOpen,
    confirm,
    cancel,
  };
} 