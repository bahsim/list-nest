import * as React from 'react';
import TextField from '@mui/material/TextField';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { ActionChipField } from './action-chip-field';
import { usePersistentState } from '@/shared/hooks/use-persistent-state';
import { CURRENCY_KEY } from '@/shared/constants/storage-keys';
import { getCurrencySymbol } from '@/shared/utils/local-storage';
import { useTranslation } from 'react-i18next';

interface EstimatedPriceFieldProps {
  value: string | number | undefined;
  open: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onOpen: () => void;
  defaultValue: string | number | undefined;
  currency: string;
}

export const EstimatedPriceField: React.FC<EstimatedPriceFieldProps> = ({
  value,
  open,
  onChange,
  onOpen,
  defaultValue,
  currency,
}) => {
  const { t } = useTranslation();
  
  return open ? (
    <TextField
      name="estimatedPrice"
      label={t('fields.estimatedPrice')}
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
      <FieldDisplay
        label={t('fields.estimatedPrice')}
        value={`${getCurrencySymbol(currency)}${value ?? defaultValue}`}
        onClick={onOpen}
      />
      <SectionDivider sx={{ mb: 1 }} />
    </>
  ) : (
    <ActionChipField label={t('fields.addPrice')} onClick={onOpen} />
  );
};
