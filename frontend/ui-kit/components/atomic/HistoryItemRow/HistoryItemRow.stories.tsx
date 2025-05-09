import React from 'react';
import { HistoryItemRow } from './HistoryItemRow';
import type { HistoryItem, User } from '../../types';

export default {
  title: 'atomic/HistoryItemRow',
  component: HistoryItemRow,
};

const mockItem: HistoryItem = {
  id: '1',
  name: 'Milk',
  quantity: '2L',
  estimatedPrice: 3.5,
  category: 'Dairy',
  isFocused: true,
  purchasedAt: new Date(),
  checkedOffBy: 'user-1',
};

const mockUser: User = {
  id: 'user-1',
  name: 'Alice',
  avatarUrl: 'https://i.pravatar.cc/40?img=1',
};

export const Basic = () => (
  <HistoryItemRow item={mockItem} user={mockUser} onRestore={() => {}} />
); 