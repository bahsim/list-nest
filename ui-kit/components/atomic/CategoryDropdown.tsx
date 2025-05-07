import * as React from 'react';

/**
 * CategoryDropdown for selecting or adding a new category.
 * @param categories - List of categories.
 * @param value - Current value.
 * @param onChange - Change handler.
 * @param onAddNew - Handler for adding a new category.
 */
export interface CategoryDropdownProps {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
  onAddNew?: (newCategory: string) => void;
}

export const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ categories, value, onChange, onAddNew }) => {
  const [adding, setAdding] = React.useState(false);
  const [newCat, setNewCat] = React.useState('');

  const handleAdd = () => {
    if (newCat && onAddNew) {
      onAddNew(newCat);
      setNewCat('');
      setAdding(false);
    }
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <select value={value} onChange={e => onChange(e.target.value)}>
        {categories.map(c => <option key={c} value={c}>{c}</option>)}
        {onAddNew && <option value="__add_new__">Add new...</option>}
      </select>
      {onAddNew && value === '__add_new__' && (
        <>
          <input value={newCat} onChange={e => setNewCat(e.target.value)} placeholder="New category" />
          <button onClick={handleAdd} style={{ background: '#4A90E2', color: '#fff', border: 'none', borderRadius: 4, padding: '4px 8px', fontWeight: 700 }}>Add</button>
        </>
      )}
    </div>
  );
}; 