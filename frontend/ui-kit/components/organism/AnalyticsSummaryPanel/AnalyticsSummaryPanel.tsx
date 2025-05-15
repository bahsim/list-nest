import * as React from 'react';
import type { HistoryAnalytics } from 'src/entities/history-list/types';
import styles from './AnalyticsSummaryPanel.module.scss';

/**
 * AnalyticsSummaryPanel displays a summary of analytics for history view.
 * @param analytics - Analytics data.
 * @param isCollapsed - Whether the panel is collapsed.
 * @param onToggleCollapse - Collapse toggle handler.
 */
export interface AnalyticsSummaryPanelProps {
  analytics: HistoryAnalytics;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
}

export const AnalyticsSummaryPanel: React.FC<AnalyticsSummaryPanelProps> = ({ analytics, isCollapsed = false, onToggleCollapse }) => (
  <section className={styles.analyticsSummaryPanel}>
    <button onClick={onToggleCollapse} className={styles.analyticsSummaryPanel__toggleBtn}>
      Analytics Summary {isCollapsed ? '▼' : '▲'}
    </button>
    {!isCollapsed && (
      <div className={styles.analyticsSummaryPanel__content}>
        <div>Total Items: <b>{analytics.totalItems}</b></div>
        <div>Total Spending: <b>${analytics.totalSpending.toFixed(2)}</b></div>
        <div>Frequent Items:
          <ul className={styles.analyticsSummaryPanel__list}>
            {analytics.frequentItems.map(f => <li key={f.name}>{f.name} ({f.count}x)</li>)}
          </ul>
        </div>
        <div>Category Breakdown:
          <ul className={styles.analyticsSummaryPanel__list}>
            {analytics.categoryBreakdown.map(c => <li key={c.category}>{c.category}: {c.percent}%</li>)}
          </ul>
        </div>
      </div>
    )}
  </section>
); 