import * as React from 'react';
import type { HistoryItem } from 'src/entities/history-list/types';
import styles from './PurchasedHistory.module.scss';

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
  <section className={styles.purchasedHistory}>
    <h3>Purchased Items</h3>
    <ul className={styles.purchasedHistory__list}>
      {items.map(item => (
        <li key={item.id} className={styles.purchasedHistory__item}>
          <span className={styles.purchasedHistory__itemName}>{item.name}</span>
          <span className={styles.purchasedHistory__itemQuantity}>{item.quantity}</span>
          <span className={styles.purchasedHistory__itemPrice}>{item.estimatedPrice ? `$${item.estimatedPrice}` : ''}</span>
          <span className={styles.purchasedHistory__itemCategory}>{item.category}</span>
          <button onClick={() => onRestore(item.id)} className={styles.purchasedHistory__restoreBtn} aria-label="Restore">⟲</button>
        </li>
      ))}
    </ul>
  </section>
); 