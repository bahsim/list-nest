import * as React from 'react';
import TextField from '@mui/material/TextField';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { ActionChipField } from './action-chip-field';

interface EstimatedPriceFieldProps {
  value: string | number | undefined;
  open: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onOpen: () => void;
  defaultValue: string | number | undefined;
}

export const EstimatedPriceField: React.FC<EstimatedPriceFieldProps> = ({
  value,
  open,
  onChange,
  onOpen,
  defaultValue,
}) =>
  open ? (
    <TextField
      name="estimatedPrice"
      label="Estimated Price"
      value={value || ''}
      onChange={onChange}
      type="number"
      fullWidth
      autoFocus
      sx={{ background: (theme) => theme.palette.background.note, my: 1 }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.preventDefault();
      }}
    />
  ) : value || defaultValue ? (
    <>
      <FieldDisplay label="Estimated Price" value={value ?? defaultValue ?? ''} onClick={onOpen} />
      <SectionDivider sx={{ mb: 1 }} />
    </>
  ) : (
    <ActionChipField label="Add price" onClick={onOpen} />
  );
