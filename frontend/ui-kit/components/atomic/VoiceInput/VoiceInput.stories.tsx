import React from 'react';
import { VoiceInput } from './VoiceInput';

export default {
  title: 'atomic/VoiceInput',
  component: VoiceInput,
};

export const Basic = () => (
  <VoiceInput value="" onChange={() => {}} onVoice={() => {}} listening={false} placeholder="Say something..." />
); 