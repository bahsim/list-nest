import type { DateRange } from '@/shared/types/date-range';

export enum DatePresetLabel {
  Week = 'Week',
  Month = 'Month',
  ThreeMonths = '3 Months',
  HalfYear = 'Half Year',
  Year = 'Year',
}

const now = new Date();

export const DATE_PRESETS = [
  {
    label: DatePresetLabel.Week,
    getRange: (): DateRange<Date> => {
      const to = new Date();
      const from = new Date();
      from.setDate(to.getDate() - 6);
      return [from, to];
    },
  },
  {
    label: DatePresetLabel.Month,
    getRange: (): DateRange<Date> => {
      const to = new Date();
      const from = new Date();
      from.setMonth(to.getMonth() - 1);
      return [from, to];
    },
  },
  {
    label: DatePresetLabel.ThreeMonths,
    getRange: (): DateRange<Date> => {
      const to = new Date();
      const from = new Date();
      from.setMonth(to.getMonth() - 3);
      return [from, to];
    },
  },
  {
    label: DatePresetLabel.HalfYear,
    getRange: (): DateRange<Date> => {
      const to = new Date();
      const from = new Date();
      from.setMonth(to.getMonth() - 6);
      return [from, to];
    },
  },
  {
    label: DatePresetLabel.Year,
    getRange: (): DateRange<Date> => {
      const to = new Date();
      const from = new Date();
      from.setFullYear(to.getFullYear() - 1);
      return [from, to];
    },
  },
] as const;

export const getDatePresetTranslationKey = (label: DatePresetLabel): string => {
  switch (label) {
    case DatePresetLabel.Week:
      return 'datePresets.week';
    case DatePresetLabel.Month:
      return 'datePresets.month';
    case DatePresetLabel.ThreeMonths:
      return 'datePresets.threeMonths';
    case DatePresetLabel.HalfYear:
      return 'datePresets.halfYear';
    case DatePresetLabel.Year:
      return 'datePresets.year';
    default:
      return label;
  }
}; 