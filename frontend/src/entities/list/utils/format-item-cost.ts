import type { ListItem } from '../types';

/**
 * Returns a formatted cost info string for a ListItem.
 * @param item - The ListItem object.
 * @returns Cost info string or empty string if missing data.
 */
export const formatItemCost = (item: ListItem): string => {
  if (!item.quantity || !item.estimatedPrice) {
    return '';
  }
  return `${item.quantity} ${item.unit} x $${item.estimatedPrice} = $${(
    Number(item.quantity) * Number(item.estimatedPrice)
  ).toFixed(2)}`;
}; 