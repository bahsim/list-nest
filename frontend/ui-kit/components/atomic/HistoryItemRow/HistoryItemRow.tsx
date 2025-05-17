import * as React from 'react';
import type { ListItem } from '@/entities/list/types';
import type { User } from '@/entities/user/types';
import styles from './HistoryItemRow.module.scss';
import StarIcon from '@mui/icons-material/StarRounded';
import RestoreIcon from '@mui/icons-material/RestoreRounded';

/**
 * HistoryItemRow displays a single purchased item in history view.
 * @param item - The history item.
 * @param user - The user who checked off the item.
 * @param onRestore - Restore handler.
 */
export interface HistoryItemRowProps {
  item: ListItem;
  user?: User;
  onRestore: (itemId: string) => void;
}

export const HistoryItemRow: React.FC<HistoryItemRowProps> = ({ item, user, onRestore }) => (
  <div className={styles.row}>
    <span className={styles.name}>{item.name}</span>
    <span className={styles.quantity}>{item.quantity}</span>
    <span className={styles.estimatedPrice}>{item.estimatedPrice ? `$${item.estimatedPrice}` : ''}</span>
    <span className={styles.category}>{item.category}</span>
    {item.isCurrent && <StarIcon className={styles.focused} />}
    {user && <img src={user.avatarUrl} alt={user.name} className={styles.avatar} />}
    <button onClick={() => onRestore(item.id)} className={styles.restoreButton} aria-label="Restore"><RestoreIcon /></button>
  </div>
); 