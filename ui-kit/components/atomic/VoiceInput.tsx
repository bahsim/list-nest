import * as React from 'react';

/**
 * VoiceInput provides a text input with a microphone button for speech-to-text.
 * @param value - Current value.
 * @param onChange - Change handler.
 * @param onVoice - Handler for voice input (simulated here).
 * @param listening - Whether the mic is active.
 */
export interface VoiceInputProps {
  value: string;
  onChange: (value: string) => void;
  onVoice: () => void;
  listening?: boolean;
  placeholder?: string;
}

export const VoiceInput: React.FC<VoiceInputProps> = ({ value, onChange, onVoice, listening = false, placeholder }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} style={{ flex: 1 }} />
    <button type="button" onClick={onVoice} style={{ background: listening ? '#F76C5E' : '#FBF3DB', color: '#2A2E35', border: 'none', borderRadius: '50%', width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, cursor: 'pointer' }} aria-label="Voice input">
      <span role="img" aria-label="mic">🎤</span>
    </button>
  </div>
); 