import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import type { MainListItem } from '../../../entities/list/types';

interface RestoreDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  item: MainListItem | null;
}

export const RestoreDialog: React.FC<RestoreDialogProps> = ({ open, onClose, onConfirm, item }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Restore this item?</DialogTitle>
    <DialogContent>
      Are you sure you want to restore
      {item && <strong> {item.name}</strong>}
      ? This will move the item back to your active list.
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} variant="outlined">Cancel</Button>
      <Button onClick={onConfirm} variant="contained" color="primary">Restore</Button>
    </DialogActions>
  </Dialog>
); 