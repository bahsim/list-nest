export const normalizeDate = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());

export const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

export const getDefaultRange = (): [Date, Date] => {
  const to = new Date();
  const from = new Date();
  from.setDate(to.getDate() - 6);
  return [from, to];
};

export const getRangeLabel = (
  selectedDatePreset: string | undefined,
  selectedDateRange: [Date | null, Date | null],
): string => {
  if (selectedDatePreset && selectedDatePreset !== 'Custom') {
    return selectedDatePreset;
  }
  const [from, to] = selectedDateRange;
  if (from && to) {
    return `${from.toLocaleDateString()} - ${to.toLocaleDateString()}`;
  }
  return 'Select range';
};
