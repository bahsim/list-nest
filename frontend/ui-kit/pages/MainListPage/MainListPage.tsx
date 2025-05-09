import * as React from 'react';
import { HeaderBar } from '../../components/organism/HeaderBar/HeaderBar';
import { ShoppingList } from '../../components/organism/ShoppingList/ShoppingList';
import { AddItemForm } from '../../components/molecule/AddItemForm/AddItemForm';
import { ReminderBanner } from '../../components/atomic/ReminderBanner/ReminderBanner';
import { ActivityLog } from '../../components/organism/ActivityLog/ActivityLog';
import { FooterNav } from '../../components/organism/FooterNav/FooterNav';
import type { ShoppingListItem, User, Reminder, Activity, AddEditItemInput } from '../../components/types';

export const MainListPage: React.FC = () => {
  const [items, setItems] = React.useState<ShoppingListItem[]>([]);
  const [reminders, setReminders] = React.useState<Reminder[]>([]);
  const [activities, setActivities] = React.useState<Activity[]>([]);
  const [activeTab, setActiveTab] = React.useState('list');
  const user: User = { id: '1', name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?img=1' };

  return (
    <div style={{ paddingBottom: 56 }}>
      <HeaderBar user={user} onSettings={() => {}} />
      <ReminderBanner reminders={reminders} onAdd={id => {}} />
      <AddItemForm onAdd={(input: AddEditItemInput) => {}} categories={['Dairy', 'Bakery']} units={['pcs', 'L']} />
      <ShoppingList
        items={items}
        onEdit={() => {}}
        onDelete={() => {}}
        onToggleBought={() => {}}
        onToggleFocus={() => {}}
      />
      <ActivityLog activities={activities} />
      <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}; 