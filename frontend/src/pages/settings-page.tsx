import React, { useState } from 'react';
import { Box } from '@mui/material';
import { CategoryEditor } from '@/features/category-editor';
import { SettingsSection } from '@/widgets/settings-section';
import { CurrencySelector } from '@/features/currency-selector';
import CategoryIcon from '@mui/icons-material/Category';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LanguageIcon from '@mui/icons-material/Language';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import { LanguageSelector } from '@/features/language-selector';
import { useItemDialog } from '@/shared/hooks/use-item-dialog';
import { SettingsResetSection } from '@/widgets/settings-reset-section';

// TODO:
// Add language selector
// Add reset button

type TabType = 'categories' | 'currency' | 'language' | 'reset';

export const SettingsPage: React.FC = () => {
  const [expanded, setExpanded] = useState<TabType | null>(null);
  const [currency, setCurrency] = useState('USD');
  const [language, setLanguage] = useState('en');

  return (
    <Box sx={{ maxWidth: 480, mx: 'auto', py: 3, px: 1, width: '100%' }}>
      <SettingsSection
        title="Categories"
        expanded={expanded === 'categories'}
        onExpand={() => setExpanded(expanded === 'categories' ? null : 'categories')}
        icon={<CategoryIcon sx={{ color: '#1976d2' }} />}
      >
        <CategoryEditor />
      </SettingsSection>
      <SettingsSection
        title="Currency"
        expanded={expanded === 'currency'}
        onExpand={() => setExpanded(expanded === 'currency' ? null : 'currency')}
        icon={<AttachMoneyIcon sx={{ color: '#388e3c' }} />}
      >
        <CurrencySelector value={currency} onChange={setCurrency} />
      </SettingsSection>
      <SettingsSection
        title="Language"
        expanded={expanded === 'language'}
        onExpand={() => setExpanded(expanded === 'language' ? null : 'language')}
        icon={<LanguageIcon sx={{ color: '#7b1fa2' }} />}
      >
        <LanguageSelector value={language} onChange={setLanguage} label="Language" />
      </SettingsSection>
      <SettingsSection
        title="Reset"
        expanded={expanded === 'reset'}
        onExpand={() => setExpanded(expanded === 'reset' ? null : 'reset')}
        icon={<RestartAltIcon sx={{ color: '#d32f2f' }} />}
      >
        <SettingsResetSection />
      </SettingsSection>
    </Box>
  );
};
