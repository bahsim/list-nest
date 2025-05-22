import { useItemDialog } from '@/shared/hooks/use-item-dialog';

import { usePersistentState } from '@/shared/hooks/use-persistent-state';
import type { ListItem, AddItemInput } from '@/entities/list/types';
import { LIST_ITEMS_KEY } from '@/shared/constants/storage-keys';
import { isEditingItem } from '@/shared/utils/list-utils';

export const useMainList = () => {
  const [items, setItems] = usePersistentState<ListItem[]>(LIST_ITEMS_KEY, []);
  const deleteDialog = useItemDialog<ListItem>();
  const restoreDialog = useItemDialog<ListItem>();

  const addItem = (input: AddItemInput | ListItem) => {
    setItems((prev: ListItem[]) => [
      ...prev,
      {
        ...input,
        id: crypto.randomUUID(),
        addedAt: new Date(),
        boughtAt: null,
        deletedAt: null,
        isCurrent: false,
      },
    ]);
  };

  const editItem = (input: AddItemInput | ListItem) => {
    if (isEditingItem(input)) {
      setItems((prev: ListItem[]) => prev.map((i) => (i.id === input.id ? { ...i, ...input } : i)));
    }
  };

  const completeItem = (item: AddItemInput | ListItem) => {
    if (isEditingItem(item)) {
      setItems((prevItems) =>
        prevItems.map((i) =>
          i.id === item.id
            ? {
                ...i,
                boughtAt: new Date(),
              }
            : i,
        ),
      );
    }
  };

  const deleteItem = (item: ListItem) => {
    deleteDialog.handleOpen(item, (item: ListItem) => {
      setItems((prevItems) =>
        prevItems.map((i) => {
          const newItem: ListItem = { ...i, deletedAt: new Date() };

          return i.id === item.id ? newItem : i;
        }),
      );
    });
  };

  const restoreItem = (item: ListItem) => {
    restoreDialog.handleOpen(item, (item: ListItem) => {
      setItems((prevItems) =>
        prevItems.map((i) => {
          const newItem: ListItem = { ...i, deletedAt: null, boughtAt: null };

          return i.id === item.id ? newItem : i;
        }),
      );
    });
  };

  const saveNote = (id: string, note: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const clonedItem: ListItem = { ...item };
          clonedItem.notes = note;

          return clonedItem;
        }

        return item;
      }),
    );
  };

  const toggleCurrent = (item: ListItem) => {
    setItems((prevItems) =>
      prevItems.map((i) => {
        const newItem: ListItem = { ...i, isCurrent: !i.isCurrent };

        return i.id === item.id ? newItem : i;
      }),
    );
  };

  return {
    data: {
      items,
    },
    actions: {
      addItem,
      editItem,
      completeItem,
      deleteItem,
      restoreItem,
      saveNote,
      toggleCurrent,
    },
    dialogs: {
      deleteDialog,
      restoreDialog,
    },
    // Only domain logic handlers remain
  };
};
