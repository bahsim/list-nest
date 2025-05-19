import { useMemo } from 'react';
import { normalizeDate, isSameDay } from '@/shared/utils/date';
import type { DateRange } from '@/shared/types/date-range';
import type { ListItem } from '@/entities/list/types';

export const useHistoryDateFilter = (items: ListItem[], selectedDateRange: DateRange<Date>) => {
  return useMemo(() => {
    return items.filter((item) => {
      const itemDate = item.boughtAt || item.deletedAt;

      if (!itemDate || !selectedDateRange[0] || !selectedDateRange[1]) {
        return false;
      }

      const from = normalizeDate(selectedDateRange[0]);
      const to = normalizeDate(selectedDateRange[1]);
      const itemDay = normalizeDate(itemDate);

      if (isSameDay(from, to)) {
        return isSameDay(itemDay, from);
      }

      return itemDay >= from && itemDay <= to;
    });
  }, [items, selectedDateRange]);
};
