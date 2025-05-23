import * as React from 'react';
import type { ListItem } from '@/entities/list/types';
import type { ExpandedItem } from '@/entities/list/types/expanded-item';
import { BaseListItemCard } from '@/widgets/base-list-item-card';
import { isItemExpanded } from '@/shared/utils/list-utils';

export interface BaseListItemCardContainerProps {
  item: ListItem;
  group?: string;
  expandedItem: ExpandedItem | null;
  onExpand: (group: string, id: string) => void;
  checked: boolean;
  highlighted: boolean;
  canceled: boolean;
  completed: boolean;
  secondaryText: string;
  renderExpandedContent: React.ReactNode;
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  getSwipeVisuals?: (args: any) => any;
  borderColor: string;
}

export const BaseListItemCardContainer: React.FC<BaseListItemCardContainerProps> = ({
  item,
  group = 'non-group',
  expandedItem,
  onExpand,
  checked,
  highlighted,
  canceled,
  completed,
  secondaryText,
  renderExpandedContent,
  onSwipeLeft,
  onSwipeRight,
  getSwipeVisuals,
  borderColor,
}) => {
  const isExpanded = isItemExpanded({ expandedItem, group, itemId: item.id });
  const handleExpand = () => onExpand(group, item.id);

  return (
    <BaseListItemCard
      title={item.name}
      secondaryText={secondaryText}
      checked={checked}
      highlighted={highlighted}
      canceled={canceled}
      completed={completed}
      isExpanded={isExpanded}
      onExpand={handleExpand}
      onSwipeLeft={onSwipeLeft}
      onSwipeRight={onSwipeRight}
      getSwipeVisuals={getSwipeVisuals}
      renderExpandedContent={renderExpandedContent}
      borderColor={borderColor}
    />
  );
}; 