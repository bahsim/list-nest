import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import type { AISuggestion } from '@/entities/list/types';
import { useTranslation } from 'react-i18next';

interface AISuggestionsFieldProps {
  aiSuggestions: AISuggestion[];
  onSelect: (s: AISuggestion) => void;
}

const AISuggestionsField: React.FC<AISuggestionsFieldProps> = ({ aiSuggestions, onSelect }) => {
  const { t } = useTranslation();
  return aiSuggestions.length > 0 ? (
    <Box>
      <Box sx={{ fontWeight: 'bold', mb: 1 }}>{t('fields.aiSuggestions')}</Box>
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
};

export default AISuggestionsField; 