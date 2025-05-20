import React from 'react';
import Fab from '@mui/material/Fab';
import type { FabProps } from '@mui/material/Fab';
import { useTheme } from '@mui/material/styles';

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
}) => {
  const theme = useTheme();
  return (
    <Fab
      color={color}
      aria-label={ariaLabel}
      sx={{
        position: 'fixed',
        right: 24,
        bottom: 56 + 24, // footer height + spacing
        zIndex: 10,
        bgcolor: theme.palette.primary.main,
        color: theme.palette.common.white,
        boxShadow: theme.shadows[1],
        '&:hover': {
          bgcolor: theme.palette.primary.dark,
        },
        ...sx,
      }}
      onClick={onClick}
    >
      {icon}
    </Fab>
  );
};
