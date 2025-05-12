import * as React from 'react';
import type { ShoppingListItem } from '@ui-kit/components/types';
import { type Theme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import RestoreIcon from '@mui/icons-material/Restore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RefreshIcon from '@mui/icons-material/Refresh';
import { BaseListItemCard } from '../base-list/base-list-item-card';

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
}

export const ShoppingListItemCard: React.FC<ShoppingListItemCardProps> = ({
  item,
  onEdit,
  onDelete,
  onToggleBought,
  onToggleCurrent,
  onRestore,
  onUnmarkCurrent,
}) => {
  const getSwipeVisuals = ({ direction, theme }: { direction: 'left' | 'right'; theme: Theme }) => {
    if (direction === 'left') {
      if (item.isCurrent) {
        return {
          icon: StarBorderIcon,
          background: theme.palette.info.main,
        };
      }
      return {
        icon: StarIcon,
        background: theme.palette.warning.main,
      };
    } else {
      if (item.isDeleted) {
        return {
          icon: RestoreIcon,
          background: theme.palette.success.main,
        };
      }
      if (item.isBought) {
        return {
          icon: RefreshIcon,
          background: theme.palette.info.main,
        };
      }
      return {
        icon: CheckIcon,
        background: theme.palette.success.main,
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
      secondaryText={item.quantity}
      checked={item.isBought}
      highlighted={item.isCurrent}
      disabled={item.isDeleted}
      onToggle={onToggleBought}
      onClick={onEdit}
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      getSwipeVisuals={getSwipeVisuals}
    />
  );
};
