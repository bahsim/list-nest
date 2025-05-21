import React from 'react';
import { Box, Button, DialogContentText } from '@mui/material';
import { ConfirmDialog } from '@/shared/ui/list/confirm-dialog';
import { useItemDialog } from '@/shared/hooks/use-item-dialog';
import { useTranslation } from 'react-i18next';

export const SettingsResetSection: React.FC = () => {
  const resetDialog = useItemDialog<void>();
  const { t } = useTranslation();

  return (
    <Box display="flex" flexDirection="column" gap={2}>
      <Button
        variant="outlined"
        color="error"
        // @ts-ignore
        onClick={() => resetDialog.handleOpen({}, () => {})}
        aria-label={t('resetSection.resetHistoryAria')}
      >
        {t('resetSection.resetCategories')}
      </Button>
      <ConfirmDialog
        open={resetDialog.isDialogOpen}
        onClose={resetDialog.cancel}
        onConfirm={resetDialog.confirm}
        title={t('resetSection.confirmReset')}
        content={
          <DialogContentText>
            {t('resetSection.confirmCategories')}
          </DialogContentText>
        }
        confirmLabel={t('resetSection.confirm')}
        confirmColor="error"
      />
      <Button
        variant="outlined"
        color="error"
        // @ts-ignore
        onClick={() => resetDialog.handleOpen({}, () => {})}
        aria-label={t('resetSection.resetHistoryAria')}
      >
        {t('resetSection.resetHistory')}
      </Button>
      <ConfirmDialog
        open={resetDialog.isDialogOpen}
        onClose={resetDialog.cancel}
        onConfirm={resetDialog.confirm}
        title={t('resetSection.confirmReset')}
        content={
          <DialogContentText>
            {t('resetSection.confirmHistory')}
          </DialogContentText>
        }
        confirmLabel={t('resetSection.confirm')}
        confirmColor="error"
      />
    </Box>
  );
};
