import * as React from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { ActionChipField } from './action-chip-field';

interface NotesFieldProps {
  value: string | undefined;
  open: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onOpen: () => void;
  defaultValue: string | undefined;
}

export const NotesField: React.FC<NotesFieldProps> = ({ value, open, onChange, onOpen, defaultValue }) =>
  open ? (
    <TextField
      name="notes"
      label="Notes"
      value={value || ''}
      onChange={onChange}
      fullWidth
      multiline
      minRows={2}
      autoFocus
      sx={{ background: (theme) => theme.palette.background.note, my: 1 }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.preventDefault();
      }}
    />
  ) : value || defaultValue ? (
    <>
      <FieldDisplay
        label="Notes"
        value={value || defaultValue || ''}
        multiline
        onClick={onOpen}
      />
      <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
    </>
  ) : (
    <ActionChipField label="Add note" onClick={onOpen} />
  );
