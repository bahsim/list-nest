import * as React from 'react';
import styles from './VoiceInput.module.scss';
import MicIcon from '@mui/icons-material/Mic';

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
  <div className={styles.container}>
    <input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder} className={styles.input} />
    <button
      type="button"
      onClick={onVoice}
      className={
        listening
          ? `${styles.voiceButton} ${styles['voiceButton--listening']}`
          : styles.voiceButton
      }
      aria-label="Voice input"
    >
      <MicIcon />
    </button>
  </div>
); 