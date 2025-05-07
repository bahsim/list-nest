import * as React from 'react';
import type { HistoryAnalytics } from './types';

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
  <section style={{ background: '#FBF3DB', borderRadius: 12, boxShadow: 'var(--shadow-card, 0 2px 8px rgba(42,46,53,0.08))', padding: 16, margin: '16px 0' }}>
    <button onClick={onToggleCollapse} style={{ background: 'none', border: 'none', fontWeight: 700, fontSize: 16, cursor: 'pointer', marginBottom: 8 }}>
      Analytics Summary {isCollapsed ? '▼' : '▲'}
    </button>
    {!isCollapsed && (
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        <div>Total Items: <b>{analytics.totalItems}</b></div>
        <div>Total Spending: <b>${analytics.totalSpending.toFixed(2)}</b></div>
        <div>Frequent Items:
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {analytics.frequentItems.map(f => <li key={f.name}>{f.name} ({f.count}x)</li>)}
          </ul>
        </div>
        <div>Category Breakdown:
          <ul style={{ margin: 0, paddingLeft: 16 }}>
            {analytics.categoryBreakdown.map(c => <li key={c.category}>{c.category}: {c.percent}%</li>)}
          </ul>
        </div>
      </div>
    )}
  </section>
); 