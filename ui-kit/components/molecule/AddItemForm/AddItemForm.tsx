import * as React from 'react';
import type { AddEditItemInput } from '../types';
import styles from './AddItemForm.module.scss';

/**
 * AddItemForm for adding a new item to the shopping list.
 * @param onAdd - Add handler.
 * @param categories - List of categories.
 * @param units - List of units.
 */
export interface AddItemFormProps {
  onAdd: (input: AddEditItemInput) => void;
  categories: string[];
  units: string[];
}

export const AddItemForm: React.FC<AddItemFormProps> = ({ onAdd, categories, units }) => {
  const [fields, setFields] = React.useState<AddEditItemInput>({
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.name || !fields.quantity || !fields.unit || !fields.category) {
      setError('All fields are required');
      return;
    }
    setError(null);
    onAdd(fields);
    setFields({ ...fields, name: '', quantity: '' });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.addItemForm}>
      <input name="name" value={fields.name} onChange={handleChange} placeholder="Item name" className={styles.addItemForm__inputName} />
      <input name="quantity" value={fields.quantity} onChange={handleChange} placeholder="Qty" className={styles.addItemForm__inputQty} />
      <select name="unit" value={fields.unit} onChange={handleChange} className={styles.addItemForm__selectUnit}>
        {units.map(u => <option key={u} value={u}>{u}</option>)}
      </select>
      <select name="category" value={fields.category} onChange={handleChange} className={styles.addItemForm__selectCategory}>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <button type="submit" className={styles.addItemForm__addBtn}>Add</button>
      {error && <span className={styles.addItemForm__error}>{error}</span>}
    </form>
  );
}; 