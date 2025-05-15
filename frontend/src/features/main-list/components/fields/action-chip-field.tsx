import * as React from 'react';
import Button from '@mui/material/Button';

interface ActionChipFieldProps {
  label: string;
  onClick: () => void;
}

export const ActionChipField: React.FC<ActionChipFieldProps> = ({ label, onClick }) => (
  <Button
    variant="outlined"
    size="small"
    onClick={onClick}
    sx={{ mr: 1, mb: 1, textTransform: 'none' }}
    tabIndex={0}
  >
    {label}
  </Button>
);
