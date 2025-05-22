import { useState } from 'react';

/**
 * Interface for the return value of useItemDialog.
 * @template T - The item type.
 * @property {T | null} targetItem - The item that is currently being targeted.
 * @property {boolean} isDialogOpen - Whether the dialog is open.
 * @property {function(item: T, onConfirm: (item: T) => void): void} handleOpen - Function to open the dialog.
 * @property {function(): void} confirm - Function to confirm the dialog.
 * @property {function(): void} cancel - Function to cancel the dialog.
 */
export interface UseItemDialogResult<T> {
  targetItem: T | null;
  isDialogOpen: boolean;
  handleOpen: (item?: T, onConfirm?: (item: T) => void) => void;
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
  const [onConfirm, setOnConfirm] = useState<((item: T | null) => void) | null>(null);

  const handleOpen = (item?: T, onConfirm?: (item: T) => void) => {
    setTargetItem(item || null);
    setIsDialogOpen(true);
    setOnConfirm(() => onConfirm || (() => {}));
  };

  const confirm = () => {
    onConfirm?.(targetItem);
    setTargetItem(null);
    setIsDialogOpen(false);
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
