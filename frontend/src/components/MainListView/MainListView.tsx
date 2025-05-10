import React, { useState } from 'react';
import { HeaderBar } from '@ui-kit/components/organism/HeaderBar/HeaderBar';
import { FooterNav } from '@ui-kit/components/organism/FooterNav/FooterNav';
import { ShoppingList } from '@ui-kit/components/organism/ShoppingList/ShoppingList';
import type {
  ShoppingListItem,
  User,
} from '@ui-kit/components/types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import EmptyState from '@ui-kit/components/atomic/EmptyState/EmptyState';

const mockUser: User = {
  id: '1',
  name: 'Alice Johnson',
  // avatarUrl: 'https://i.pravatar.cc/150?img=1',
};

const MainListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [items] = useState<ShoppingListItem[]>([]); // Empty list for now

  const handleAddFirstItem = (): void => {
    // TODO: Open add item modal or similar
    // Placeholder: alert('Add item modal');
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
      <Box
        component="main"
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
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
            items={items}
            onEdit={() => {}}
            onDelete={() => {}}
            onToggleBought={() => {}}
            onToggleFocus={() => {}}
          />
        )}
      </Box>
      <FooterNav
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </Box>
  );
};

export default MainListView;
