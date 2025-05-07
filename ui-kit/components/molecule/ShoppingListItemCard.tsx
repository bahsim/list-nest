import * as React from 'react';
import type { ShoppingListItem } from '../types';

/**
 * ShoppingListItemCard displays a single shopping list item with actions.
 * @param item - The shopping list item.
 * @param onEdit - Edit handler.
 * @param onDelete - Delete handler.
 * @param onToggleBought - Mark as bought handler.
 * @param onToggleFocus - Toggle focus handler.
 */
export interface ShoppingListItemCardProps {
  item: ShoppingListItem;
  onEdit: () => void;
  onDelete: () => void;
  onToggleBought: () => void;
  onToggleFocus: () => void;
}

export const ShoppingListItemCard: React.FC<ShoppingListItemCardProps> = ({ item, onEdit, onDelete, onToggleBought, onToggleFocus }) => (
  <div style={{ display: 'flex', alignItems: 'center', background: 'var(--color-bg, #FEF4DB)', borderRadius: 8, boxShadow: 'var(--shadow-card, 0 2px 8px rgba(42,46,53,0.08))', padding: 12, gap: 12 }}>
    <input type="checkbox" checked={item.isBought} onChange={onToggleBought} aria-label="Mark as bought" />
    <span style={{ fontWeight: item.isFocused ? 700 : 400, color: item.isBought ? '#99A49A' : '#2A2E35', textDecoration: item.isBought ? 'line-through' : 'none' }}>{item.name}</span>
    <span style={{ marginLeft: 8, color: '#927A7D', fontSize: 14 }}>{item.quantity}</span>
    <span style={{ marginLeft: 8, color: '#F76C5E', fontSize: 14 }}>{item.estimatedPrice ? `$${item.estimatedPrice}` : ''}</span>
    <span style={{ marginLeft: 8, background: '#99A49A', color: '#fff', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>{item.category}</span>
    <button aria-label="Focus" onClick={onToggleFocus} style={{ marginLeft: 8, background: 'none', border: 'none', color: item.isFocused ? '#F9C74F' : '#99A49A', cursor: 'pointer' }}>★</button>
    <button aria-label="Edit" onClick={onEdit} style={{ marginLeft: 8, background: 'none', border: 'none', color: '#4A90E2', cursor: 'pointer' }}>✎</button>
    <button aria-label="Delete" onClick={onDelete} style={{ marginLeft: 8, background: 'none', border: 'none', color: '#F76C5E', cursor: 'pointer' }}>🗑️</button>
  </div>
); 