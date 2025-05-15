import React from 'react';
import { MainList } from '@/features/main-list/main-list';
import type { MainListItem } from '@/entities/list/types';
import { GroupHeader } from './group-header';

interface CurrentGroupProps {
  items: MainListItem[];
  getGroupSum: (items: MainListItem[]) => number;
}

export const CurrentGroup: React.FC<CurrentGroupProps> = ({ items, getGroupSum }) => (
  <>
    <GroupHeader label="Current" sum={getGroupSum(items)} />
    <MainList items={items} sx={{ width: '100%', maxWidth: 600, px: 1 }} group="current" />
  </>
); 