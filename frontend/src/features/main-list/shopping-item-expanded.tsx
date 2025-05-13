import * as React from 'react';
import { Box, IconButton, Tooltip, Switch, Divider, TextField, Button } from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import type { ShoppingListItem } from '@ui-kit/components/types';
import { alpha } from '@mui/material/styles';
import { useState } from 'react';
import AddNoteInput from './add-note-input';

export interface ShoppingItemExpandedProps {
  item: ShoppingListItem;
  onToggleCurrent: () => void;
  onToggleBought: () => void;
  onDelete: () => void;
  onEdit: () => void;
  onAddNote: () => void;
  onSaveNote: (note: string) => void;
}

export const ShoppingItemExpanded: React.FC<ShoppingItemExpandedProps> = ({
  item,
  onToggleCurrent,
  onToggleBought,
  onDelete,
  onEdit,
  onAddNote,
  onSaveNote,
}) => {
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [noteInput, setNoteInput] = useState('');

  const handleAddNoteClick = () => {
    setIsAddingNote(true);
    setNoteInput('');
    onAddNote();
  };

  const handleSaveNote = () => {
    onSaveNote(noteInput.trim());
    setIsAddingNote(false);
  };

  const handleCancelNote = () => {
    setIsAddingNote(false);
    setNoteInput('');
  };

  return (
    <Box
      sx={{
        width: '100%',
        px: 1,
        display: 'flex',
        flexDirection: 'column',
        // gap: 1,
      }}
    >
      <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3) }} />
      {/* First row: info */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
        }}
      >
        {/* Toggle + label as one clickable area */}
        <Box
          onClick={(e) => {
            e.stopPropagation();
            onToggleCurrent();
          }}
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            cursor: 'pointer',
            userSelect: 'none',
            px: 0.5,
            py: 0.5,
            borderRadius: 2,
            transition: 'background 0.2s',
            '&:hover': { background: 'rgba(25, 118, 210, 0.08)' },
          }}
        >
          <Switch
            checked={item.isCurrent}
            color="primary"
            size="medium"
            // sx={{ mr: 0.5 }}
            inputProps={{ 'aria-label': 'Current toggle' }}
          />
        </Box>
        <Box
          sx={{
            fontWeight: 700,
            fontSize: '1.1rem',
            color: 'text.primary',
            minWidth: 48,
            textAlign: 'right',
            ml: 1,
          }}
        >
          {`${item.quantity} x $${item.estimatedPrice} = $${(Number(item.quantity) * Number(item.estimatedPrice)).toFixed(2)}`}
        </Box>
      </Box>
      {/* Notes */}
      <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
      {isAddingNote ? (
        <AddNoteInput
          value={noteInput}
          onChange={setNoteInput}
          onSave={handleSaveNote}
          onCancel={handleCancelNote}
          disabled={!noteInput.trim()}
          autoFocus
        />
      ) : (
        <>
          {item.notes && (
            <>
              <Box sx={{ color: 'text.secondary', mb: 1 }}>{item.notes}</Box>
              <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
            </>
          )}
        </>
      )}
      {/* Second row: all actions centered */}
      {!isAddingNote && (
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
            onClick={(e) => {
              e.stopPropagation();
              onToggleBought();
            }}
            color="secondary"
            size="medium"
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: (theme) => theme.palette.secondary.main,
              '&:hover': {
                background: (theme) => theme.palette.secondary.main,
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
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddNoteClick();
                  }}
                  color="primary"
                  size="medium"
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: (theme) => theme.palette.primary.main,
                    '&:hover': {
                      background: (theme) => theme.palette.primary.main,
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
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              color="info"
              size="medium"
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: (theme) => theme.palette.info.main,
                '&:hover': {
                  background: (theme) => theme.palette.info.main,
                },
              }}
            >
              <EditIcon sx={{ color: '#fff' }} />
            </IconButton>
          )}
          {/* Delete */}
          <Tooltip title="Delete">
            <IconButton
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              color="error"
              size="medium"
              sx={{
                width: 40,
                height: 40,
                borderRadius: '50%',
                background: (theme) => theme.palette.error.main,
              }}
            >
              <DeleteIcon sx={{ color: '#fff' }} />
            </IconButton>
          </Tooltip>
        </Box>
      )}
    </Box>
  );
};
