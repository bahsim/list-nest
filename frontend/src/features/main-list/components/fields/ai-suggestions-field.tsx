import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import type { AISuggestion } from '@/entities/list/types';

interface AISuggestionsFieldProps {
  aiSuggestions: AISuggestion[];
  onSelect: (s: AISuggestion) => void;
}

const AISuggestionsField: React.FC<AISuggestionsFieldProps> = ({ aiSuggestions, onSelect }) =>
  aiSuggestions.length > 0 ? (
    <Box>
      <Box sx={{ fontWeight: 'bold', mb: 1 }}>AI Suggestions:</Box>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {aiSuggestions.map((s) => (
          <Button
            key={s.id}
            variant="outlined"
            size="small"
            onClick={() => onSelect(s)}
          >
            {s.name}
          </Button>
        ))}
      </Box>
    </Box>
  ) : null;

export default AISuggestionsField; 