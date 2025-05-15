import React from 'react';
import { ReminderBanner } from './ReminderBanner';
// import type { Reminder } from '../../types';

type Reminder = {
  id: string;
  text: string;
  onAdd: () => void;
};

export default {
  title: 'atomic/ReminderBanner',
  component: ReminderBanner,
};

const mockReminders: Reminder[] = [
  { id: 'r1', text: "Don't forget to buy bread!", onAdd: () => {} },
  { id: 'r2', text: 'Eggs are running low!', onAdd: () => {} },
];

export const Basic = () => (
  <ReminderBanner reminders={mockReminders} onAdd={() => {}} />
); 