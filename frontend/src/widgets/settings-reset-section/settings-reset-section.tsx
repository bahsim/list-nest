import React from 'react';
import { Box, Button, DialogContentText } from '@mui/material';
import { ConfirmDialog } from '@/shared/ui/list/confirm-dialog';
import { useItemDialog } from '@/shared/hooks/use-item-dialog';
import { useTranslation } from 'react-i18next';

export const SettingsResetSection: React.FC<{
  onResetCategories: () => void;
  onResetHistory: () => void;
  onResetAll: () => void;
}> = ({ onResetCategories, onResetHistory, onResetAll }) => {
  const resetCategoriesDialog = useItemDialog<void>();
  const resetHistoryDialog = useItemDialog<void>();
  const resetAllDialog = useItemDialog<void>();
  const { t } = useTranslation();

  const handleResetCategories = () => {
    resetCategoriesDialog.handleOpen(undefined, onResetCategories);
  };

  const handleResetHistory = () => {
    resetHistoryDialog.handleOpen(undefined, onResetHistory);
  };

  const handleResetAll = () => {
    resetAllDialog.handleOpen(undefined, onResetAll);
  };

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Button
        variant="outlined"
        color="error"
        onClick={handleResetCategories}
        aria-label={t('resetSection.resetCategoriesAria')}
      >
        {t('resetSection.resetCategories')}
      </Button>
      <ConfirmDialog
        open={resetCategoriesDialog.isDialogOpen}
        onClose={resetCategoriesDialog.cancel}
        onConfirm={resetCategoriesDialog.confirm}
        title={t('resetSection.confirmReset')}
        content={<DialogContentText>{t('resetSection.confirmCategories')}</DialogContentText>}
        confirmLabel={t('resetSection.confirm')}
        confirmColor="error"
      />
      <Button
        variant="outlined"
        color="error"
        onClick={handleResetHistory}
        aria-label={t('resetSection.resetHistoryAria')}
      >
        {t('resetSection.resetHistory')}
      </Button>
      <ConfirmDialog
        open={resetHistoryDialog.isDialogOpen}
        onClose={resetHistoryDialog.cancel}
        onConfirm={resetHistoryDialog.confirm}
        title={t('resetSection.confirmReset')}
        content={<DialogContentText>{t('resetSection.confirmHistory')}</DialogContentText>}
        confirmLabel={t('resetSection.confirm')}
        confirmColor="error"
      />
      <Button
        variant="outlined"
        color="error"
        onClick={handleResetAll}
        aria-label={t('resetSection.resetAllAria')}
      >
        {t('resetSection.resetAll')}
      </Button>
      <ConfirmDialog
        open={resetAllDialog.isDialogOpen}
        onClose={resetAllDialog.cancel}
        onConfirm={resetAllDialog.confirm}
        title={t('resetSection.confirmReset')}
        content={<DialogContentText>{t('resetSection.confirmAll')}</DialogContentText>}
        confirmLabel={t('resetSection.confirm')}
        confirmColor="error"
      />
    </Box>
  );
};
