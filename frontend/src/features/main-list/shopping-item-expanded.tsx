import * as React from 'react';
import { Box, Switch, Divider } from '@mui/material';
import type { ShoppingListItem } from '@ui-kit/components/types';
import { alpha } from '@mui/material/styles';
import { useState } from 'react';
import AddNoteInput from './add-note-input';
import NoteDisplay from './note-display';
import ItemActionButtons from './item-action-buttons';

export interface ShoppingItemExpandedProps {
  item: ShoppingListItem;
  onToggleCurrent: () => void;
  onToggleBought: () => void;
  onDelete: () => void;
  onEdit: () => void;
  onAddNote: () => void;
  onSaveNote: (note: string) => void;
  isExpanded: boolean;
}

function getCostInfo(item: ShoppingListItem): string {
  if (!item.quantity || !item.estimatedPrice) {
    return '';
  }

  return `${item.quantity} ${item.unit} x $${item.estimatedPrice} = $${(
    Number(item.quantity) * Number(item.estimatedPrice)
  ).toFixed(2)}`;
}

export const ShoppingItemExpanded: React.FC<ShoppingItemExpandedProps> = ({
  item,
  onToggleCurrent,
  onToggleBought,
  onDelete,
  onEdit,
  onAddNote,
  onSaveNote,
  isExpanded,
}) => {
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [noteInput, setNoteInput] = useState('');

  if (!isExpanded) {
    // automatically save note if it's not empty on collapse
    if (noteInput.trim() !== '') {
      onSaveNote(noteInput.trim());
    }

    return null;
  }

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
            slotProps={{ input: { 'aria-label': 'Current toggle' } }}
          />
        </Box>
        <Box
          sx={{
            color: 'text.primary',
            minWidth: 48,
            textAlign: 'right',
            ml: 1,
          }}
        >
          {getCostInfo(item)}
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
          autoFocus
        />
      ) : (
        <>
          {item.notes && (
            <>
              <NoteDisplay note={item.notes} onClick={handleAddNoteClick} />
              <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
            </>
          )}
        </>
      )}
      {/* Second row: all actions centered */}
      {!isAddingNote && (
        <ItemActionButtons
          item={item}
          isAddingNote={isAddingNote}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleBought={onToggleBought}
          onAddNote={handleAddNoteClick}
        />
      )}
    </Box>
  );
};
