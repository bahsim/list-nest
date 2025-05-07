import * as React from 'react';
import type { Activity } from './types';

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
  <section style={{ background: '#FBF3DB', borderRadius: 12, boxShadow: 'var(--shadow-card, 0 2px 8px rgba(42,46,53,0.08))', padding: 16, margin: '16px 0' }}>
    <button onClick={onToggleCollapse} style={{ background: 'none', border: 'none', fontWeight: 700, fontSize: 16, cursor: 'pointer', marginBottom: 8 }}>
      Activity Log {isCollapsed ? '▼' : '▲'}
    </button>
    {!isCollapsed && (
      <ul style={{ margin: 0, paddingLeft: 16 }}>
        {activities.map(a => (
          <li key={a.id} style={{ marginBottom: 4, fontSize: 14 }}>
            <span style={{ fontWeight: 700 }}>{a.user.name}</span> {a.action} <span style={{ color: '#99A49A' }}>{a.timestamp.toLocaleString()}</span>
          </li>
        ))}
      </ul>
    )}
  </section>
); 