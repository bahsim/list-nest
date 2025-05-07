import * as React from 'react';
import type { AddEditItemInput, AISuggestion } from './types';

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
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(42,46,53,0.16)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <form onSubmit={handleSave} style={{ background: '#FFF6E5', borderRadius: 16, boxShadow: '0 4px 24px rgba(42,46,53,0.16)', padding: 32, minWidth: 320, maxWidth: 400, display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ margin: 0 }}>{item ? 'Edit Item' : 'Add Item'}</h2>
          <button type="button" aria-label="Close" onClick={onCancel} style={{ background: 'none', border: 'none', fontSize: 20, cursor: 'pointer' }}>×</button>
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
        <label style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <input type="checkbox" name="isFocused" checked={fields.isFocused} onChange={e => setFields({ ...fields, isFocused: e.target.checked })} /> Focus
        </label>
        {aiSuggestions && aiSuggestions.length > 0 && (
          <div style={{ background: '#FBF3DB', borderRadius: 8, padding: 8, marginBottom: 8 }}>
            <div style={{ fontSize: 14, marginBottom: 4 }}>AI Suggestions:</div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {aiSuggestions.map(s => (
                <button key={s.id} type="button" onClick={() => handleAISuggestion(s)} style={{ background: '#F9C74F', border: 'none', borderRadius: 4, padding: '4px 8px', cursor: 'pointer', fontSize: 14 }}>{s.name}</button>
              ))}
            </div>
          </div>
        )}
        <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
          <button type="submit" style={{ background: 'var(--color-primary, #F76C5E)', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px', fontWeight: 700 }}>Save</button>
          <button type="button" onClick={onCancel} style={{ background: '#99A49A', color: '#fff', border: 'none', borderRadius: 4, padding: '8px 16px' }}>Cancel</button>
        </div>
        {error && <span style={{ color: '#F76C5E' }}>{error}</span>}
      </form>
    </div>
  );
}; 