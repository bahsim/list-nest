import { useState } from 'react';

/**
 * Interface for the return value of useItemDialog.
 */
export interface UseItemDialogResult<T> {
  targetItem: T | null;
  isDialogOpen: boolean;
  handleOpen: (item: T, onConfirm: (item: T) => void) => void;
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
  const [onConfirm, setOnConfirm] = useState<((item: T) => void) | null>(null);

  const handleOpen = (item: T, onConfirm: (item: T) => void) => {
    setTargetItem(item);
    setIsDialogOpen(true);
    setOnConfirm(() => onConfirm);
  };

  const confirm = () => {
    setIsDialogOpen(false);
    // Consumer should handle mutation using targetItem
    targetItem && onConfirm?.(targetItem);
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
