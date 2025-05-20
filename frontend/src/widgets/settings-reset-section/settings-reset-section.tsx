import React from 'react';
import { Button, DialogContentText } from '@mui/material';
import { ConfirmDialog } from '@/shared/ui/list/confirm-dialog';
import { useItemDialog } from '@/shared/hooks/use-item-dialog';

export const SettingsResetSection: React.FC = () => {
  const resetDialog = useItemDialog<void>();

  return (
    <>
      <Button
        variant="outlined"
        color="error"
        onClick={() => resetDialog.handleOpen()}
        aria-label="Reset History"
      >
        Reset History
      </Button>
      <ConfirmDialog
        open={resetDialog.isDialogOpen}
        onClose={resetDialog.cancel}
        onConfirm={resetDialog.confirm}
        title="Confirm Reset"
        content={
          <DialogContentText>
            Are you sure you want to clear all history? This cannot be undone.
          </DialogContentText>
        }
        confirmLabel="Confirm"
        confirmColor="error"
      />
    </>
  );
};
