import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { DateRange } from '@/shared/types/date-range';
import { DATE_PRESETS, getDatePresetTranslationKey } from '@/shared/constants/date-presets';
import { useTranslation } from 'react-i18next';

/**
 * DateFilterChips - Category/date preset chips and two date pickers for range selection.
 * @param selectedRange - [from, to] date tuple
 * @param onChange - callback for range change
 * @param selectedPreset - currently selected preset label
 * @param onPresetSelect - callback for preset selection
 */
export interface DateFilterChipsProps {
  selectedRange: DateRange<Date> | undefined;
  onChange: (range: DateRange<Date>) => void;
  selectedPreset: string | null;
  onPresetSelect: (preset: string) => void;
}

export const DateFilterChips: React.FC<DateFilterChipsProps> = ({
  selectedRange,
  onChange,
  selectedPreset,
  onPresetSelect,
}) => {
  const { t } = useTranslation();
  let start: Date | null = null;
  let end: Date | null = null;
  if (Array.isArray(selectedRange) && selectedRange.length === 2) {
    [start, end] = selectedRange;
  }
  return (
    <Box sx={{ mt: 2, mb: 2 }}>
      <Typography variant="body2" sx={{ mb: 1, color: 'text.secondary' }}>{t('dateFilter.dateRange')}</Typography>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', mb: 1 }}>
        {DATE_PRESETS.map((preset) => (
          <Chip
            key={preset.label}
            label={t(getDatePresetTranslationKey(preset.label))}
            color={selectedPreset === preset.label ? 'primary' : 'default'}
            onClick={() => onPresetSelect(preset.label)}
            tabIndex={0}
            aria-label={t('dateFilter.filterBy', { label: t(getDatePresetTranslationKey(preset.label)) })}
            role="button"
          />
        ))}
      </Box>
      <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', mt: 1 }} role="group" aria-label={t('dateFilter.dateRangePickers')}>
        <DatePicker
          label={t('dateFilter.from')}
          value={start}
          onChange={(date) => onChange([date, end])}
          maxDate={end || undefined}
          slotProps={{ textField: { size: 'small', sx: { minWidth: 120 }, 'aria-label': t('dateFilter.fromDate') } }}
        />
        <DatePicker
          label={t('dateFilter.to')}
          value={end}
          onChange={(date) => onChange([start, date])}
          minDate={start || undefined}
          slotProps={{ textField: { size: 'small', sx: { minWidth: 120 }, 'aria-label': t('dateFilter.toDate') } }}
        />
      </Box>
    </Box>
  );
}; 