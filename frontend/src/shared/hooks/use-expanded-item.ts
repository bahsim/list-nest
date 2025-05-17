import { useState } from 'react';

export function useExpandedItem<TId = string, TGroup = string>() {
  const [expandedItem, setExpandedItem] = useState<{ group: TGroup; itemId: TId } | null>(null);

  const handleExpandItem = (group: TGroup, itemId: TId) => {
    setExpandedItem((prev) =>
      prev && prev.group === group && prev.itemId === itemId ? null : { group, itemId },
    );
  };

  return {
    expandedItem,
    handleExpandItem,
  };
}
