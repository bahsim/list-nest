import React from 'react';
import { MainList } from '@/features/main-list/main-list';
import type { MainListItem } from '@/entities/list/types';
import { GroupHeader } from './group-header';

interface AllGroupProps {
  items: MainListItem[];
  getGroupSum: (items: MainListItem[]) => number;
}

export const AllGroup: React.FC<AllGroupProps> = ({ items, getGroupSum }) => (
  <>
    <GroupHeader label="All" sum={getGroupSum(items)} />
    <MainList items={items} sx={{ width: '100%', maxWidth: 600, px: 1 }} group="all" />
  </>
); 