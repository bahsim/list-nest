import { useState, useCallback } from 'react';

/**
 * useModal - simple modal open/close state hook
 * @returns { open, openModal, closeModal }
 */
export const useModal = () => {
  const [open, setOpen] = useState(false);

  const openModal = useCallback(() => setOpen(true), []);
  const closeModal = useCallback(() => setOpen(false), []);

  return { open, openModal, closeModal };
};
