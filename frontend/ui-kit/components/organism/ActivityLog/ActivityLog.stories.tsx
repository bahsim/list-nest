import React from 'react';
import { ActivityLog } from './ActivityLog';
import type { Activity } from 'src/entities/user/types';

export default {
  title: 'organism/ActivityLog',
  component: ActivityLog,
};

const mockActivities: Activity[] = [
  {
    id: 'a1',
    user: { id: 'u1', name: 'Alice', avatarUrl: '' },
    action: 'added Milk to the list',
    timestamp: new Date(),
  },
  {
    id: 'a2',
    user: { id: 'u2', name: 'Bob', avatarUrl: '' },
    action: 'checked off Bread',
    timestamp: new Date(),
  },
];

export const Basic = () => (
  <ActivityLog activities={mockActivities} isCollapsed={false} onToggleCollapse={() => {}} />
); 