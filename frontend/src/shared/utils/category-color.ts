import { CATEGORY_COLORS } from '../constants/category-colors';
import { Category } from '../types/category';

export const getCategoryColorByName = (
  categoryWithColors: Category[],
  categoryName: string,
): string => {
  const found = categoryWithColors.find((cat) => cat.name === categoryName);

  return found ? CATEGORY_COLORS[found.color] : CATEGORY_COLORS.SAGE;
};
