import type { ListItem } from '@/entities/list/types';
import { groupByDate } from '@/shared/utils/group-by-date';
import { useCategoryFilter } from '@/shared/hooks/use-category-filter';
import { useListState } from '@/shared/hooks/use-list-state';
import { formatDateShort } from '@/shared/utils/format-date';

export const useHistoryList = (initialItems: ListItem[] = []) => {
  const { list: items, setList: setItems } = useListState<ListItem>(initialItems);
  const {
    selectedCategories,
    setSelectedCategories,
    handleToggleCategory,
    filteredItems,
    uniqueCategories,
  } = useCategoryFilter(items, (item) => item.category);

  const itemsGroupedByDate = groupByDate(filteredItems, (item) =>
    item.boughtAt
      ? formatDateShort(item.boughtAt)
      : item.deletedAt
        ? formatDateShort(item.deletedAt)
        : 'No Date',
  );

  return {
    items,
    setItems,
    selectedCategories,
    setSelectedCategories,
    handleToggleCategory,
    uniqueCategories,
    itemsGroupedByDate,
  };
};
