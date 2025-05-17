/**
 * Formats a Date as '15-dec-2025'
 * @param date JS Date object
 * @returns string in 'dd-mmm-yyyy' format, e.g. '15-dec-2025'
 */
export const formatDateShort = (date: Date): string => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = date.toLocaleString('en-US', { month: 'short' }).toLowerCase();
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}; 