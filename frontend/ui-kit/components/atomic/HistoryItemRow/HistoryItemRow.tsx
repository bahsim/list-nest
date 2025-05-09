import * as React from 'react';
import type { HistoryItem, User } from '../../types';
import styles from './HistoryItemRow.module.scss';
import StarIcon from '@mui/icons-material/Star';
import RestoreIcon from '@mui/icons-material/Restore';

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
  <div className={styles.row}>
    <span className={styles.name}>{item.name}</span>
    <span className={styles.quantity}>{item.quantity}</span>
    <span className={styles.estimatedPrice}>{item.estimatedPrice ? `$${item.estimatedPrice}` : ''}</span>
    <span className={styles.category}>{item.category}</span>
    {item.isFocused && <StarIcon className={styles.focused} />}
    {user && <img src={user.avatarUrl} alt={user.name} className={styles.avatar} />}
    <button onClick={() => onRestore(item.id)} className={styles.restoreButton} aria-label="Restore"><RestoreIcon /></button>
  </div>
); 