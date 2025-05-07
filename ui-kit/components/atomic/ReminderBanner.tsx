import * as React from 'react';
import type { Reminder } from '../types';

/**
 * ReminderBanner displays reminders for low-stock or important items.
 * @param reminders - Array of reminder objects.
 * @param onAdd - Handler for one-tap add.
 */
export interface ReminderBannerProps {
  reminders: Reminder[];
  onAdd: (reminderId: string) => void;
}

export const ReminderBanner: React.FC<ReminderBannerProps> = ({ reminders, onAdd }) => (
  <div style={{ background: '#FFFBE6', border: '1px solid #F9C74F', borderRadius: 8, padding: 12, margin: '16px 0', display: 'flex', alignItems: 'center', gap: 16 }}>
    {reminders.length === 0 ? (
      <span style={{ color: '#99A49A' }}>No reminders</span>
    ) : (
      reminders.map(r => (
        <span key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {r.text}
          <button onClick={() => onAdd(r.id)} style={{ background: '#F76C5E', color: '#fff', border: 'none', borderRadius: 4, padding: '2px 8px', fontWeight: 700, marginLeft: 4 }}>Add</button>
        </span>
      ))
    )}
  </div>
); 