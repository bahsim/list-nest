import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { CURRENCIES } from '@/shared/constants/currencies';
import type { Currency } from '@/shared/types/currency';

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

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({ value, onChange, label = 'Currency', tabIndex = 0 }) => (
  <FormControl fullWidth>
    <InputLabel id="currency-selector-label">{label}</InputLabel>
    <Select
      labelId="currency-selector-label"
      value={value}
      label={label}
      onChange={e => onChange(e.target.value as string)}
      inputProps={{ 'aria-label': label, tabIndex, role: 'listbox' }}
      role="listbox"
      tabIndex={tabIndex}
    >
      {CURRENCIES.map(currency => (
        <MenuItem key={currency.code} value={currency.code}>
          {currency.symbol} {currency.name}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
); 