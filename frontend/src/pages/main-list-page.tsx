import React, { useState } from 'react';
import { HeaderBar } from '@ui-kit/components/organism/header-bar/header-bar';
import { FooterNav } from '@ui-kit/components/organism/footer-nav/footer-nav';
import { AddEditItemModal } from '@ui-kit/components/organism/add-edit-item-modal/add-edit-item-modal';
import Box from '@mui/material/Box';
import EmptyState from '@ui-kit/components/atomic/empty-state/empty-state';
import type { ShoppingListItem } from '@ui-kit/components/types';
import {
  filterByCategory,
  getUniqueCategories,
  getCategoryValue,
  getGroupSum,
} from '../features/main-list/utils';
import { CategoryFilterChips } from '../features/main-list/category-filter-chips';
import { ShoppingList } from '../features/main-list/shopping-list';
import { AddItemFab } from '../features/main-list/add-item-fab';
import { mockUser, mockCategories, mockUnits, mockItems } from '../features/main-list/mock-data';
import { Typography } from '@mui/material';
import { MainListProvider } from '../features/main-list/main-list-context';
import { MainLayout } from '../layouts/main-layout';
import { isItemExpanded } from '../features/base-list/utility';

const MainListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('list');
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedItem, setExpandedItem] = useState<{
    group: 'current' | 'all';
    itemId: string;
  } | null>(null);
  const [editingItem, setEditingItem] = useState<ShoppingListItem | null>(null);

  // Handlers
  const handleNewItem = (): void => {
    setEditingItem(null);
    setIsAddEditModalOpen(true);
  };
  const handleSaveItem = (input: any): void => {
    // TODO: Replace with real add/edit logic
    setItems((prev) => {
      if (editingItem) {
        // Edit mode: update item
        return prev.map((i) => (i.id === editingItem.id ? { ...i, ...input } : i));
      }
      // Add mode: add new item
      return [...prev, ...mockItems];
    });
    setIsAddEditModalOpen(false);
    setEditingItem(null);
  };
  const handleCancelAdd = (): void => {
    setIsAddEditModalOpen(false);
    setEditingItem(null);
  };
  const handleToggleCategory = (category: string): void => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    );
  };
  const handleExpandItem = (group: 'current' | 'all', itemId: string): void => {
    if (isItemExpanded(expandedItem, group, itemId)) {
      setExpandedItem(null);
      return;
    }
    setExpandedItem({ group, itemId });
  };

  // ShoppingList handlers (stubbed, replace with real logic)
  const handleEditItem = (item: ShoppingListItem): void => {
    setEditingItem(item);
    setIsAddEditModalOpen(true);
  };
  const handleDeleteItem = (item: ShoppingListItem): void => {};
  const handleToggleBought = (item: ShoppingListItem): void => {};
  const handleToggleCurrent = (item: ShoppingListItem): void => {};
  const handleRestoreItem = (item: ShoppingListItem): void => {};
  const handleSaveNote = (id: string, note: string): void => {};

  // Derived data
  const filteredItems = filterByCategory(items, selectedCategories);
  const filteredCurrentItems = filterByCategory(
    items.filter((item) => item.isCurrent),
    selectedCategories,
  );
  const uniqueCategories = getUniqueCategories(items);

  return (
    <MainLayout
      user={mockUser}
      onSettings={() => {}}
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <MainListProvider
        value={{
          expandedItem,
          handleEditItem,
          handleDeleteItem,
          handleToggleBought,
          handleToggleCurrent,
          handleRestoreItem,
          handleSaveNote,
          handleExpandItem,
        }}
      >
        {/* Category Filter Chips */}
        {items.length > 0 && uniqueCategories.length > 1 && (
          <CategoryFilterChips
            categories={uniqueCategories}
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
            getCategoryValue={getCategoryValue}
          />
        )}
        {items.length === 0 ? (
          <EmptyState
            title="No items yet"
            description="Add your first item to this list."
            buttonLabel="Add First Item"
            onButtonClick={handleNewItem}
            imageAlt="No items yet"
          />
        ) : (
          <>
            {/* Current Group */}
            {filteredCurrentItems.length > 0 && (
              <>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 600,
                    px: 1.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 0.5,
                    mb: 0.5,
                  }}
                >
                  <Typography variant="subtitle2" color="text.secondary">
                    Current
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    ${getGroupSum(filteredCurrentItems)}
                  </Typography>
                </Box>
                <ShoppingList
                  items={filteredCurrentItems}
                  sx={{ width: '100%', maxWidth: 600, px: 1 }}
                  group="current"
                />
              </>
            )}
            {/* All Group */}
            {filteredItems.length > 0 && (
              <>
                <Box
                  sx={{
                    width: '100%',
                    maxWidth: 600,
                    px: 1.5,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mt: 0.5,
                    mb: 0.5,
                  }}
                >
                  <Typography variant="subtitle2" color="text.secondary">
                    All
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    ${getGroupSum(filteredItems)}
                  </Typography>
                </Box>
                <ShoppingList items={filteredItems} sx={{ width: '100%', maxWidth: 600, px: 1 }} group="all" />
              </>
            )}
          </>
        )}
        {/* FAB */}
        {items.length > 0 && <AddItemFab onClick={handleNewItem} />}
        {/* Modal */}
        {isAddEditModalOpen && (
          <AddEditItemModal
            onSave={handleSaveItem}
            onCancel={handleCancelAdd}
            categories={mockCategories}
            units={mockUnits}
            item={editingItem || undefined}
          />
        )}
      </MainListProvider>
    </MainLayout>
  );
};

export default MainListView;
