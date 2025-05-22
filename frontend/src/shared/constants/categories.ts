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
  fr: [
    { name: 'Fruits et légumes', color: 'SAGE' },
    { name: 'Boulangerie', color: 'MAUVE' },
    { name: 'Produits laitiers', color: 'CREAM' },
    { name: 'Viande', color: 'CORAL' },
    { name: 'Snacks', color: 'SKY' },
    { name: 'Produits ménagers', color: 'YELLOW' },
  ],
  es: [
    { name: 'Frutas y verduras', color: 'SAGE' },
    { name: 'Panadería', color: 'MAUVE' },
    { name: 'Lácteos', color: 'CREAM' },
    { name: 'Carne', color: 'CORAL' },
    { name: 'Aperitivos', color: 'SKY' },
    { name: 'Artículos para el hogar', color: 'YELLOW' },
  ],
  kz: [
    { name: 'Жемістер мен көкөністер', color: 'SAGE' },
    { name: 'Нан', color: 'MAUVE' },
    { name: 'Сүт өнімдері', color: 'CREAM' },
    { name: 'Ет', color: 'CORAL' },
    { name: 'Тәттілер', color: 'SKY' },
    { name: 'Үйге арналған', color: 'YELLOW' },
  ],
  tr: [
    { name: 'Meyve ve sebze', color: 'SAGE' },
    { name: 'Ekmek', color: 'MAUVE' },
    { name: 'Süt ürünleri', color: 'CREAM' },
    { name: 'Et', color: 'CORAL' },
    { name: 'Atıştırmalıklar', color: 'SKY' },
    { name: 'Ev için', color: 'YELLOW' },
  ],
};
