import type { ListItem } from '@/entities/list/types';
import { Category } from '@/shared/types/category';
import type { DateRange } from '@/shared/types/date-range';

export interface HistoryListWidgetProps {
  items: ListItem[];
  currency: string;
  categories: Category[];
} 