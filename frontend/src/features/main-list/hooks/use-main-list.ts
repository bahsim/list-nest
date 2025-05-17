import { useItemDialog } from '@/shared/hooks/use-item-dialog';
import { useCategoryFilter } from '@/shared/hooks/use-category-filter';
import { useListState } from '@/shared/hooks/use-list-state';
import type { ListItem } from '@/entities/list/types';

export const useMainList = (initialItems: ListItem[] = []) => {
  const { list: items, setList: setItems, add, update } = useListState<ListItem>(initialItems);
  const deleteDialog = useItemDialog<ListItem>();
  const restoreDialog = useItemDialog<ListItem>();
  const {
    selectedCategories,
    setSelectedCategories,
    handleToggleCategory,
    filteredItems,
    uniqueCategories,
  } = useCategoryFilter(items, (item) => item.category);
  const filteredCurrentItems = items.filter(
    (item) => item.isCurrent && (selectedCategories.length === 0 || selectedCategories.includes(item.category))
  );

  const handleSaveNote = (id: string, note: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item.id === id ? { ...item, note } : item))
    );
  };

  const handleToggleCurrent = (item: ListItem) => {
    setItems((prevItems) =>
      prevItems.map((i) => (i.id === item.id ? { ...i, isCurrent: !i.isCurrent } : i))
    );
  };

  const handleToggleBought = (item: ListItem) => {
    setItems((prevItems) =>
      prevItems.map((i) => (i.id === item.id ? { ...i, isBought: !i.isBought } : i))
    );
  };

  return {
    items,
    setItems,
    selectedCategories,
    setSelectedCategories,
    filteredItems,
    filteredCurrentItems,
    uniqueCategories,
    dialogs: {
      deleteDialog,
      restoreDialog,
    },
    // Only domain logic handlers remain
    handleDeleteItem: (item: ListItem) => deleteDialog.handleOpen(item),
    handleRestoreItem: (item: ListItem) => restoreDialog.handleOpen(item),
    onToggleCategory: handleToggleCategory,
    handleSaveNote,
    handleToggleCurrent,
    handleToggleBought,
  };
};
