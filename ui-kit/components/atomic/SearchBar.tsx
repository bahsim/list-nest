import * as React from 'react';
import styles from './SearchBar.module.scss';

/**
 * SearchBar provides a text input with optional voice input for searching.
 * @param value - Current value.
 * @param onChange - Change handler.
 * @param onVoice - Handler for voice input.
 * @param placeholder - Placeholder text.
 * @param listening - Whether the mic is active.
 */
export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onVoice?: () => void;
  placeholder?: string;
  listening?: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, onVoice, placeholder, listening }) => (
  <div className={styles.bar}>
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      className={styles.input}
    />
    {onVoice && (
      <button
        type="button"
        onClick={onVoice}
        className={
          listening
            ? `${styles.voiceButton} ${styles['voiceButton--listening']}`
            : styles.voiceButton
        }
        aria-label="Voice search"
      >
        <span role="img" aria-label="mic">🎤</span>
      </button>
    )}
  </div>
); 