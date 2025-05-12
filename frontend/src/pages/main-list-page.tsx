import React, { useState } from 'react';
import { HeaderBar } from '@ui-kit/components/organism/header-bar/header-bar';
import { FooterNav } from '@ui-kit/components/organism/footer-nav/footer-nav';
import { AddEditItemModal } from '@ui-kit/components/organism/AddEditItemModal/AddEditItemModal';
import Box from '@mui/material/Box';
import EmptyState from '@ui-kit/components/atomic/empty-state/empty-state';
import type { ShoppingListItem } from '@ui-kit/components/types';
import { filterByCategory, getUniqueCategories, getCategoryValue, getGroupSum } from '../features/main-list/utils';
import { CategoryFilterChips } from '../features/main-list/category-filter-chips';
import { ShoppingListGroup } from '../features/main-list/shopping-list-group';
import { AddItemFab } from '../features/main-list/add-item-fab';
import { mockUser, mockCategories, mockUnits, mockCurrencies, mockItems } from '../features/main-list/mock-data';

const MainListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('list');
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState<boolean>(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  // Handlers
  const handleAddFirstItem = (): void => setIsAddModalOpen(true);
  const handleSaveItem = (input: any): void => {
    setItems((prev) => [
      ...prev,
      ...mockItems,
    ]);
    setIsAddModalOpen(false);
  };
  const handleCancelAdd = (): void => setIsAddModalOpen(false);
  const handleToggleCategory = (category: string): void => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  // ShoppingList handlers (stubbed, replace with real logic)
  const handleEditItem = (item: ShoppingListItem): void => {};
  const handleDeleteItem = (item: ShoppingListItem): void => {};
  const handleToggleBought = (item: ShoppingListItem): void => {};
  const handleToggleCurrent = (item: ShoppingListItem): void => {};
  const handleRestoreItem = (item: ShoppingListItem): void => {};

  // Derived data
  const filteredItems = filterByCategory(items, selectedCategories);
  const filteredCurrentItems = filterByCategory(items.filter(item => item.isCurrent), selectedCategories);
  const uniqueCategories = getUniqueCategories(items);

  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        bgcolor: 'var(--color-bg)',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 56,
          zIndex: 2,
        }}
      >
        <HeaderBar user={mockUser} onSettings={() => {}} />
      </Box>

      {/* Main Content (scrollable) */}
      <Box
        sx={{
          position: 'absolute',
          top: 24,
          bottom: 56,
          left: 0,
          right: 0,
          overflow: 'auto',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: 5,
          width: '100%',
          paddingBottom: 12,
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
            onButtonClick={handleAddFirstItem}
            imageAlt="No items yet"
          />
        ) : (
          <>
            <ShoppingListGroup
              label="Current"
              items={filteredCurrentItems}
              groupSum={getGroupSum(filteredCurrentItems)}
              onEdit={handleEditItem}
              onDelete={handleDeleteItem}
              onToggleBought={handleToggleBought}
              onToggleCurrent={handleToggleCurrent}
              onRestore={handleRestoreItem}
            />
            <ShoppingListGroup
              label="All"
              items={filteredItems}
              groupSum={getGroupSum(filteredItems)}
              onEdit={handleEditItem}
              onDelete={handleDeleteItem}
              onToggleBought={handleToggleBought}
              onToggleCurrent={handleToggleCurrent}
              onRestore={handleRestoreItem}
            />
          </>
        )}
      </Box>

      {/* Footer */}
      <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />

      {/* FAB */}
      {items.length > 0 && <AddItemFab onClick={() => setIsAddModalOpen(true)} />}

      {/* Modal */}
      {isAddModalOpen && (
        <AddEditItemModal
          onSave={handleSaveItem}
          onCancel={handleCancelAdd}
          categories={mockCategories}
          units={mockUnits}
          currencies={mockCurrencies}
        />
      )}
    </Box>
  );
};

export default MainListView;
