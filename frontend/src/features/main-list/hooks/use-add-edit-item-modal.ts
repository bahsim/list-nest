import * as React from 'react';
import type { AddItemInput, ListItem, AISuggestion } from '@/entities/list/types';
import {
  UNIT_DEFAULT,
  ESTIMATED_PRICE_DEFAULT,
  NOTES_DEFAULT,
  CATEGORY_DEFAULT,
  CURRENCY,
} from '@/entities/list/constants';

export const useAddEditItemModal = (item: AddItemInput | ListItem | null, units: string[]) => {
  const DEFAULT_ITEM_VALUES: AddItemInput = {
    name: '',
    quantity: 1,
    unit: units[0] || UNIT_DEFAULT,
    estimatedPrice: ESTIMATED_PRICE_DEFAULT,
    notes: NOTES_DEFAULT,
    category: CATEGORY_DEFAULT,
    currency: CURRENCY,
  };

  const [fields, setFields] = React.useState<AddItemInput>(
    (item as AddItemInput) || DEFAULT_ITEM_VALUES,
  );
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleAISuggestion = (suggestion: AISuggestion) => {
    setFields({ ...fields, ...suggestion });
  };

  const handleSaveClick = (onSave: (input: AddItemInput | ListItem) => void) => {
    if (!fields.name) {
      setError('Name is required');
      return;
    }
    setError(null);
    onSave(fields);
  };

  return {
    fields,
    setFields,
    error,
    setError,
    handleChange,
    handleAISuggestion,
    handleSaveClick,
    DEFAULT_ITEM_VALUES,
  };
};
