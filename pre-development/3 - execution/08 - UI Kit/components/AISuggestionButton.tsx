import * as React from 'react';

/**
 * AISuggestionButton triggers fetching or showing AI suggestions.
 * @param onClick - Handler for button click.
 */
export interface AISuggestionButtonProps {
  onClick: () => void;
}

export const AISuggestionButton: React.FC<AISuggestionButtonProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    style={{
      background: '#D1E7DD',
      color: '#2A2E35',
      border: 'none',
      borderRadius: 8,
      padding: '8px 16px',
      fontWeight: 700,
      fontSize: 16,
      cursor: 'pointer',
      margin: '8px 0',
    }}
    aria-label="Show AI Suggestions"
  >
    AI Suggestions
  </button>
); 