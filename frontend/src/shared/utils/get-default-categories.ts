import { CATEGORIES_WITH_COLORS } from '../constants/categories';
import type { Category } from '../types/category';

/**
 * Gets default categories for language.
 * @param language - language code
 * @returns default categories
 */
export const getDefaultCategories = (language: string): Category[] => {
  return CATEGORIES_WITH_COLORS[language] || [];
}; 