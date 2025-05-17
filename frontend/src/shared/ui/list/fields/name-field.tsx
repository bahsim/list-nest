import * as React from 'react';
import TextField from '@mui/material/TextField';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
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
      <SectionDivider sx={{ mb: 1 }} />
    </>
  );
