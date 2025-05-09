import * as React from 'react';
import type { Reminder } from '../../types';
import styles from './ReminderBanner.module.scss';

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
  <div className={styles.banner}>
    {reminders.length === 0 ? (
      <span className={styles.noReminders}>No reminders</span>
    ) : (
      reminders.map(r => (
        <span key={r.id} className={styles.reminder}>
          {r.text}
          <button onClick={() => onAdd(r.id)} className={styles.addButton}>Add</button>
        </span>
      ))
    )}
  </div>
); 