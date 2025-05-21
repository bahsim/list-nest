import { CURRENCIES } from '../constants/currencies';

/**
 * Utility for safe localStorage access with JSON support.
 * All methods are no-ops in non-browser environments.
 */
export const localStorageUtil = {
  set<T>(key: string, value: T): void {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
      // Optionally log error
    }
  },
  get<T>(key: string, fallback?: T): T | undefined {
    try {
      const item = window.localStorage.getItem(key);
      if (item === null) return fallback;
      return JSON.parse(item) as T;
    } catch (e) {
      return fallback;
    }
  },
  remove(key: string): void {
    try {
      window.localStorage.removeItem(key);
    } catch (e) {
      // Optionally log error
    }
  },
};

export const getCurrencySymbol = (currencyCode: string): string => {
  return CURRENCIES.find((c) => c.code === currencyCode)?.symbol ?? '';
};
