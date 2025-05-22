import { Category } from '../types/category';

export const CATEGORIES: string[] = ['Produce', 'Bakery', 'Dairy', 'Meat', 'Snacks', 'Household'];
// «Овощи и фрукты», «Выпечка», «Молочные продукты», «Мясо», «Закуски», «Бытовые товары»

export const CATEGORIES_WITH_COLORS: Record<string, Category[]> = {
  en: [
    { name: 'Produce', color: 'SAGE' },
    { name: 'Bakery', color: 'MAUVE' },
    { name: 'Dairy', color: 'CREAM' },
    { name: 'Meat', color: 'CORAL' },
    { name: 'Snacks', color: 'SKY' },
    { name: 'Household', color: 'YELLOW' },
  ],
  ru: [
    { name: 'Овощи и фрукты', color: 'SAGE' },
    { name: 'Выпечка', color: 'MAUVE' },
    { name: 'Молочные продукты', color: 'CREAM' },
    { name: 'Мясо', color: 'CORAL' },
    { name: 'Закуски', color: 'SKY' },
    { name: 'Бытовые товары', color: 'YELLOW' },
  ],
};
