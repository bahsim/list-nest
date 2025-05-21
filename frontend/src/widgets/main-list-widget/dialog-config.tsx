import React from 'react';
import { useTranslation } from 'react-i18next';

const getRestoreContent = (item: any): React.ReactNode => {
  const { t } = useTranslation();
  return (
    <>
      {t('dialog.restoreContent.part1')}
      {item && <strong> {item.name}</strong>}
      {t('dialog.restoreContent.part2')}
    </>
  );
};

const getDeleteContent = (item: any): React.ReactNode => {
  const { t } = useTranslation();
  return (
    <>
      {t('dialog.deleteContent.part1')}
      {item && <strong> {item.name}</strong>}
      {t('dialog.deleteContent.part2')}
    </>
  );
};

export const DIALOG_CONFIG = {
  restore: {
    title: 'dialog.restoreTitle',
    getContent: getRestoreContent,
    confirmLabel: 'dialog.restore',
    confirmColor: 'primary' as const,
  },
  delete: {
    title: 'dialog.deleteTitle',
    getContent: getDeleteContent,
    confirmLabel: 'dialog.delete',
    confirmColor: 'error' as const,
  },
}; 