import type { AddItemInput, ListItem, AISuggestion } from '@/entities/list/types';

export interface AddEditItemModalProps {
  item: AddItemInput | ListItem | null;
  onSave: (input: AddItemInput | ListItem) => void;
  onCancel: () => void;
  categories: string[];
  units: string[];
  aiSuggestions?: AISuggestion[];
  title: string;
  actionLabel: string;
}

export type OpenFieldKey = 'name' | 'quantity' | 'estimatedPrice' | 'notes' | 'category';
