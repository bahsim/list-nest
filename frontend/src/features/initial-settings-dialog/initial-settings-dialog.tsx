import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import Typography from '@mui/material/Typography';
import { CurrencySelector } from '@/features/currency-selector';
import { LanguageSelector } from '@/features/language-selector';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface Props {
  open: boolean;
  currency: string;
  setCurrency: (v: string) => void;
  language: string;
  setLanguage: (v: string) => void;
  onClose: () => void;
}

export const InitialSettingsDialog: React.FC<Props> = ({
  open,
  currency,
  setCurrency,
  language,
  setLanguage,
  onClose,
}) => {
  const { t } = useTranslation();
  const canClose = Boolean(currency) && Boolean(language);

  const handleClose = (_event: object, reason?: string) => {
    if (canClose) onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>{t('settingsDialog.title')}</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {t('settingsDialog.description')}
        </Typography>
        <CurrencySelector value={currency} onChange={setCurrency} />
        <Box sx={{ mt: 2 }} />
        <LanguageSelector value={language} onChange={setLanguage} label={t('settingsDialog.languageLabel')} />
        {(!currency || !language) && (
          <Typography color="error" variant="caption" sx={{ mt: 2, display: 'block' }}>
            {t('settingsDialog.requiredFields')}
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};
