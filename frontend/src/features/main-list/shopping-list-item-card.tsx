import * as React from 'react';
import type { ShoppingListItem } from '@ui-kit/components/types';
import { type Theme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import RestoreIcon from '@mui/icons-material/Restore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { BaseListItemCard } from '../base-list/base-list-item-card';
import { ShoppingItemExpanded } from './shopping-item-expanded';

/**
 * ShoppingListItemCard displays a single shopping list item with actions.
 * @param item - The shopping list item.
 * @param onEdit - Edit handler.
 * @param onDelete - Delete handler.
 * @param onToggleBought - Mark as bought handler.
 * @param onToggleCurrent - Toggle current handler.
 * @param onRestore - Restore handler.
 * @param onUnmarkCurrent - Unmark current handler.
 */
export interface ShoppingListItemCardProps {
  item: ShoppingListItem;
  onEdit: () => void;
  onDelete: () => void;
  onToggleBought: () => void;
  onToggleCurrent: () => void;
  onRestore: () => void;
  onUnmarkCurrent: () => void;
  isExpanded: boolean;
  onExpand: () => void;
  onAddNote: () => void;
  onSaveNote: (note: string) => void;
}

export const ShoppingListItemCard: React.FC<ShoppingListItemCardProps> = ({
  item,
  onEdit,
  onDelete,
  onToggleBought,
  onToggleCurrent,
  onRestore,
  onUnmarkCurrent,
  isExpanded,
  onExpand,
  onAddNote,
  onSaveNote,
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
      if (item.isDeleted) {
        return {
          icon: RestoreIcon,
          background: theme.palette.info.light,
        };
      }
      if (item.isBought) {
        return {
          icon: RestoreIcon,
          background: theme.palette.info.light,
        };
      }
      return {
        icon: CheckIcon,
        background: theme.palette.secondary.light,
      };
    }
  };

  const handleSwipeLeft = () => {
    if (item.isCurrent) {
      onUnmarkCurrent();
    } else {
      onToggleCurrent();
    }
  };

  const handleSwipeRight = () => {
    if (item.isDeleted) {
      onRestore();
    } else if (item.isBought) {
      onToggleBought();
    } else {
      onToggleBought();
    }
  };

  return (
    <BaseListItemCard
      title={item.name}
      secondaryText={`${item.quantity} ${item.unit}`}
      checked={item.isBought}
      highlighted={item.isCurrent}
      disabled={item.isDeleted}
      onToggle={onToggleBought}
      isExpanded={isExpanded}
      onExpand={onExpand}
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      getSwipeVisuals={getSwipeVisuals}
      renderExpandedContent={
        <ShoppingItemExpanded
          item={item}
          onToggleCurrent={onToggleCurrent}
          onToggleBought={onToggleBought}
          onDelete={onDelete}
          onEdit={onEdit}
          onAddNote={onAddNote}
          onSaveNote={onSaveNote}
          isExpanded={isExpanded}
        />
      }
    />
  );
};
