import type { ListItem } from '../types';
import { getCurrencySymbol } from '@/shared/utils/local-storage';

/**
 * Returns a formatted cost info string for a ListItem.
 * @param item - The ListItem object.
 * @returns Cost info string or empty string if missing data.
 */
export const formatItemCost = (item: ListItem, currency: string): string => {
  if (!item.quantity || !item.estimatedPrice) {
    return '';
  }
  return `${item.quantity} ${item.unit} x ${getCurrencySymbol(currency)}${item.estimatedPrice} = ${getCurrencySymbol(currency)}${(
    Number(item.quantity) * Number(item.estimatedPrice)
  ).toFixed(2)}`;
};
