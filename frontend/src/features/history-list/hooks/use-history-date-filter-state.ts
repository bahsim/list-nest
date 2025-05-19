import { useState, useCallback } from 'react';
import type { DateRange } from '@/shared/types/date-range';
import type { ListItem } from '@/entities/list/types';
import { useHistoryDateFilter } from './use-history-date-filter';
import { DatePresetLabel } from '@/shared/constants/date-presets';
import { getDefaultRange, getRangeLabel } from '@/shared/utils/date';

export const useHistoryDateFilterState = (
  items: ListItem[],
) => {
  const [dateModalOpen, setDateModalOpen] = useState(false);
  const [selectedDateRange, setSelectedDateRange] = useState<DateRange<Date>>(getDefaultRange());
  const [selectedDatePreset, setSelectedDatePreset] = useState<DatePresetLabel | string>(
    DatePresetLabel.Week,
  );

  const handleDateRangeChange = useCallback(
    (range: DateRange<Date>, preset: DatePresetLabel | string | null) => {
      setSelectedDateRange(range);
      setSelectedDatePreset(preset || 'Custom');
    },
    [],
  );

  const filteredItemsByDate = useHistoryDateFilter(items, selectedDateRange);

  return {
    dateModalOpen,
    setDateModalOpen,
    selectedDateRange,
    selectedDatePreset,
    handleDateRangeChange,
    getRangeLabel: () => getRangeLabel(selectedDatePreset, selectedDateRange),
    filteredItemsByDate,
  };
};
