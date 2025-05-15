import React from 'react';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import type { AddItemFabProps } from '../../shared/types';

/**
 * Floating action button for adding an item.
 */
export const AddItemFab: React.FC<AddItemFabProps> = ({ onClick }) => (
  <Fab
    color="primary"
    aria-label="Add Item"
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
    }}
    onClick={onClick}
  >
    <AddIcon />
  </Fab>
);

export default AddItemFab; 