import React from 'react';
import { Box, IconButton } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import RestoreIcon from '@mui/icons-material/Restore';
import type { ShoppingListItem } from '@ui-kit/components/types';

interface ItemActionButtonsProps {
  item: ShoppingListItem;
  isAddingNote: boolean;
  onEdit: () => void;
  onDelete: () => void;
  onToggleBought: () => void;
  onAddNote: () => void;
}

const ItemActionButtons: React.FC<ItemActionButtonsProps> = ({
  item,
  isAddingNote,
  onEdit,
  onDelete,
  onToggleBought,
  onAddNote,
}) => {
  const handleToggleBought = (e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleBought();
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    onEdit();
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  const handleAddNote = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddNote();
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
          onClick={handleToggleBought}
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
            onClick={handleAddNote}
            color="primary"
            size="medium"
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: (theme) => theme.palette.primary.light,
              '&:hover': {
                background: (theme) => theme.palette.primary.light,
              },
            }}
          >
            <NoteAddIcon sx={{ color: '#fff' }} />
          </IconButton>
        )}
      {/* Edit */}
      {!item.isBought && !item.isDeleted && (
        <IconButton
          onClick={handleEdit}
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
          onClick={handleDelete}
          color="error"
          size="medium"
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: (theme) => theme.palette.error.light,
          }}
        >
          {item.isDeleted ? <RestoreIcon sx={{ color: '#fff' }} /> : <DeleteIcon sx={{ color: '#fff' }} />}
        </IconButton>
      )}
    </Box>
  );
};

export default ItemActionButtons;
