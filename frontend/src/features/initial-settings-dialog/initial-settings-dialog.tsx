import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CurrencySelector } from '@/features/currency-selector';
import { LanguageSelector } from '@/features/language-selector';
import { Box } from '@mui/material';

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
  const canClose = Boolean(currency) && Boolean(language);

  const handleClose = (_event: object, reason?: string) => {
    if (canClose) onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Set Your Preferences</DialogTitle>
      <DialogContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          Please select your preferred currency and language to continue.
        </Typography>
        <CurrencySelector value={currency} onChange={setCurrency} />
        <Box sx={{ mt: 2 }} />
        <LanguageSelector value={language} onChange={setLanguage} label="Language" />
        {(!currency || !language) && (
          <Typography color="error" variant="caption" sx={{ mt: 2, display: 'block' }}>
            Both fields are required.
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};
