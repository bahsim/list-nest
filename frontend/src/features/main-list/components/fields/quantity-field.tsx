import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import { alpha } from '@mui/material/styles';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { ActionChipField } from './action-chip-field';

interface QuantityFieldProps {
  quantity: number;
  unit: string;
  open: boolean;
  units: string[];
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onOpen: () => void;
  defaultQuantity: number;
  defaultUnit: string;
}

export const QuantityField: React.FC<QuantityFieldProps> = ({
  quantity,
  unit,
  open,
  units,
  onChange,
  onOpen,
  defaultQuantity,
  defaultUnit,
}) =>
  open ? (
    <div style={{ display: 'flex', gap: 8 }}>
      <TextField
        type="number"
        name="quantity"
        label="Quantity"
        value={quantity}
        onChange={onChange}
        fullWidth
        sx={{ flex: 1, background: (theme) => theme.palette.background.note, my: 1 }}
        autoFocus
        onKeyDown={(e) => {
          if (e.key === 'Enter') e.preventDefault();
        }}
      />
      <TextField
        select
        name="unit"
        label="Unit"
        value={unit}
        onChange={onChange}
        fullWidth
        sx={{ flex: 1, background: (theme) => theme.palette.background.note, my: 1 }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') e.preventDefault();
        }}
      >
        {units.map((u) => (
          <MenuItem key={u} value={u}>
            {u}
          </MenuItem>
        ))}
      </TextField>
    </div>
  ) : (quantity || defaultQuantity) && (unit || defaultUnit) ? (
    <>
      <FieldDisplay
        label="Quantity"
        value={`${quantity || defaultQuantity} ${unit || defaultUnit}`}
        onClick={onOpen}
      />
      <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
    </>
  ) : (
    <ActionChipField label="Add quantity" onClick={onOpen} />
  );

export default QuantityField; 