import React from 'react';
import { Box, IconButton, Tooltip } from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
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
}) => (
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
    <IconButton
      onClick={e => {
        e.stopPropagation();
        onToggleBought();
      }}
      color="secondary"
      size="medium"
      sx={{
        width: 40,
        height: 40,
        borderRadius: '50%',
        background: theme => theme.palette.secondary.main,
        '&:hover': {
          background: theme => theme.palette.secondary.main,
        },
      }}
    >
      <CheckIcon sx={{ color: '#fff' }} />
    </IconButton>
    {/* Add Note */}
    {(!item.notes || item.notes.trim() === '') &&
      !isAddingNote &&
      !item.isBought &&
      !item.isDeleted && (
        <Tooltip title="Add Note">
          <IconButton
            onClick={e => {
              e.stopPropagation();
              onAddNote();
            }}
            color="primary"
            size="medium"
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: theme => theme.palette.primary.main,
              '&:hover': {
                background: theme => theme.palette.primary.main,
              },
            }}
          >
            <NoteAddIcon sx={{ color: '#fff' }} />
          </IconButton>
        </Tooltip>
      )}
    {/* Edit */}
    {!item.isBought && !item.isDeleted && (
      <IconButton
        onClick={e => {
          e.stopPropagation();
          onEdit();
        }}
        color="info"
        size="medium"
        sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: theme => theme.palette.info.main,
          '&:hover': {
            background: theme => theme.palette.info.main,
          },
        }}
      >
        <EditIcon sx={{ color: '#fff' }} />
      </IconButton>
    )}
    {/* Delete */}
    <Tooltip title="Delete">
      <IconButton
        onClick={e => {
          e.stopPropagation();
          onDelete();
        }}
        color="error"
        size="medium"
        sx={{
          width: 40,
          height: 40,
          borderRadius: '50%',
          background: theme => theme.palette.error.main,
        }}
      >
        <DeleteIcon sx={{ color: '#fff' }} />
      </IconButton>
    </Tooltip>
  </Box>
);

export default ItemActionButtons; 