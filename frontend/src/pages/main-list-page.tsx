import React from 'react';
import { mockCategories, mockUnits } from '@/features/main-list/utils/mock-data';
import { useMainList } from '@/features/main-list/hooks/use-main-list';
import { MainListWidget } from '@/widgets/main-list-widget/main-list-widget';
import {
  MainListDataProvider,
  useMainListData,
} from '@/features/main-list/providers/main-list-data-provider';
import { MainLayout } from '@/layouts/main-layout';
import { mockUser } from '@/features/main-list/utils/mock-data';
import { useState } from 'react';

export const MainListPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('main');
  const handleTabChange = (tab: string) => setActiveTab(tab);
  const handleSettings = () => {};
  return (
    <MainLayout
      user={mockUser}
      onSettings={handleSettings}
      activeTab={activeTab}
      onTabChange={handleTabChange}
    >
      <MainListView />
    </MainLayout>
  );
};

const MainListView: React.FC = () => {
  return (
    <MainListDataProvider>
      <MainListViewInner />
    </MainListDataProvider>
  );
};

const MainListViewInner: React.FC = () => {
  const { initialItems } = useMainListData();
  const mainList = useMainList(initialItems);
  return (
    <MainListWidget
      list={{
        items: mainList.items,
        uniqueCategories: mainList.uniqueCategories,
        selectedCategories: mainList.selectedCategories,
        onToggleCategory: mainList.handleToggleCategory,
        getCategoryValue: mainList.getCategoryValue,
        filteredItems: mainList.filteredItems,
        filteredCurrentItems: mainList.filteredCurrentItems,
        getGroupSum: mainList.getGroupSum,
        expandedItem: mainList.expandedItem,
        handleEditItem: mainList.handleEditItem,
        handleDeleteItem: mainList.handleDeleteItem,
        handleToggleBought: mainList.handleToggleBought,
        handleToggleCurrent: mainList.handleToggleCurrent,
        handleRestoreItem: mainList.handleRestoreItem,
        handleSaveNote: mainList.handleSaveNote,
        handleExpandItem: mainList.handleExpandItem,
        handleNewItem: mainList.handleNewItem,
      }}
      modal={{
        isAddEditModalOpen: mainList.isAddEditModalOpen,
        handleSaveItem: mainList.handleSaveItem,
        handleCancelAdd: mainList.handleCancelAdd,
        editingItem: mainList.editingItem,
        modalMode: mainList.modalMode,
      }}
      dialogs={{
        restoringItem: mainList.restoringItem,
        isRestoreDialogOpen: mainList.isRestoreDialogOpen,
        confirmRestoreItem: mainList.confirmRestoreItem,
        cancelRestoreItem: mainList.cancelRestoreItem,
        deletingItem: mainList.deletingItem,
        isDeleteDialogOpen: mainList.isDeleteDialogOpen,
        confirmDeleteItem: mainList.confirmDeleteItem,
        cancelDeleteItem: mainList.cancelDeleteItem,
      }}
      mockData={{
        mockCategories,
        mockUnits,
      }}
    />
  );
};
