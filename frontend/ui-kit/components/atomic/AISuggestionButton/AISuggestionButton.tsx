import * as React from 'react';
import styles from './AISuggestionButton.module.scss';

/**
 * AISuggestionButton triggers fetching or showing AI suggestions.
 * @param onClick - Handler for button click.
 */
export interface AISuggestionButtonProps {
  onClick: () => void;
}

export const AISuggestionButton: React.FC<
  AISuggestionButtonProps
> = ({ onClick }) => (
  <button
    onClick={onClick}
    className={styles.button}
    aria-label="Show AI Suggestions"
  >
    AI Suggestions
  </button>
);
