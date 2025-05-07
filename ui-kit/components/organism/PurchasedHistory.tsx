import * as React from 'react';
import type { HistoryItem } from './types';

/**
 * PurchasedHistory displays a list of purchased items with restore action.
 * @param items - Array of purchased items.
 * @param onRestore - Handler for restore action.
 */
export interface PurchasedHistoryProps {
  items: HistoryItem[];
  onRestore: (itemId: string) => void;
}

export const PurchasedHistory: React.FC<PurchasedHistoryProps> = ({ items, onRestore }) => (
  <section style={{ background: '#FBF3DB', borderRadius: 12, boxShadow: 'var(--shadow-card, 0 2px 8px rgba(42,46,53,0.08))', padding: 16, margin: '16px 0' }}>
    <h3>Purchased Items</h3>
    <ul style={{ margin: 0, paddingLeft: 16 }}>
      {items.map(item => (
        <li key={item.id} style={{ opacity: 0.5, display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
          <span style={{ fontWeight: 700 }}>{item.name}</span>
          <span style={{ color: '#927A7D', fontSize: 14 }}>{item.quantity}</span>
          <span style={{ color: '#F76C5E', fontSize: 14 }}>{item.estimatedPrice ? `$${item.estimatedPrice}` : ''}</span>
          <span style={{ background: '#99A49A', color: '#fff', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>{item.category}</span>
          <button onClick={() => onRestore(item.id)} style={{ background: 'none', border: 'none', color: '#4A90E2', cursor: 'pointer' }} aria-label="Restore">⟲</button>
        </li>
      ))}
    </ul>
  </section>
); 