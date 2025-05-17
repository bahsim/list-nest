import React from 'react';
import Fab from '@mui/material/Fab';
import type { FabProps } from '@mui/material/Fab';

/**
 * Props for AddFab.
 */
export interface AddFabProps {
  onClick: () => void;
  icon: React.ReactNode;
  color?: FabProps['color'];
  ariaLabel?: string;
  sx?: FabProps['sx'];
}

/**
 * Generic floating action button for add actions.
 */
export const AddFab: React.FC<AddFabProps> = ({
  onClick,
  icon,
  color = 'primary',
  ariaLabel = 'Add',
  sx,
}) => (
  <Fab
    color={color}
    aria-label={ariaLabel}
    sx={{
      position: 'fixed',
      right: 24,
      bottom: 56 + 24, // footer height + spacing
      zIndex: 10,
      bgcolor: 'var(--color-primary)',
      color: '#fff',
      boxShadow: '0 2px 8px rgba(42,46,53,0.08)',
      '&:hover': {
        bgcolor: 'var(--color-primary-alt)',
      },
      ...sx,
    }}
    onClick={onClick}
  >
    {icon}
  </Fab>
); 