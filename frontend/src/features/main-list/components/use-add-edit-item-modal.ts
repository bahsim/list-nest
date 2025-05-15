import * as React from 'react';
import type { AddEditItemInput, AISuggestion } from '@/entities/list/types';

export const useAddEditItemModal = (item: AddEditItemInput | null, units: string[]) => {
  const DEFAULT_ITEM_VALUES = React.useMemo(() => ({
    quantity: 1,
    unit: units[0] || 'pcs',
    estimatedPrice: undefined,
    notes: '',
    category: '',
    isCurrent: false,
    isBought: false,
    isDeleted: false,
  }), [units]);

  const [fields, setFields] = React.useState<AddEditItemInput>(
    item || {
      name: '',
      quantity: DEFAULT_ITEM_VALUES.quantity,
      unit: DEFAULT_ITEM_VALUES.unit,
      category: DEFAULT_ITEM_VALUES.category,
      isCurrent: DEFAULT_ITEM_VALUES.isCurrent,
      isBought: DEFAULT_ITEM_VALUES.isBought,
      isDeleted: DEFAULT_ITEM_VALUES.isDeleted,
      notes: DEFAULT_ITEM_VALUES.notes,
      estimatedPrice: DEFAULT_ITEM_VALUES.estimatedPrice,
    },
  );
  const [error, setError] = React.useState<string | null>(null);

  const [openFields, setOpenFields] = React.useState({
    name: !item?.name,
    quantity: false,
    estimatedPrice: false,
    notes: false,
    category: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleAISuggestion = (suggestion: AISuggestion) => {
    setFields({ ...fields, ...suggestion });
  };

  const handleSaveClick = (onSave: (input: AddEditItemInput) => void) => {
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
    openFields,
    setOpenFields,
    error,
    setError,
    handleChange,
    handleAISuggestion,
    handleSaveClick,
    DEFAULT_ITEM_VALUES,
  };
}; 