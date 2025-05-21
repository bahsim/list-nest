import type { AddItemInput, ListItem, AISuggestion } from '@/entities/list/types';

export interface AddEditItemModalProps {
  item: AddItemInput | ListItem | null;
  onSave: (input: AddItemInput | ListItem) => void;
  onClose: () => void;
  categories: string[];
  aiSuggestions?: AISuggestion[];
  title: string;
  actionLabel: string;
  currency: string;
}

export interface ViewItemModalProps {
  item: ListItem | null;
  onClose: () => void;
}

export type OpenFieldKey = 'name' | 'quantity' | 'estimatedPrice' | 'notes' | 'category';
