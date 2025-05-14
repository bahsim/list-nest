import React from 'react';
import { Box, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RestoreIcon from '@mui/icons-material/Restore';
import type { MainListItem } from '../types';
import { useMainListContext } from '../main-list-context';

/**
 * ItemActionButtons renders action buttons for a shopping list item.
 * Uses context for main actions.
 * @param item - The shopping list item.
 */
interface ItemActionButtonsProps {
  item: MainListItem;
}

const ItemActionButtons: React.FC<ItemActionButtonsProps> = ({ item }) => {
  const { handleEditItem, handleDeleteItem, handleToggleBought } = useMainListContext();
  const handleToggleBoughtClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleToggleBought(item);
  };
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleEditItem(item);
  };
  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleDeleteItem(item);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 2,
        width: '100%',
      }}
    >
      {/* Complete */}
      {!item.isDeleted && (
        <IconButton
          onClick={handleToggleBoughtClick}
          color="secondary"
          size="medium"
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: (theme) => theme.palette.secondary.light,
            '&:hover': {
              background: (theme) => theme.palette.secondary.light,
            },
          }}
        >
          {item.isBought ? (
            <RestoreIcon sx={{ color: '#fff' }} />
          ) : (
            <CheckCircleOutlineIcon sx={{ color: '#fff' }} />
          )}
        </IconButton>
      )}
      {/* Edit */}
      {!item.isBought && !item.isDeleted && (
        <IconButton
          onClick={handleEditClick}
          color="info"
          size="medium"
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: (theme) => theme.palette.info.light,
            '&:hover': {
              background: (theme) => theme.palette.info.light,
            },
          }}
        >
          <EditIcon sx={{ color: '#fff' }} />
        </IconButton>
      )}
      {/* Delete */}
      {!item.isBought && (
        <IconButton
          onClick={handleDeleteClick}
          color="error"
          size="medium"
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: (theme) => theme.palette.error.light,
          }}
        >
          {item.isDeleted ? (
            <RestoreIcon sx={{ color: '#fff' }} />
          ) : (
            <DeleteIcon sx={{ color: '#fff' }} />
          )}
        </IconButton>
      )}
    </Box>
  );
};

export default ItemActionButtons; 