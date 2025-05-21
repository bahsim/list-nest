import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { ActionChipField } from './action-chip-field';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

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
    <Select
      value={value}
      onChange={(e) => onInputChange(e.target.value as string)}
      displayEmpty
      fullWidth
      autoFocus
      name="category"
      sx={{ background: (theme) => theme.palette.background.note, my: 1 }}
      MenuProps={{ PaperProps: { sx: { maxHeight: 200 } } }}
    >
      <MenuItem value="" disabled>
        Category
      </MenuItem>
      {categories.map((cat) => (
        <MenuItem key={cat} value={cat}>
          {cat}
        </MenuItem>
      ))}
    </Select>
  ) : value || defaultValue ? (
    <FieldDisplay label="Category" value={value || defaultValue} onClick={onOpen} />
  ) : (
    <ActionChipField label="Add category" onClick={onOpen} />
  );
