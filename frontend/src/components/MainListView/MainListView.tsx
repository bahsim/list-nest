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
    isFocused: false,
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
    isFocused: true,
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
    isFocused: false,
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
    isFocused: false,
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
    isFocused: true,
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
    isFocused: true,
    isDeleted: true,
    estimatedPrice: 10,
    currency: 'USD',
    addedBy: 'Alice',
    addedAt: new Date(),
  },
];

const MainListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [items, setItems] = useState<ShoppingListItem[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

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
      //   isFocused: input.isFocused || false,
      //   addedBy: mockUser.id,
      //   addedAt: new Date(),
      // },
    ]);
    setIsAddModalOpen(false);
  };

  const handleCancelAdd = (): void => {
    setIsAddModalOpen(false);
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
          top: 56, // header height
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
        {items.length === 0 ? (
          <EmptyState
            title="No items yet"
            description="Add your first item to this list."
            buttonLabel="Add First Item"
            onButtonClick={handleAddFirstItem}
            imageAlt="No items yet"
          />
        ) : (
          <ShoppingList
            sx={{ width: '100%', maxWidth: 600, px: 1 }}
            items={items}
            onEdit={() => {}}
            onDelete={() => {}}
            onToggleBought={() => {}}
            onToggleFocus={() => {}}
          />
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
