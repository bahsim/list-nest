import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { ActionChipField } from './action-chip-field';

interface CategoryFieldProps {
  value: string;
  open: boolean;
  categories: string[];
  onInputChange: (newValue: string) => void;
  onOpen: () => void;
  defaultValue: string;
}

export const CategoryField: React.FC<CategoryFieldProps> = ({
  value,
  open,
  categories,
  onInputChange,
  onOpen,
  defaultValue,
}) =>
  open ? (
    <Autocomplete
      freeSolo
      options={categories}
      value={value}
      onInputChange={(_, newValue) => onInputChange(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          name="category"
          label="Category"
          fullWidth
          autoFocus
          sx={{ background: (theme) => theme.palette.background.note, my: 1 }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') e.preventDefault();
          }}
        />
      )}
    />
  ) : value || defaultValue ? (
    <FieldDisplay label="Category" value={value || defaultValue} onClick={onOpen} />
  ) : (
    <ActionChipField label="Add category" onClick={onOpen} />
  );
