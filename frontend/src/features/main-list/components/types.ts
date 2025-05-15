import type { AddEditItemInput, AISuggestion } from '../../../entities/list/types';

export interface AddEditItemModalProps {
  item: AddEditItemInput | null;
  onSave: (input: AddEditItemInput) => void;
  onCancel: () => void;
  categories: string[];
  units: string[];
  aiSuggestions?: AISuggestion[];
  title: string;
  actionLabel: string;
}

export type OpenFieldKey = 'name' | 'quantity' | 'estimatedPrice' | 'notes' | 'category';
