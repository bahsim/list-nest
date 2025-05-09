import React, { useState } from 'react';
import { HeaderBar } from '@ui-kit/components/organism/HeaderBar/HeaderBar';
import { FooterNav } from '@ui-kit/components/organism/FooterNav/FooterNav';
import { ShoppingList } from '@ui-kit/components/organism/ShoppingList/ShoppingList';
import type { ShoppingListItem, User } from '@ui-kit/components/types';
import styles from './MainListView.module.scss';

const mockUser: User = {
  id: '1',
  name: 'Alice',
  avatarUrl: 'https://i.pravatar.cc/150?img=1',
};

const MainListView: React.FC = () => {
  const [activeTab, setActiveTab] = useState('list');
  const [items] = useState<ShoppingListItem[]>([]); // Empty list for now

  return (
    <div className={styles.mainListView}>
      <HeaderBar user={mockUser} onSettings={() => {}} />
      <main className={styles.mainListView__main}>
        {items.length === 0 ? (
          <div className={styles.mainListView__empty}>
            <div className={styles.mainListView__emptyIcon}>📝</div>
            <h2 className={styles.mainListView__emptyTitle}>No List Yet</h2>
            <p className={styles.mainListView__emptyText}>Create a new list to get started.</p>
          </div>
        ) : (
          <ShoppingList
            items={items}
            onEdit={() => {}}
            onDelete={() => {}}
            onToggleBought={() => {}}
            onToggleFocus={() => {}}
          />
        )}
      </main>
      <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default MainListView; 