import React, { useState } from 'react';
import { HeaderBar } from '@ui-kit/components/organism/HeaderBar/HeaderBar';
import { FooterNav } from '@ui-kit/components/organism/FooterNav/FooterNav';
import { ShoppingList } from '@ui-kit/components/organism/ShoppingList/ShoppingList';
import type { ShoppingListItem, User } from '@ui-kit/components/types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const mockUser: User = {
  id: '1',
  name: 'Alice Johnson',
  // avatarUrl: 'https://i.pravatar.cc/150?img=1',
};

const MainListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [items] = useState<ShoppingListItem[]>([]); // Empty list for now

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
      <HeaderBar user={mockUser} onSettings={() => { }} />
      <Box
        component="main"
        flex={1}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
      >
        {items.length === 0 ? (
          <Box
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            role="status"
            aria-live="polite"
          >
            <Box sx={{ fontSize: 48, mb: 2 }}>
              <img
                src="/hero.png"
                alt="Empty list"
                style={{ width: '100%', height: 'auto', display: 'block', maxWidth: '100vw' }}
              />
            </Box>
            <Typography variant="h5" color="primary.main" fontWeight={700} gutterBottom>No List Yet</Typography>
            <Typography variant="body1" color="text.primary">Create a new list to get started.</Typography>
          </Box>
        ) : (
          <ShoppingList
            items={items}
            onEdit={() => { }}
            onDelete={() => { }}
            onToggleBought={() => { }}
            onToggleFocus={() => { }}
          />
        )}
      </Box>
      <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />
    </Box>
  );
};

export default MainListView; 