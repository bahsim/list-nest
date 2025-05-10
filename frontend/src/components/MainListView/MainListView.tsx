import React, { useState } from 'react';
import { HeaderBar } from '@ui-kit/components/organism/HeaderBar/HeaderBar';
import { FooterNav } from '@ui-kit/components/organism/FooterNav/FooterNav';
import { ShoppingList } from '@ui-kit/components/organism/ShoppingList/ShoppingList';
import type { ShoppingListItem, User } from '@ui-kit/components/types';
import Box from '@mui/material/Box';
import EmptyState from '@ui-kit/components/atomic/EmptyState/EmptyState';
import { AddEditItemModal } from '@ui-kit/components/organism/AddEditItemModal/AddEditItemModal';

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
      width="100vw"
      minHeight="100dvh"
      display="flex"
      flexDirection="column"
      bgcolor="var(--color-bg)"
      pb={7} // 56px
      boxSizing="border-box"
    >
      <HeaderBar user={mockUser} onSettings={() => {}} />
      {items.length === 0 ? (
        <Box
          component="main"
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <EmptyState
            title="No items yet"
            description="Add your first item to this list."
            buttonLabel="Add First Item"
            onButtonClick={handleAddFirstItem}
            imageAlt="No items yet"
          />
        </Box>
      ) : (
        <Box
          component="main"
          flex={1}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          pt={5}
        >
          <ShoppingList
            sx={{ width: '100%', maxWidth: 600, px: 1 }}
            items={items}
            onEdit={() => {}}
            onDelete={() => {}}
            onToggleBought={() => {}}
            onToggleFocus={() => {}}
          />
        </Box>
      )}
      {isAddModalOpen && (
        <AddEditItemModal
          onSave={handleSaveItem}
          onCancel={handleCancelAdd}
          categories={mockCategories}
          units={mockUnits}
          currencies={mockCurrencies}
        />
      )}
      <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />
    </Box>
  );
};

export default MainListView;
