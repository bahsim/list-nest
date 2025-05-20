import React from 'react';
import { Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import type { ListItem } from '@/entities/list/types';
import { ActionIconButton } from '@ui-kit/components/atomic/action-icon-button';
import { isBought, isDeleted } from '@/shared/utils/list-utils';

/**
 * ItemActionButtons renders action buttons for a shopping list item.
 * Uses context for main actions.
 * @param item - The shopping list item.
 */
interface ItemActionButtonsProps {
  item: ListItem;
}

export const ItemActionButtons: React.FC<ItemActionButtonsProps> = ({ item }) => {
  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    // handleEditItem(item);
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
        onClick={handleEditClick}
        color="info"
        icon={<EditIcon sx={{ color: (theme) => theme.palette.common.white }} />}
        show={!isBought(item) && !isDeleted(item)}
      />
    </Box>
  );
};
