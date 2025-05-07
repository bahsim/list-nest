import * as React from 'react';
import type { AISuggestion } from '../types';

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
  <div style={{ background: '#FBF3DB', borderRadius: 8, boxShadow: '0 2px 8px rgba(42,46,53,0.08)', padding: 12, margin: 4, display: 'flex', alignItems: 'center', gap: 8 }}>
    <span style={{ fontWeight: 700 }}>{suggestion.name}</span>
    <span style={{ color: '#927A7D', fontSize: 14 }}>{suggestion.quantity}</span>
    <span style={{ color: '#F76C5E', fontSize: 14 }}>{suggestion.estimatedPrice ? `$${suggestion.estimatedPrice}` : ''}</span>
    <span style={{ background: '#99A49A', color: '#fff', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>{suggestion.category}</span>
    <button onClick={() => onAdd(suggestion)} style={{ background: '#F76C5E', color: '#fff', border: 'none', borderRadius: 4, padding: '2px 8px', fontWeight: 700, marginLeft: 4 }}>Add</button>
  </div>
); 