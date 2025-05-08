import * as React from 'react';
import type { AddEditItemInput, AISuggestion } from '../types';
import styles from './AddEditItemModal.module.scss';

/**
 * AddEditItemModal for adding or editing a shopping list item.
 * @param item - The item to edit (undefined for add).
 * @param onSave - Save handler.
 * @param onCancel - Cancel handler.
 * @param categories - List of categories.
 * @param units - List of units.
 * @param currencies - List of currencies.
 */
export interface AddEditItemModalProps {
  item?: AddEditItemInput;
  onSave: (input: AddEditItemInput) => void;
  onCancel: () => void;
  categories: string[];
  units: string[];
  currencies: string[];
  aiSuggestions?: AISuggestion[];
}

export const AddEditItemModal: React.FC<AddEditItemModalProps> = ({ item, onSave, onCancel, categories, units, currencies, aiSuggestions }) => {
  const [fields, setFields] = React.useState<AddEditItemInput>(item || {
    name: '',
    quantity: '',
    unit: units[0] || '',
    category: categories[0] || '',
    isFocused: false,
  });
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.name || !fields.quantity || !fields.unit || !fields.category) {
      setError('All fields are required');
      return;
    }
    setError(null);
    onSave(fields);
  };

  const handleAISuggestion = (suggestion: AISuggestion) => {
    setFields({ ...fields, ...suggestion });
  };

  return (
    <div className={styles.addEditItemModal__overlay}>
      <form onSubmit={handleSave} className={styles.addEditItemModal__form}>
        <div className={styles.addEditItemModal__header}>
          <h2 style={{ margin: 0 }}>{item ? 'Edit Item' : 'Add Item'}</h2>
          <button type="button" aria-label="Close" onClick={onCancel} className={styles.addEditItemModal__closeBtn}>×</button>
        </div>
        <input name="name" value={fields.name} onChange={handleChange} placeholder="Item name" />
        <input name="quantity" value={fields.quantity} onChange={handleChange} placeholder="Quantity" />
        <select name="unit" value={fields.unit} onChange={handleChange}>
          {units.map(u => <option key={u} value={u}>{u}</option>)}
        </select>
        <input name="estimatedPrice" value={fields.estimatedPrice || ''} onChange={handleChange} placeholder="Estimated Price" type="number" />
        <select name="currency" value={fields.currency || ''} onChange={handleChange}>
          <option value="">Currency</option>
          {currencies.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <select name="category" value={fields.category} onChange={handleChange}>
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
        <label className={styles.addEditItemModal__label}>
          <input type="checkbox" name="isFocused" checked={fields.isFocused} onChange={e => setFields({ ...fields, isFocused: e.target.checked })} /> Focus
        </label>
        {aiSuggestions && aiSuggestions.length > 0 && (
          <div className={styles.addEditItemModal__aiSuggestions}>
            <div className={styles.addEditItemModal__aiSuggestionsTitle}>AI Suggestions:</div>
            <div className={styles.addEditItemModal__aiSuggestionsList}>
              {aiSuggestions.map(s => (
                <button key={s.id} type="button" onClick={() => handleAISuggestion(s)} className={styles.addEditItemModal__aiSuggestionBtn}>{s.name}</button>
              ))}
            </div>
          </div>
        )}
        <div className={styles.addEditItemModal__actions}>
          <button type="submit" className={styles.addEditItemModal__saveBtn}>Save</button>
          <button type="button" onClick={onCancel} className={styles.addEditItemModal__cancelBtn}>Cancel</button>
        </div>
        {error && <span className={styles.addEditItemModal__error}>{error}</span>}
      </form>
    </div>
  );
}; 