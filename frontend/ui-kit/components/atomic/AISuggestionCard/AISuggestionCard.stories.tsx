import React from 'react';
import { AISuggestionCard } from './AISuggestionCard';
import type { AISuggestion } from 'src/entities/list/types';

export default {
  title: 'atomic/AISuggestionCard',
  component: AISuggestionCard,
};

const mockSuggestion: AISuggestion = {
  id: 'ai-1',
  name: 'Eggs',
  quantity: 12,
  estimatedPrice: 2.5,
  category: 'Dairy',
};

export const Basic = () => (
  <AISuggestionCard suggestion={mockSuggestion} onAdd={() => {}} />
); 