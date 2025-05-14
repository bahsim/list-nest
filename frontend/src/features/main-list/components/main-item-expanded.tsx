import * as React from 'react';
import { Box, Switch, Divider } from '@mui/material';
import type { MainListItem } from '../types';
import { alpha } from '@mui/material/styles';
import { useCallback } from 'react';
import AddNoteInput from './add-note-input';
import NoteDisplay from './note-display';
import ItemActionButtons from './item-action-buttons';
import { useMainListContext } from '../main-list-context';
import { useNoteInput } from '../hooks/use-note-input';
import { isItemExpanded } from '../../base-list/utility';

/**
 * MainItemExpanded displays expanded details and actions for a shopping list item.
 * Uses context for all actions and expansion state.
 * @param item - The shopping list item.
 * @param group - The group of the shopping list item.
 */
export interface MainItemExpandedProps {
  item: MainListItem;
  group: 'current' | 'all';
}

export const MainItemExpanded: React.FC<MainItemExpandedProps> = ({ item, group }) => {
  const { handleToggleCurrent, handleSaveNote, expandedItem } = useMainListContext();
  const isExpanded = isItemExpanded(expandedItem, group, item.id);

  const getCostInfo = useCallback((item: MainListItem): string => {
    if (!item.quantity || !item.estimatedPrice) {
      return '';
    }
    return `${item.quantity} ${item.unit} x $${item.estimatedPrice} = $${(
      Number(item.quantity) * Number(item.estimatedPrice)
    ).toFixed(2)}`;
  }, []);

  const { isAddingNote, noteInput, setNoteInput, openEditNote, saveNote, cancelNote } =
    useNoteInput(item, handleSaveNote);

  if (!isExpanded) {
    return null;
  }

  return (
    <Box
      sx={{
        width: '100%',
        px: 1,
        display: 'flex',
        flexDirection: 'column',
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
            handleToggleCurrent(item);
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
          onSave={saveNote}
          onCancel={cancelNote}
          autoFocus
        />
      ) : (
        <>
          {item.notes && (
            <>
              <NoteDisplay note={item.notes} onClick={openEditNote} />
              <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
            </>
          )}
        </>
      )}
      {/* Second row: all actions centered */}
      {!isAddingNote && <ItemActionButtons item={item} />}
    </Box>
  );
}; 