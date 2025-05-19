import React from 'react';
import { mockCategories, mockUnits } from '@/features/main-list/utils/mock-data';
import { useMainList } from '@/features/main-list/hooks/use-main-list';
import { MainListWidget } from '@/widgets/main-list-widget/main-list-widget';
import {
  MainListDataProvider,
  useMainListData,
} from '@/features/main-list/providers/main-list-data-provider';
import type { ListItem } from '@/entities/list/types';
import { ListExpansionProvider } from '@/shared/hooks/list-expansion-context';
import { MainListActionsProvider } from '@/features/main-list/providers/main-list-actions-context';
import { useCategoryFilter } from '@/shared/hooks/use-category-filter';

export const MainListPage: React.FC = () => {
  return (
    <MainListDataProvider>
      <MainListViewInner />
    </MainListDataProvider>
  );
};

const MainListViewInner: React.FC = () => {
  const { initialItems } = useMainListData();
  const mainList = useMainList(initialItems);

  // Modal state (UI-only)
  const [isAddEditModalOpen, setIsAddEditModalOpen] = React.useState(false);
  const [editingItem, setEditingItem] = React.useState(null as ListItem | null);
  const [modalMode, setModalMode] = React.useState<'add' | 'edit' | 'complete'>('add');

  // Category filter
  const { selectedCategories, handleToggleCategory, filteredItemsByCategory, uniqueCategories } =
    useCategoryFilter(mainList.items, (item) => item.category);

  const filteredCurrentItems = mainList.items.filter(
    (item) =>
      item.isCurrent &&
      (selectedCategories.length === 0 || selectedCategories.includes(item.category)),
  );

  // Modal handlers
  const handleNewItem = () => {
    setEditingItem(null);
    setIsAddEditModalOpen(true);
    setModalMode('add');
  };

  const handleEditItem = (item: ListItem) => {
    setEditingItem(item);
    setIsAddEditModalOpen(true);
    setModalMode('edit');
  };

  const handleToggleBought = (item: ListItem) => {
    setEditingItem(item);
    setIsAddEditModalOpen(true);
    mainList.handleToggleBought(item);
    setModalMode('complete');
  };

  const handleSaveItem = (input: ListItem) => {
    if (editingItem) {
      mainList.setItems((prev: ListItem[]) =>
        prev.map((i) => (i.id === editingItem.id ? { ...i, ...input } : i)),
      );
    } else {
      mainList.setItems((prev: ListItem[]) => [...prev, input]);
    }

    setIsAddEditModalOpen(false);
    setEditingItem(null);
    setModalMode('add');
  };

  const handleCancelAdd = () => {
    setIsAddEditModalOpen(false);
    setEditingItem(null);
    setModalMode('add');
  };

  return (
    <MainListActionsProvider
      value={{
        handleToggleBought,
        handleToggleCurrent: mainList.handleToggleCurrent,
        handleRestoreItem: mainList.handleRestoreItem,
        handleEditItem,
        handleDeleteItem: mainList.handleDeleteItem,
        handleSaveNote: mainList.handleSaveNote,
      }}
    >
      <ListExpansionProvider>
        <MainListWidget
          list={{
            items: mainList.items,
            filteredItems: filteredItemsByCategory,
            filteredCurrentItems,
            handleNewItem,
          }}
          categoryFilter={{
            uniqueCategories,
            selectedCategories,
            onToggleCategory: handleToggleCategory,
          }}
          modal={{
            isAddEditModalOpen,
            handleSaveItem,
            handleCancelAdd,
            editingItem,
            modalMode,
          }}
          dialogs={mainList.dialogs}
          mockData={{
            mockCategories,
            mockUnits,
          }}
        />
      </ListExpansionProvider>
    </MainListActionsProvider>
  );
};
