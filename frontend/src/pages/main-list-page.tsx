import React, { useState } from 'react';
import { AddEditItemModal } from '../features/main-list/components/add-edit-item-modal';
import Box from '@mui/material/Box';
import EmptyState from '@ui-kit/components/atomic/empty-state/empty-state';
import type { MainListItem } from '../features/shared/types';
import {
  filterByCategory,
  getUniqueCategories,
  getCategoryValue,
  getGroupSum,
} from '../features/main-list/utils/utils';
import { CategoryFilterChips } from '../features/main-list/components/category-filter-chips';
import { MainList } from '../features/main-list/main-list';
import { AddItemFab } from '../features/main-list/components/add-item-fab';
import { mockUser, mockCategories, mockUnits, mockItems } from '../features/main-list/utils/mock-data';
import { Typography } from '@mui/material';
import { MainListProvider } from '../features/shared/main-list-context';
import { MainLayout } from '../layouts/main-layout';
import { isItemExpanded } from '../features/base-list/utility';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

const MODAL_TITLES = {
  add: 'Add Item',
  edit: 'Edit Item',
  complete: 'Complete Item',
} as const;
const MODAL_ACTION_LABELS = {
  add: 'Create',
  edit: 'Save',
  complete: 'Complete',
} as const;

const MainListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('list');
  const [items, setItems] = useState<MainListItem[]>([]);
  const [isAddEditModalOpen, setIsAddEditModalOpen] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedItem, setExpandedItem] = useState<{
    group: 'current' | 'all';
    itemId: string;
  } | null>(null);
  const [editingItem, setEditingItem] = useState<MainListItem | null>(null);
  const [modalMode, setModalMode] = useState<'add' | 'edit' | 'complete'>('add');
  const [restoringItem, setRestoringItem] = useState<MainListItem | null>(null);
  const [isRestoreDialogOpen, setIsRestoreDialogOpen] = useState(false);

  // Handlers
  const handleNewItem = (): void => {
    setEditingItem(null);
    setIsAddEditModalOpen(true);
    setModalMode('add');
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
    setModalMode('add');
  };
  const handleCancelAdd = (): void => {
    setIsAddEditModalOpen(false);
    setEditingItem(null);
    setModalMode('add');
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
  const handleEditItem = (item: MainListItem): void => {
    setEditingItem(item);
    setIsAddEditModalOpen(true);
    setModalMode('edit');
  };
  const handleDeleteItem = (item: MainListItem): void => {};
  const handleToggleBought = (item: MainListItem): void => {
    setEditingItem(item);
    setIsAddEditModalOpen(true);
    setModalMode('complete');
  };
  const handleToggleCurrent = (item: MainListItem): void => {};
  const handleRestoreItem = (item: MainListItem): void => {
    setRestoringItem(item);
    setIsRestoreDialogOpen(true);
  };
  const confirmRestoreItem = () => {
    if (restoringItem) {
      // TODO: Add real restore logic here
      // Example: setItems(prev => prev.map(i => i.id === restoringItem.id ? { ...i, isDeleted: false } : i));
    }
    setIsRestoreDialogOpen(false);
    setRestoringItem(null);
  };
  const cancelRestoreItem = () => {
    setIsRestoreDialogOpen(false);
    setRestoringItem(null);
  };
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
                <MainList
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
                <MainList items={filteredItems} sx={{ width: '100%', maxWidth: 600, px: 1 }} group="all" />
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
            item={editingItem}
            title={MODAL_TITLES[modalMode] || ''}
            actionLabel={MODAL_ACTION_LABELS[modalMode] || ''}
          />
        )}
        {/* Restore Confirmation Dialog */}
        <Dialog open={isRestoreDialogOpen} onClose={cancelRestoreItem}>
          <DialogTitle>Restore this item?</DialogTitle>
          <DialogContent>
            Are you sure you want to restore
            {restoringItem && (
              <strong> {restoringItem.name}</strong>
            )}
            ? This will move the item back to your active list.
          </DialogContent>
          <DialogActions>
            <Button onClick={cancelRestoreItem} variant="outlined">Cancel</Button>
            <Button onClick={confirmRestoreItem} variant="contained" color="primary">Restore</Button>
          </DialogActions>
        </Dialog>
      </MainListProvider>
    </MainLayout>
  );
};

export default MainListView;
