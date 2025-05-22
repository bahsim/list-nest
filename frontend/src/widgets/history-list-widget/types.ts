import type { ListItem } from '@/entities/list/types';
import { Category } from '@/shared/types/category';

export interface HistoryListWidgetProps {
  items: ListItem[];
  currency: string;
  categories: Category[];
} 