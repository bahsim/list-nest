import { useState, useEffect } from 'react';
import type { ShoppingListItem } from '@ui-kit/components/types';

/**
 * useNoteInput manages note input state and handlers for a shopping list item.
 * @param item - The shopping list item.
 * @param handleSaveNote - Function to save the note.
 */
export function useNoteInput(item: ShoppingListItem, handleSaveNote: (id: string, note: string) => void) {
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [noteInput, setNoteInput] = useState('');
  const openAddNote = () => {
    setIsAddingNote(true);
    setNoteInput('');
  };
  const openEditNote = () => {
    setIsAddingNote(true);
    setNoteInput(item.notes || '');
  };
  const saveNote = () => {
    handleSaveNote(item.id, noteInput.trim());
    setIsAddingNote(false);
  };
  const cancelNote = () => {
    setIsAddingNote(false);
    setNoteInput('');
  };
  useEffect(() => {
    if (!isAddingNote && noteInput.trim() !== '') {
      handleSaveNote(item.id, noteInput.trim());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAddingNote]);
  return { isAddingNote, noteInput, setNoteInput, openAddNote, openEditNote, saveNote, cancelNote };
} 