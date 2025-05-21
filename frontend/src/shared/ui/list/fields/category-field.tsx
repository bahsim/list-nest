import * as React from 'react';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { ActionChipField } from './action-chip-field';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Category } from '@/shared/types/category';
import { useTranslation } from 'react-i18next';

interface CategoryFieldProps {
  value: string;
  open: boolean;
  categories: Category[];
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
}) => {
  const { t } = useTranslation();
  return open ? (
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
        {t('fields.category')}
      </MenuItem>
      {categories.map((cat) => (
        <MenuItem key={cat.name} value={cat.name}>
          {cat.name}
        </MenuItem>
      ))}
    </Select>
  ) : value || defaultValue ? (
    <FieldDisplay label={t('fields.category')} value={value || defaultValue} onClick={onOpen} />
  ) : (
    <ActionChipField label={t('fields.addCategory')} onClick={onOpen} />
  );
};
