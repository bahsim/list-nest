import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import type { MainListItem } from '@/entities/list/types';

interface DeleteDialogProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  item: MainListItem | null;
}

export const DeleteDialog: React.FC<DeleteDialogProps> = ({ open, onClose, onConfirm, item }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle>Delete this item?</DialogTitle>
    <DialogContent>
      Are you sure you want to delete
      {item && <strong> {item.name}</strong>}
      ? This will move the item to deleted state. You can restore it later.
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} variant="outlined">Cancel</Button>
      <Button onClick={onConfirm} variant="contained" color="error">Delete</Button>
    </DialogActions>
  </Dialog>
); 