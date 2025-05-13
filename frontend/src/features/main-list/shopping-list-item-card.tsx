import * as React from 'react';
import type { ShoppingListItem } from '@ui-kit/components/types';
import { type Theme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import RestoreIcon from '@mui/icons-material/Restore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { BaseListItemCard } from '../base-list/base-list-item-card';
import { ShoppingItemExpanded } from './shopping-item-expanded';
import { useMainListContext } from './main-list-context';

/**
 * ShoppingListItemCard displays a single shopping list item with actions.
 * Uses context for all actions and expanded item.
 * @param item - The shopping list item.
 */
export interface ShoppingListItemCardProps {
  item: ShoppingListItem;
}

export const ShoppingListItemCard: React.FC<ShoppingListItemCardProps> = ({ item }) => {
  const {
    handleToggleBought,
    handleToggleCurrent,
    handleRestoreItem,
    handleExpandItem,
    expandedItem,
  } = useMainListContext();
  const isExpanded = expandedItem && expandedItem.itemId === item.id ? true : false;
  const onExpand = () =>
    handleExpandItem(
      expandedItem && expandedItem.itemId === item.id ? expandedItem.group : 'current',
      item.id,
    );
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
          background: theme.palette.error.light,
        };
      }
      if (item.isBought) {
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
    if (item.isCurrent) {
      handleToggleCurrent(item);
    } else {
      handleToggleCurrent(item);
    }
  };
  const handleSwipeRight = () => {
    if (item.isDeleted) {
      handleRestoreItem(item);
    } else if (item.isBought) {
      handleToggleBought(item);
    } else {
      handleToggleBought(item);
    }
  };
  return (
    <BaseListItemCard
      title={item.name}
      secondaryText={`${item.quantity} ${item.unit}`}
      checked={item.isBought}
      highlighted={item.isCurrent}
      disabled={item.isDeleted}
      onToggle={() => handleToggleBought(item)}
      isExpanded={isExpanded}
      onExpand={onExpand}
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      getSwipeVisuals={getSwipeVisuals}
      renderExpandedContent={<ShoppingItemExpanded item={item} />}
    />
  );
};
