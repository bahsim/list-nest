import React from 'react';

const getRestoreContent = (item: any): React.ReactNode => (
  <>
    Are you sure you want to restore
    {item && <strong> {item.name}</strong>}
    ? This will move the item back to your active list.
  </>
);

const getDeleteContent = (item: any): React.ReactNode => (
  <>
    Are you sure you want to delete
    {item && <strong> {item.name}</strong>}
    ? This will move the item to deleted state. You can restore it later.
  </>
);

export const DIALOG_CONFIG = {
  restore: {
    title: 'Restore this item?',
    getContent: getRestoreContent,
    confirmLabel: 'Restore',
    confirmColor: 'primary' as const,
  },
  delete: {
    title: 'Delete this item?',
    getContent: getDeleteContent,
    confirmLabel: 'Delete',
    confirmColor: 'error' as const,
  },
}; 