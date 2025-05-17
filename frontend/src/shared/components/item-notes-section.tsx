import * as React from 'react';
import { AddNoteInput } from '@ui-kit/components/molecule/add-note-input';
import { NoteDisplay } from '@ui-kit/components/molecule/note-display';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
import type { ListItem } from '@/entities/list/types';

export interface ItemNotesSectionProps {
  item: ListItem;
  isEditing?: boolean;
  editValue?: string;
  onEditOpen?: () => void;
  onEditSave?: (value: string) => void;
  onEditCancel?: () => void;
  onEditChange?: (value: string) => void;
  autoFocus?: boolean;
}

export const ItemNotesSection: React.FC<ItemNotesSectionProps> = ({
  item,
  isEditing = false,
  editValue = '',
  onEditOpen,
  onEditSave,
  onEditCancel,
  onEditChange,
  autoFocus = false,
}) => {
  if (!item.notes && !isEditing) return null;
  // Default no-op handlers with correct signatures
  const noopChange = React.useCallback((_v: string) => {}, []);
  const noopSave = React.useCallback(() => {}, []);
  const noopCancel = React.useCallback(() => {}, []);
  return (
    <>
      {isEditing ? (
        <AddNoteInput
          value={editValue}
          onChange={onEditChange || noopChange}
          onSave={onEditSave as (() => void) || noopSave}
          onCancel={onEditCancel as (() => void) || noopCancel}
          autoFocus={autoFocus}
        />
      ) : (
        <>
          {item.notes && (
            <>
              <NoteDisplay note={item.notes} onClick={onEditOpen} />
              <SectionDivider sx={{ mb: 1 }} />
            </>
          )}
        </>
      )}
    </>
  );
}; 