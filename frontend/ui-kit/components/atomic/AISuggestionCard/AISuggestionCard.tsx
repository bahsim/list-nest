import * as React from 'react';
import type { AISuggestion } from '../../types';
import styles from './AISuggestionCard.module.scss';

/**
 * AISuggestionCard displays a single AI suggestion with add action.
 * @param suggestion - The AI suggestion.
 * @param onAdd - Handler for add action.
 */
export interface AISuggestionCardProps {
  suggestion: AISuggestion;
  onAdd: (suggestion: AISuggestion) => void;
}

export const AISuggestionCard: React.FC<AISuggestionCardProps> = ({ suggestion, onAdd }) => (
  <div className={styles.card}>
    <span className={styles.name}>{suggestion.name}</span>
    <span className={styles.quantity}>{suggestion.quantity}</span>
    <span className={styles.estimatedPrice}>{suggestion.estimatedPrice ? `$${suggestion.estimatedPrice}` : ''}</span>
    <span className={styles.category}>{suggestion.category}</span>
    <button onClick={() => onAdd(suggestion)} className={styles.addButton}>Add</button>
  </div>
); 