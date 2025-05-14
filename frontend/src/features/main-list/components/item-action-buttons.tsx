import React from 'react';
import { Box, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import RestoreIcon from '@mui/icons-material/Restore';
import type { MainListItem } from '@ui-kit/components/types';
import { useMainListContext } from '../main-list-context';

/**
 * ItemActionButtons renders action buttons for a shopping list item.
 * Uses context for main actions, onAddNote is passed as a prop.
 * @param item - The shopping list item.
 * @param isAddingNote - Whether a note is being added.
 * @param onAddNote - Add note handler.
 */
interface ItemActionButtonsProps {
  item: MainListItem;
  isAddingNote: boolean;
  onAddNoteOpen: () => void;
}

const ItemActionButtons: React.FC<ItemActionButtonsProps> = ({ item, isAddingNote, onAddNoteOpen }) => {
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
  const handleAddNoteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddNoteOpen();
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
      {/* Add Note */}
      {(!item.notes || item.notes.trim() === '') &&
        !isAddingNote &&
        !item.isBought &&
        !item.isDeleted && (
          <IconButton
            onClick={handleAddNoteClick}
            color="primary"
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
            <NoteAddIcon sx={{ color: '#fff' }} />
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