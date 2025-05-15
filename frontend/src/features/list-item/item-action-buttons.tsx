import React from 'react';
import { Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RestoreIcon from '@mui/icons-material/Restore';
import type { MainListItem } from '../../entities/list/types';
import { useMainListContext } from '../../entities/list/main-list-context';
import { ActionIconButton } from '@ui-kit/components/atomic/action-icon-button';

/**
 * ItemActionButtons renders action buttons for a shopping list item.
 * Uses context for main actions.
 * @param item - The shopping list item.
 */
interface ItemActionButtonsProps {
  item: MainListItem;
}

export const ItemActionButtons: React.FC<ItemActionButtonsProps> = ({ item }) => {
  const { handleEditItem, handleDeleteItem, handleToggleBought, handleRestoreItem } =
    useMainListContext();

  const handleToggleBoughtClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.isBought) {
      handleRestoreItem(item);
    } else {
      handleToggleBought(item);
    }
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    handleEditItem(item);
  };

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.isDeleted) {
      handleRestoreItem(item);
    } else {
      handleDeleteItem(item);
    }
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
      <ActionIconButton
        onClick={handleToggleBoughtClick}
        color="secondary"
        icon={item.isBought ? <RestoreIcon sx={{ color: '#fff' }} /> : <CheckCircleOutlineIcon sx={{ color: '#fff' }} />}
        show={!item.isDeleted}
      />
      <ActionIconButton
        onClick={handleEditClick}
        color="info"
        icon={<EditIcon sx={{ color: '#fff' }} />}
        show={!item.isBought && !item.isDeleted}
      />
      <ActionIconButton
        onClick={handleDeleteClick}
        color="error"
        icon={item.isDeleted ? <RestoreIcon sx={{ color: '#fff' }} /> : <DeleteIcon sx={{ color: '#fff' }} />}
        show={!item.isBought}
      />
    </Box>
  );
};
