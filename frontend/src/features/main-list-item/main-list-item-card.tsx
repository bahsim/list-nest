import * as React from 'react';
import type { ListItem } from '@/entities/list/types';
import type { ExpandedItem } from '@/entities/list/types/expanded-item';
import { type Theme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import RestoreIcon from '@mui/icons-material/Restore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { MainItemExpanded } from './main-item-expanded';
import { BaseListItemCardContainer } from '@/entities/list/base-list/base-list-item-card-container';
import { isBought, isDeleted } from '@/shared/utils/list-utils';

/**
 * ShoppingListItemCard displays a single shopping list item with actions.
 * Uses context for all actions and expanded item.
 * @param item - The shopping list item.
 * @param group - The group of the shopping list item.
 */
export interface MainListItemCardProps {
  item: ListItem;
  group: string;
  expandedItem: ExpandedItem | null;
  onExpand: (group: string, id: string) => void;
  onToggleBought: (item: ListItem) => void;
  onToggleCurrent: (item: ListItem) => void;
  onRestoreItem: (item: ListItem) => void;
  onSaveNote: (id: string, note: string) => void;
  onEditItem: (item: ListItem) => void;
  onDeleteItem: (item: ListItem) => void;
}

export const MainListItemCard: React.FC<MainListItemCardProps> = ({
  item,
  group,
  expandedItem,
  onExpand,
  onToggleBought,
  onToggleCurrent,
  onRestoreItem,
  onSaveNote,
  onEditItem,
  onDeleteItem,
}) => {
  const getSwipeVisuals = ({ direction, theme }: { direction: 'left' | 'right'; theme: Theme }) => {
    if (direction === 'left') {
      if (item.isCurrent) {
        return {
          icon: StarBorderIcon,
          background: theme.palette.info.light,
        };
      }
      return {
        icon: StarIcon,
        background: theme.palette.warning.light,
      };
    } else {
      if (isDeleted(item)) {
        return {
          icon: RestoreIcon,
          background: theme.palette.error.light,
        };
      }
      if (isBought(item)) {
        return {
          icon: RestoreIcon,
          background: theme.palette.secondary.light,
        };
      }
      return {
        icon: CheckIcon,
        background: theme.palette.secondary.light,
      };
    }
  };
  const handleSwipeLeft = () => {
    onToggleCurrent(item);
  };
  const handleSwipeRight = () => {
    if (isDeleted(item)) {
      onRestoreItem(item);
    } else if (isBought(item)) {
      onRestoreItem(item);
    } else {
      onToggleBought(item);
    }
  };
  return (
    <BaseListItemCardContainer
      item={item}
      group={group}
      expandedItem={expandedItem}
      onExpand={onExpand}
      checked={isBought(item)}
      highlighted={item.isCurrent}
      canceled={isDeleted(item)}
      completed={isDeleted(item) || isBought(item)}
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      getSwipeVisuals={getSwipeVisuals}
      secondaryText={`${item.quantity} ${item.unit}`}
      renderExpandedContent={
        <MainItemExpanded
          item={item}
          group={group}
          handleToggleCurrent={onToggleCurrent}
          handleSaveNote={onSaveNote}
          expandedItem={expandedItem}
          handleEditItem={onEditItem}
          handleDeleteItem={onDeleteItem}
          handleToggleBought={onToggleBought}
          handleRestoreItem={onRestoreItem}
        />
      }
    />
  );
}; 