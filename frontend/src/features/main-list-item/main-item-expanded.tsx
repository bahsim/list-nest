import * as React from 'react';
import { Box } from '@mui/material';
import type { ListItem } from '@/entities/list/types';
import type { ExpandedItem } from '@/entities/list/types/expanded-item';
import { ItemActionButtons } from './item-action-buttons';
import { useEditableInput } from '@/shared/hooks/use-editable-input';
import { isItemExpanded } from '@/shared/utils/list-utils';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
import { ItemCostDisplay } from '@/shared/components/item-cost-display';
import { ItemNotesSection } from '@/shared/components/item-notes-section';
import { ItemCurrentToggle } from '@/shared/components/item-current-toggle';
import { ExpandedSection } from '@/shared/components/expanded-section';
import { CURRENCY_KEY } from '@/shared/constants/storage-keys';
import { usePersistentState } from '@/shared/hooks/use-persistent-state';

/**
 * MainItemExpanded displays expanded details and actions for a shopping list item.
 * Now props-driven, no context usage.
 * @param item - The shopping list item.
 * @param group - The group of the shopping list item.
 * @param handleToggleCurrent - handler for toggling current
 * @param handleSaveNote - handler for saving note
 * @param expandedItem - current expanded item
 */
export interface MainItemExpandedProps {
  item: ListItem;
  group: string;
  handleToggleCurrent: (item: ListItem) => void;
  handleSaveNote: (id: string, note: string) => void;
  expandedItem: ExpandedItem | null;
  handleEditItem?: (item: ListItem) => void;
  handleDeleteItem?: (item: ListItem) => void;
  handleToggleBought?: (item: ListItem) => void;
  handleRestoreItem?: (item: ListItem) => void;
}

export const MainItemExpanded: React.FC<MainItemExpandedProps> = ({
  item,
  group,
  handleToggleCurrent,
  handleSaveNote,
  expandedItem,
  handleEditItem,
  handleDeleteItem,
  handleToggleBought,
  handleRestoreItem,
}) => {
  const isExpanded = isItemExpanded({ expandedItem, group, itemId: item.id });
  const noteInput = useEditableInput(item.id, item.notes || '', handleSaveNote);
  const [currency] = usePersistentState(CURRENCY_KEY, 'USD');
  
  if (!isExpanded) {
    return null;
  }

  return (
    <ExpandedSection>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <ItemCurrentToggle item={item} onToggle={handleToggleCurrent} />
        <ItemCostDisplay item={item} currency={currency} />
      </Box>
      <SectionDivider sx={{ mb: 1 }} />
      <ItemNotesSection
        item={item}
        isEditing={noteInput.isEditing}
        editValue={noteInput.inputValue}
        onEditOpen={noteInput.openEdit}
        onEditSave={noteInput.save}
        onEditCancel={noteInput.cancel}
        onEditChange={noteInput.setInputValue}
        autoFocus
      />
      {!noteInput.isEditing && (
        <ItemActionButtons
          item={item}
          handleEditItem={typeof handleEditItem === 'function' ? handleEditItem : () => {}}
          handleDeleteItem={typeof handleDeleteItem === 'function' ? handleDeleteItem : () => {}}
          handleToggleBought={
            typeof handleToggleBought === 'function' ? handleToggleBought : () => {}
          }
          handleRestoreItem={typeof handleRestoreItem === 'function' ? handleRestoreItem : () => {}}
        />
      )}
    </ExpandedSection>
  );
};
