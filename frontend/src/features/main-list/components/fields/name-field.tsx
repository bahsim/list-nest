import * as React from 'react';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';

interface NameFieldProps {
  value: string;
  open: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onOpen: () => void;
}

export const NameField: React.FC<NameFieldProps> = ({ value, open, onChange, onOpen }) =>
  open ? (
    <TextField
      name="name"
      label="Name"
      value={value}
      onChange={onChange}
      sx={{ background: (theme) => theme.palette.background.note, my: 1 }}
      fullWidth
      required
      autoFocus
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.preventDefault();
      }}
    />
  ) : (
    <>
      <FieldDisplay label="Name" value={value} onClick={onOpen} />
      <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
    </>
  );
