import * as React from 'react';
import { Box } from '@mui/material';
import type { ListItem } from '@/entities/list/types';
import type { ExpandedItem } from '@/entities/list/types/expanded-item';
import { formatItemCost } from '@/entities/list';
import { isItemExpanded } from '@/entities/list/base-list/utility';
import { ActionIconButton } from '@ui-kit/components/atomic/action-icon-button';
import DescriptionIcon from '@mui/icons-material/Description';
import { NoteDisplay } from '@ui-kit/components/molecule/note-display';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
import { ItemCostDisplay } from '@/shared/components/item-cost-display';
import { ItemNotesSection } from '@/shared/components/item-notes-section';
import { ExpandedSection } from '@/shared/components/expanded-section';

/**
 * HistoryItemExpanded displays expanded details and actions for a shopping list item.
 * Now props-driven, no context usage.
 * @param item - The shopping list item.
 * @param expandedItem - current expanded item
 */
export interface HistoryItemExpandedProps {
  item: ListItem;
  expandedItem: ExpandedItem | null;
}

export const HistoryItemExpanded: React.FC<HistoryItemExpandedProps> = ({ item, expandedItem }) => {
  const isExpanded = isItemExpanded({ expandedItem, itemId: item.id });

  if (!isExpanded) {
    return null;
  }

  return (
    <ExpandedSection>
      <ItemCostDisplay item={item} />
      <SectionDivider sx={{ mb: 1 }} />
      <ItemNotesSection item={item} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          width: '100%',
        }}
      >
        <ActionIconButton
          onClick={(e) => e.stopPropagation()}
          color="info"
          icon={<DescriptionIcon sx={{ color: '#fff' }} />}
        />
      </Box>
    </ExpandedSection>
  );
};
