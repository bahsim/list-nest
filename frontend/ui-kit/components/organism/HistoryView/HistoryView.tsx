import * as React from 'react';
import type { HistoryGroup, HistoryAnalytics } from 'src/entities/history-list/types';
import { AnalyticsSummaryPanel } from '../AnalyticsSummaryPanel/AnalyticsSummaryPanel';
import styles from './HistoryView.module.scss';

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
    <section className={styles.historyView}>
      <h2>Purchase History</h2>
      {groups.map(group => (
        <div key={group.date} className={styles.historyView__group}>
          <button onClick={() => toggleGroup(group.date)} className={styles.historyView__toggleBtn}>
            {group.date} {expanded[group.date] ? '▼' : '►'}
          </button>
          {expanded[group.date] && (
            <ul className={styles.historyView__list}>
              {group.items.map(item => (
                <li key={item.id} className={styles.historyView__item}>
                  <span className={styles.historyView__itemName}>{item.name}</span>
                  <span className={styles.historyView__itemQuantity}>{item.quantity}</span>
                  <span className={styles.historyView__itemPrice}>{item.estimatedPrice ? `$${item.estimatedPrice}` : ''}</span>
                  <span className={styles.historyView__itemCategory}>{item.category}</span>
                  {item.isCurrent && <span className={styles.historyView__itemFocus}>★</span>}
                  <button onClick={() => onRestore(item.id)} className={styles.historyView__restoreBtn} aria-label="Restore">⟲</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <AnalyticsSummaryPanel analytics={analytics} />
    </section>
  );
}; 