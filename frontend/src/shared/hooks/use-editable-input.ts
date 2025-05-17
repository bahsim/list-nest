import { useState, useEffect } from 'react';

/**
 * useEditableInput manages editable input state and handlers for a string value.
 * @param id - Identifier for the value being edited.
 * @param initialValue - The initial value to edit.
 * @param handleSave - Function to save the value.
 */
export function useEditableInput(
  id: string,
  initialValue: string,
  handleSave: (id: string, value: string) => void,
) {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const openEdit = () => {
    setIsEditing(true);
    setInputValue(initialValue || '');
  };

  const save = () => {
    handleSave(id, inputValue.trim());
    setIsEditing(false);
  };

  const cancel = () => {
    setIsEditing(false);
    setInputValue('');
  };

  useEffect(() => {
    if (!isEditing && inputValue.trim() !== '') {
      handleSave(id, inputValue.trim());
    }
  }, [isEditing]);

  return {
    isEditing,
    inputValue,
    setInputValue,
    openEdit,
    save,
    cancel,
  };
}
