import * as React from 'react';
import { Box } from '@mui/material';
import type { ListItem } from '@/entities/list/types';
import type { ExpandedItem } from '@/entities/list/types/expanded-item';
import { isItemExpanded } from '@/shared/utils/list-utils';
import { ActionIconButton } from '@ui-kit/components/atomic/action-icon-button';
import DescriptionIcon from '@mui/icons-material/Description';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
import { ItemCostDisplay } from '@/shared/components/item-cost-display';
import { ItemNotesSection } from '@/shared/components/item-notes-section';
import { ExpandedSection } from '@/shared/components/expanded-section';

/**
 * HistoryItemExpanded displays expanded details and actions for a shopping list item.
 * Now props-driven, no context usage.
 * @param item - The shopping list item.
 * @param expandedItem - current expanded item
 * @param onViewItem - callback function to view item
 */
export interface HistoryItemExpandedProps {
  item: ListItem;
  expandedItem: ExpandedItem | null;
  onViewItem?: (item: ListItem) => void;
  currency: string;
}

export const HistoryItemExpanded: React.FC<HistoryItemExpandedProps> = ({
  item,
  expandedItem,
  onViewItem,
  currency,
}) => {
  const isExpanded = isItemExpanded({ expandedItem, itemId: item.id });
  
  if (!isExpanded) {
    return null;
  }

  return (
    <ExpandedSection>
      <ItemCostDisplay item={item} currency={currency} />
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
          onClick={(e) => {
            e.stopPropagation();
            if (onViewItem) onViewItem(item);
          }}
          color="info"
          icon={<DescriptionIcon sx={{ color: (theme) => theme.palette.common.white }} />}
        />
      </Box>
    </ExpandedSection>
  );
};
