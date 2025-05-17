/**
 * Group items by a date string extracted from each item.
 */
export function groupByDate<T>(
  items: T[],
  getDate: (item: T) => string | undefined
): { label: string; items: T[] }[] {
  const groups: Record<string, T[]> = items.reduce((acc, item) => {
    const date = getDate(item) || 'No Date';
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {} as Record<string, T[]>);

  return Object.entries(groups).map(([label, items]) => ({ label, items }));
} 