import React from 'react';
import { Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { LANGUAGES } from '@/shared/constants/languages';
import type { Language } from '@/shared/types/language';
import { useTranslation } from 'react-i18next';

/**
 * LanguageSelector component for selecting a language from supported list.
 * @param value - Selected language code
 * @param onChange - Callback when language changes
 * @param label - Optional label for the selector
 * @param tabIndex - Keyboard navigation index (default 0)
 * @param onKeyDown - Optional keydown handler
 */
interface LanguageSelectorProps {
  value: string;
  onChange: (languageCode: string) => void;
  label?: string;
  tabIndex?: number;
}

export const LanguageSelector: React.FC<LanguageSelectorProps> = ({ value, onChange, label, tabIndex = 0 }) => {
  const { t } = useTranslation();
  return (
    <FormControl fullWidth>
      <InputLabel id="language-selector-label">{label || t('settings.language')}</InputLabel>
      <Select
        labelId="language-selector-label"
        value={value}
        label={label || t('settings.language')}
        onChange={e => onChange(e.target.value as string)}
        inputProps={{ 'aria-label': label || t('settings.language'), tabIndex, role: 'listbox' }}
        role="listbox"
        tabIndex={tabIndex}
      >
        {LANGUAGES.map(language => (
          <MenuItem key={language.code} value={language.code}>
            {language.nativeName} ({language.name})
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}; 