import * as React from 'react';

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
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, background: '#FBF3DB', borderRadius: 8, padding: '4px 8px' }}>
    <input
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{ flex: 1, border: 'none', background: 'transparent', fontSize: 16 }}
    />
    {onVoice && (
      <button type="button" onClick={onVoice} style={{ background: listening ? '#F76C5E' : '#FBF3DB', color: '#2A2E35', border: 'none', borderRadius: '50%', width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16, cursor: 'pointer' }} aria-label="Voice search">
        <span role="img" aria-label="mic">🎤</span>
      </button>
    )}
  </div>
); 