import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { CategoryEditor } from '@/features/category-editor';
import { SettingsSection } from '@/widgets/settings-section';

export const SettingsPage: React.FC = () => {
  const [expanded, setExpanded] = useState<'categories' | 'currency' | 'language' | 'reset' | null>(
    'categories',
  );

  return (
    <Box sx={{ maxWidth: 480, mx: 'auto', py: 3, px: 2, width: '100%' }}>
      <SettingsSection
        title="Categories"
        expanded={expanded === 'categories'}
        onExpand={() => setExpanded(expanded === 'categories' ? null : 'categories')}
      >
        <CategoryEditor />
      </SettingsSection>
      <SettingsSection
        title="Currency"
        expanded={expanded === 'currency'}
        onExpand={() => setExpanded(expanded === 'currency' ? null : 'currency')}
      >
        {/* CurrencySelector placeholder */}
        <Typography variant="body2" color="text.secondary">
          Currency selector coming soon…
        </Typography>
      </SettingsSection>
      <SettingsSection
        title="Language"
        expanded={expanded === 'language'}
        onExpand={() => setExpanded(expanded === 'language' ? null : 'language')}
      >
        {/* LanguageSelector placeholder */}
        <Typography variant="body2" color="text.secondary">
          Language selector coming soon…
        </Typography>
      </SettingsSection>
      <SettingsSection
        title="Reset"
        expanded={expanded === 'reset'}
        onExpand={() => setExpanded(expanded === 'reset' ? null : 'reset')}
      >
        {/* ResetButton placeholder */}
        <Typography variant="body2" color="error">
          Reset functionality coming soon…
        </Typography>
      </SettingsSection>
    </Box>
  );
};
