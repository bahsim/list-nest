import React from 'react';
import { Button, useTheme } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useTranslation } from 'react-i18next';

interface CategoryEditorAddButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

export const CategoryEditorAddButton: React.FC<CategoryEditorAddButtonProps> = ({ onClick, disabled }) => {
  const theme = useTheme();
  const { t } = useTranslation();
  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<AddIcon />}
      onClick={onClick}
      sx={{ mt: 2, borderRadius: theme.shape.borderRadius / 4, minHeight: 48, fontWeight: 700 }}
      fullWidth
      aria-label={t('categoryEditor.addCategory')}
      disabled={disabled}
    >
      {t('categoryEditor.addCategory')}
    </Button>
  );
}; 