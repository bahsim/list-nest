import { useItemDialog } from '@/shared/hooks/use-item-dialog';
import { useCategoryFilter } from '@/shared/hooks/use-category-filter';
import { useListState } from '@/shared/hooks/use-list-state';
import type { ListItem } from '@/entities/list/types';

export const useMainList = (initialItems: ListItem[] = []) => {
  const { list: items, setList: setItems } = useListState<ListItem>(initialItems);
  const deleteDialog = useItemDialog<ListItem>();
  const restoreDialog = useItemDialog<ListItem>();

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
      prevItems.map((i) =>
        i.id === item.id
          ? {
              ...i,
              boughtAt: i.boughtAt === null ? new Date() : null,
            }
          : i
      )
    );
  };

  return {
    items,
    setItems,
    dialogs: {
      deleteDialog,
      restoreDialog,
    },
    // Only domain logic handlers remain
    handleDeleteItem: (item: ListItem) => deleteDialog.handleOpen(item),
    handleRestoreItem: (item: ListItem) => restoreDialog.handleOpen(item),
    handleSaveNote,
    handleToggleCurrent,
    handleToggleBought,
  };
};
