import * as React from 'react';
import type { HistoryItem, User } from '../types';

/**
 * HistoryItemRow displays a single purchased item in history view.
 * @param item - The history item.
 * @param user - The user who checked off the item.
 * @param onRestore - Restore handler.
 */
export interface HistoryItemRowProps {
  item: HistoryItem;
  user?: User;
  onRestore: (itemId: string) => void;
}

export const HistoryItemRow: React.FC<HistoryItemRowProps> = ({ item, user, onRestore }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
    <span style={{ fontWeight: 700 }}>{item.name}</span>
    <span style={{ color: '#927A7D', fontSize: 14 }}>{item.quantity}</span>
    <span style={{ color: '#F76C5E', fontSize: 14 }}>{item.estimatedPrice ? `$${item.estimatedPrice}` : ''}</span>
    <span style={{ background: '#99A49A', color: '#fff', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>{item.category}</span>
    {item.isFocused && <span style={{ color: '#F9C74F', fontSize: 16 }}>★</span>}
    {user && <img src={user.avatarUrl} alt={user.name} style={{ height: 24, width: 24, borderRadius: '50%', objectFit: 'cover' }} />}
    <button onClick={() => onRestore(item.id)} style={{ background: 'none', border: 'none', color: '#4A90E2', cursor: 'pointer' }} aria-label="Restore">⟲</button>
  </div>
); 