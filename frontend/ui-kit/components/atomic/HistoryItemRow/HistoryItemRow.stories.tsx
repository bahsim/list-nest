import React from 'react';
import { HistoryItemRow } from './HistoryItemRow';
import type { HistoryItem } from 'src/entities/history-list/types';
import type { User } from 'src/entities/user/types';

export default {
  title: 'atomic/HistoryItemRow',
  component: HistoryItemRow,
};

const mockItem: HistoryItem = {
  id: '1',
  name: 'Milk',
  quantity: 2,
  estimatedPrice: 3.5,
  category: 'Dairy',
  isCurrent: true,
  purchasedAt: new Date(),
  checkedOffBy: 'user-1',
  isBought: true,
  isDeleted: false,
  isRestored: false,
  notes: 'This is a note for the item, it can be very long and contain a lot of information',
  unit: 'l',
  date: '2021-01-01',
};

const mockUser: User = {
  id: 'user-1',
  name: 'Alice',
  avatarUrl: 'https://i.pravatar.cc/40?img=1',
};

export const Basic = () => (
  <HistoryItemRow item={mockItem} user={mockUser} onRestore={() => {}} />
); 