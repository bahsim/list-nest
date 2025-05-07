import * as React from 'react';
import type { AddEditItemInput } from '../types';

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
    <form onSubmit={handleSubmit} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
      <input name="name" value={fields.name} onChange={handleChange} placeholder="Item name" style={{ flex: 2 }} />
      <input name="quantity" value={fields.quantity} onChange={handleChange} placeholder="Qty" style={{ width: 60 }} />
      <select name="unit" value={fields.unit} onChange={handleChange} style={{ width: 80 }}>
        {units.map(u => <option key={u} value={u}>{u}</option>)}
      </select>
      <select name="category" value={fields.category} onChange={handleChange} style={{ width: 100 }}>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
      </select>
      <button type="submit" style={{ background: 'var(--color-primary, #F76C5E)', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 700 }}>Add</button>
      {error && <span style={{ color: '#F76C5E', marginLeft: 8 }}>{error}</span>}
    </form>
  );
}; 