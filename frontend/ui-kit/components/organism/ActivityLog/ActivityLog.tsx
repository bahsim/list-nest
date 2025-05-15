import * as React from 'react';
import type { Activity } from 'src/entities/user/types';
import styles from './ActivityLog.module.scss';

/**
 * ActivityLog displays a list of recent user activities.
 * @param activities - Array of activity objects.
 * @param isCollapsed - Whether the log is collapsed.
 * @param onToggleCollapse - Collapse toggle handler.
 */
export interface ActivityLogProps {
  activities: Activity[];
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const ActivityLog: React.FC<ActivityLogProps> = ({ activities, isCollapsed = false, onToggleCollapse }) => (
  <section className={styles.activityLog}>
    <button onClick={onToggleCollapse} className={styles.activityLog__toggleBtn}>
      Activity Log {isCollapsed ? '▼' : '▲'}
    </button>
    {!isCollapsed && (
      <ul className={styles.activityLog__list}>
        {activities.map(a => (
          <li key={a.id} className={styles.activityLog__item}>
            <span className={styles.activityLog__user}>{a.user.name}</span> {a.action} <span className={styles.activityLog__timestamp}>{a.timestamp.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    )}
  </section>
); 