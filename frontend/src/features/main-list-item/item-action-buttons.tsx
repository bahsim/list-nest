import React from 'react';
import { Box } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import RestoreIcon from '@mui/icons-material/Restore';
import type { ListItem } from '@/entities/list/types';
import { ActionIconButton } from '@ui-kit/components/atomic/action-icon-button';
import { isBought, isDeleted } from '@/shared/utils/list-utils';

/**
 * ItemActionButtons renders action buttons for a shopping list item.
 * Now props-driven, no context usage.
 * @param item - The shopping list item.
 * @param handleEditItem - handler for editing
 * @param handleDeleteItem - handler for deleting
 * @param handleToggleBought - handler for toggling bought
 * @param handleRestoreItem - handler for restoring
 */
interface ItemActionButtonsProps {
  item: ListItem;
  handleEditItem: (item: ListItem) => void;
  handleDeleteItem: (item: ListItem) => void;
  handleToggleBought: (item: ListItem) => void;
  handleRestoreItem: (item: ListItem) => void;
}

export const ItemActionButtons: React.FC<ItemActionButtonsProps> = ({
  item,
  handleEditItem,
  handleDeleteItem,
  handleToggleBought,
  handleRestoreItem,
}) => {
  const handleToggleBoughtClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isBought(item)) {
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
    if (isDeleted(item)) {
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
        icon={isBought(item) ? <RestoreIcon sx={{ color: '#fff' }} /> : <CheckCircleOutlineIcon sx={{ color: '#fff' }} />}
        show={!isDeleted(item)}
      />
      <ActionIconButton
        onClick={handleEditClick}
        color="info"
        icon={<EditIcon sx={{ color: '#fff' }} />}
        show={!isBought(item) && !isDeleted(item)}
      />
      <ActionIconButton
        onClick={handleDeleteClick}
        color="error"
        icon={isDeleted(item) ? <RestoreIcon sx={{ color: '#fff' }} /> : <DeleteIcon sx={{ color: '#fff' }} />}
        show={!isBought(item)}
      />
    </Box>
  );
};
