import { useState, useCallback } from 'react';
import type { DateRange } from '@/shared/types/date-range';
import type { ListItem } from '@/entities/list/types';
import { useHistoryDateFilter } from './use-history-date-filter';
import { DatePresetLabel } from '@/shared/constants/date-presets';
import { getDefaultRange } from '@/shared/utils/date';

export const useHistoryDateFilterState = (items: ListItem[]) => {
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange<Date>>(getDefaultRange());
  const [selectedDatePreset, setSelectedDatePreset] = useState<DatePresetLabel | null>(
    DatePresetLabel.Week,
  );

  const handleDateRangeChange = useCallback(
    (range: DateRange<Date>, preset: DatePresetLabel | string | null) => {
      setSelectedDateRange(range);
      if (preset && Object.values(DatePresetLabel).includes(preset as DatePresetLabel)) {
        setSelectedDatePreset(preset as DatePresetLabel);
      } else {
        setSelectedDatePreset(null);
      }
    },
    [],
  );

  const filteredItemsByDate = useHistoryDateFilter(items, selectedDateRange);

  return {
    selectedDateRange,
    selectedDatePreset,
    handleDateRangeChange,
    filteredItemsByDate,
  };
};
