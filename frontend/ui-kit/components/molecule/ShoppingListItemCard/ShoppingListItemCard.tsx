import * as React from 'react';
import type { ShoppingListItem } from '../../types';
import styles from './ShoppingListItemCard.module.scss';

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
  <div className={styles.shoppingListItemCard}>
    <input type="checkbox" checked={item.isBought} onChange={onToggleBought} aria-label="Mark as bought" />
    <span
      className={[
        styles.shoppingListItemCard__name,
        item.isFocused ? styles["shoppingListItemCard__name--focused"] : '',
        item.isBought ? styles["shoppingListItemCard__name--bought"] : '',
      ].filter(Boolean).join(' ')}
    >
      {item.name}
    </span>
    <span className={styles.shoppingListItemCard__quantity}>{item.quantity}</span>
    <span className={styles.shoppingListItemCard__price}>{item.estimatedPrice ? `$${item.estimatedPrice}` : ''}</span>
    <span className={styles.shoppingListItemCard__category}>{item.category}</span>
    <button
      aria-label="Focus"
      onClick={onToggleFocus}
      className={
        item.isFocused
          ? `${styles.shoppingListItemCard__focusBtn} ${styles.shoppingListItemCard__focusBtnActive}`
          : styles.shoppingListItemCard__focusBtn
      }
    >
      ★
    </button>
    <button
      aria-label="Edit"
      onClick={onEdit}
      className={styles.shoppingListItemCard__editBtn}
    >
      ✎
    </button>
    <button
      aria-label="Delete"
      onClick={onDelete}
      className={styles.shoppingListItemCard__deleteBtn}
    >
      🗑️
    </button>
  </div>
); 