import * as React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { alpha } from '@mui/material/styles';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { ActionChipField } from './action-chip-field';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
import { useTranslation } from 'react-i18next';

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
}) => {
  const { t } = useTranslation();
  return open ? (
    <div style={{ display: 'flex', gap: 8 }}>
      <TextField
        type="number"
        name="quantity"
        label={t('fields.quantity')}
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
        label={t('fields.unit')}
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
        label={t('fields.quantity')}
        value={`${quantity || defaultQuantity} ${unit || defaultUnit}`}
        onClick={onOpen}
      />
      <SectionDivider sx={{ mb: 1 }} />
    </>
  ) : (
    <ActionChipField label={t('fields.addQuantity')} onClick={onOpen} />
  );
};

export default QuantityField; 