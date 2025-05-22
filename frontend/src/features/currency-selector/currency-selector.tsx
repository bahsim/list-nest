import React from 'react';
import { Select, MenuItem, InputLabel, FormControl, SelectChangeEvent } from '@mui/material';
import { CURRENCIES } from '@/shared/constants/currencies';
import { useTranslation } from 'react-i18next';

/**
 * CurrencySelector component for selecting a currency from supported list.
 * @param value - Selected currency code
 * @param onChange - Callback when currency changes
 * @param label - Optional label for the selector
 * @param tabIndex - Keyboard navigation index (default 0)
 * @param onKeyDown - Optional keydown handler
 */
interface CurrencySelectorProps {
  value: string;
  onChange: (currencyCode: string) => void;
  label?: string;
  tabIndex?: number;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({ value, onChange, label, tabIndex = 0 }) => {
  const { t } = useTranslation();
  const handleChange = (e: SelectChangeEvent<string>) => {
    onChange(e.target.value as string);
  };

  return (
    <FormControl fullWidth>
      <InputLabel id="currency-selector-label">{label || t('currencySelector.label')}</InputLabel>
      <Select
        labelId="currency-selector-label"
        value={value}
        label={label || t('currencySelector.label')}
        onChange={handleChange}
        inputProps={{ 'aria-label': label || t('currencySelector.label'), tabIndex, role: 'listbox' }}
        role="listbox"
        tabIndex={tabIndex}
      >
        {CURRENCIES.map(currency => (
          <MenuItem key={currency.code} value={currency.code}>
            {currency.symbol} {t(currency.nameKey)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}; 