export interface Category {
  name: string;
  color: keyof typeof import('../constants/category-colors').CATEGORY_COLORS;
} 