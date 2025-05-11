import React, { useState } from 'react';
import { HeaderBar } from '@ui-kit/components/organism/HeaderBar/HeaderBar';
import { FooterNav } from '@ui-kit/components/organism/FooterNav/FooterNav';
import { ShoppingList } from '@ui-kit/components/organism/ShoppingList/ShoppingList';
import type { ShoppingListItem, User } from '@ui-kit/components/types';
import Box from '@mui/material/Box';
import EmptyState from '@ui-kit/components/atomic/EmptyState/EmptyState';
import { AddEditItemModal } from '@ui-kit/components/organism/AddEditItemModal/AddEditItemModal';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

const mockUser: User = {
  id: '1',
  name: 'Alice Johnson',
  // avatarUrl: 'https://i.pravatar.cc/150?img=1',
};

const mockCategories = ['Produce', 'Bakery', 'Dairy', 'Meat', 'Snacks'];
const mockUnits = ['pcs', 'kg', 'g', 'l', 'pack'];
const mockCurrencies = ['USD', 'EUR', 'GBP'];

// TODO: Add mock data
const mockItems: ShoppingListItem[] = [
  {
    id: '1',
    name: 'Milkkkkkk kkkkkkkkk kkkk and some other stuff',
    quantity: '2000',
    unit: 'L',
    category: 'Dairy',
    isBought: false,
    isCurrent: false,
    isDeleted: false,
    estimatedPrice: 10000,
    currency: 'USD',
    addedBy: 'Alice',
    addedAt: new Date(),
  },
  {
    id: '2',
    name: 'Bread',
    quantity: '1',
    unit: 'pcs',
    category: 'Bakery',
    isBought: false,
    isCurrent: true,
    isDeleted: false,
    estimatedPrice: 5,
    currency: 'USD',
    addedBy: 'Alice',
    addedAt: new Date(),
  },
  {
    id: '3',
    name: 'Eggs',
    quantity: '12',
    unit: 'pcs',
    category: 'Dairy',
    isBought: true,
    isCurrent: false,
    isDeleted: false,
    estimatedPrice: 10,
    currency: 'USD',
    addedBy: 'Alice',
    addedAt: new Date(),
  },
  {
    id: '4',
    name: 'Chicken',
    quantity: '1',
    unit: 'kg',
    category: 'Meat',
    isBought: false,
    isCurrent: false,
    isDeleted: false,
    estimatedPrice: 10,
    currency: 'USD',
    addedBy: 'Alice',
    addedAt: new Date(),
  },
  {
    id: '5',
    name: 'Beer',
    quantity: '1',
    unit: 'L',
    category: 'Alcohol',
    isBought: true,
    isCurrent: true,
    isDeleted: false,
    estimatedPrice: 10,
    currency: 'USD',
    addedBy: 'Alice',
    addedAt: new Date(),
  },
  {
    id: '6',
    name: 'Beer',
    quantity: '1',
    unit: 'L',
    category: 'Alcohol',
    isBought: false,
    isCurrent: true,
    isDeleted: true,
    estimatedPrice: 10,
    currency: 'USD',
    addedBy: 'Alice',
    addedAt: new Date(),
  },
  {
    id: '7',
    name: 'Other',
    quantity: '1',
    unit: 'L',
    category: '',
    isBought: false,
    isCurrent: false,
    isDeleted: false,
    estimatedPrice: 0,
    currency: 'USD',
    addedBy: 'Alice',
    addedAt: new Date(),
  }
];

const MainListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleAddFirstItem = (): void => {
    setIsAddModalOpen(true);
  };

  const handleSaveItem = (input: any): void => {
    setItems((prev) => [
      ...prev,
      ...mockItems,
      // {
      //   id: String(Date.now()),
      //   name: input.name,
      //   quantity: input.quantity,
      //   currency: input.currency,
      //   unit: input.unit,
      //   estimatedPrice: input.estimatedPrice || 0,
      //   category: input.category,
      //   isBought: false,
      //   isCurrent: input.isCurrent || false,
      //   addedBy: mockUser.id,
      //   addedAt: new Date(),
      // },
    ]);
    setIsAddModalOpen(false);
  };

  const handleCancelAdd = (): void => {
    setIsAddModalOpen(false);
  };

  /**
   * Toggle a category in the selectedCategories array.
   * @param category - Category to toggle
   */
  const handleToggleCategory = (category: string): void => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  /**
   * Filter items by selected categories. If none selected, return all.
   * @param list - List of items to filter
   * @returns Filtered list of items
   */
  const filterByCategory = (list: ShoppingListItem[]): ShoppingListItem[] => {
    if (selectedCategories.length === 0) return list;
    return list.filter((item) => selectedCategories.includes(item.category));
  };

  /**
   * Get unique categories from items list, replacing empty category with 'Other'
   * @param items - List of shopping list items to extract categories from
   * @returns Array of unique category names with empty category replaced by 'Other'
   */
  const getUniqueCategories = (items: ShoppingListItem[]): string[] => {
    const categories = Array.from(new Set(items.map(item => item.category)));
    return categories.includes('') ? [...categories.filter(c => c !== ''), 'Other'] : categories;
  };

  /**
   * Map filter chip label to category value.
   * @param label - Chip label
   * @returns Category value
   */
  const getCategoryValue = (label: string): string => (label === 'Other' ? '' : label);

  // Grouping and sum logic
  const currentItems = filterByCategory(items.filter(item => item.isCurrent));
  const allItems = filterByCategory(items);

  const getGroupSum = (group: ShoppingListItem[]) =>
    group.reduce((sum, item) => sum + (item.estimatedPrice || 0), 0);

  const renderGroup = (label: string, groupItems: ShoppingListItem[]): React.ReactNode => {
    if (groupItems.length === 0) return null;
    return (
      <>
        <Box
          sx={{
            width: '100%',
            maxWidth: 600,
            px: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mt: 2,
            mb: 1,
          }}
        >
          <Typography variant="subtitle2">{label}</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            ${getGroupSum(groupItems)}
          </Typography>
        </Box>
        <ShoppingList
          items={groupItems}
          sx={{ width: '100%', maxWidth: 600, px: 1 }}
          onEdit={() => {}}
          onDelete={() => {}}
          onToggleBought={() => {}}
          onToggleCurrent={() => {}}
        />
      </>
    );
  };

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
          height: 56, // match your HeaderBar height
          zIndex: 2,
        }}
      >
        <HeaderBar user={mockUser} onSettings={() => {}} />
      </Box>

      {/* Main Content (scrollable) */}
      <Box
        sx={{
          position: 'absolute',
          top: 32, // header height
          bottom: 56, // footer height
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
        {items.length > 0 && getUniqueCategories(items).length > 1 && (
          <Stack
            direction="row"
            spacing={1}
            rowGap={2}
            sx={{ mb: 0, flexWrap: 'wrap', maxWidth: 600, width: '100%', justifyContent: 'center', px: 4 }}
          >
            {getUniqueCategories(items).map((label) => (
              <Chip
                key={label}
                label={label}
                clickable
                color={selectedCategories.includes(getCategoryValue(label)) ? 'primary' : 'default'}
                variant={selectedCategories.includes(getCategoryValue(label)) ? 'filled' : 'outlined'}
                onClick={() => handleToggleCategory(getCategoryValue(label))}
                sx={{ mb: 0 }}
              />
            ))}
          </Stack>
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
            {renderGroup('Current', currentItems)}
            {renderGroup('All', allItems)}
          </>
        )}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          height: 56, // match your FooterNav height
          zIndex: 2,
        }}
      >
        <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />
      </Box>

      {/* FAB */}
      {items.length > 0 && (
        <Fab
          color="primary"
          aria-label="Add Item"
          sx={{
            position: 'fixed',
            right: 24,
            bottom: 56 + 24, // footer height + spacing
            zIndex: 10,
            bgcolor: 'var(--color-primary)',
            color: '#fff',
            boxShadow: '0 2px 8px rgba(42,46,53,0.08)',
            '&:hover': {
              bgcolor: 'var(--color-primary-alt)',
            },
          }}
          onClick={() => setIsAddModalOpen(true)}
        >
          <AddIcon />
        </Fab>
      )}

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
