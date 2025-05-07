import * as React from 'react';
import type { HistoryGroup, HistoryAnalytics } from './types';
import { AnalyticsPanel } from './AnalyticsPanel';

/**
 * HistoryView displays the purchase history grouped by date, with analytics and restore.
 * @param groups - Array of history groups (by date).
 * @param analytics - Analytics summary.
 * @param onRestore - Restore handler.
 */
export interface HistoryViewProps {
  groups: HistoryGroup[];
  analytics: HistoryAnalytics;
  onRestore: (itemId: string) => void;
}

export const HistoryView: React.FC<HistoryViewProps> = ({ groups, analytics, onRestore }) => {
  const [expanded, setExpanded] = React.useState<Record<string, boolean>>({});

  const toggleGroup = (date: string) => {
    setExpanded(e => ({ ...e, [date]: !e[date] }));
  };

  return (
    <section style={{ background: '#FFF', borderRadius: 12, boxShadow: 'var(--shadow-card, 0 2px 8px rgba(42,46,53,0.08))', padding: 16 }}>
      <h2>Purchase History</h2>
      {groups.map(group => (
        <div key={group.date} style={{ marginBottom: 16 }}>
          <button onClick={() => toggleGroup(group.date)} style={{ background: 'none', border: 'none', fontWeight: 700, fontSize: 16, cursor: 'pointer' }}>
            {group.date} {expanded[group.date] ? '▼' : '►'}
          </button>
          {expanded[group.date] && (
            <ul style={{ margin: 0, paddingLeft: 16 }}>
              {group.items.map(item => (
                <li key={item.id} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                  <span style={{ fontWeight: 700 }}>{item.name}</span>
                  <span style={{ color: '#927A7D', fontSize: 14 }}>{item.quantity}</span>
                  <span style={{ color: '#F76C5E', fontSize: 14 }}>{item.estimatedPrice ? `$${item.estimatedPrice}` : ''}</span>
                  <span style={{ background: '#99A49A', color: '#fff', borderRadius: 4, padding: '2px 6px', fontSize: 12 }}>{item.category}</span>
                  {item.isFocused && <span style={{ color: '#F9C74F', fontSize: 16 }}>★</span>}
                  <button onClick={() => onRestore(item.id)} style={{ background: 'none', border: 'none', color: '#4A90E2', cursor: 'pointer' }} aria-label="Restore">⟲</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <AnalyticsPanel analytics={analytics} />
    </section>
  );
}; 