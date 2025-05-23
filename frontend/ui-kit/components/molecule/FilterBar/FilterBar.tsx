import * as React from 'react';
import styles from './FilterBar.module.scss';

/**
 * FilterBar provides category, date range, and focus filters for history view.
 * @param categories - List of categories.
 * @param selectedCategory - Selected category.
 * @param onCategoryChange - Category change handler.
 * @param dateRange - Selected date range.
 * @param onDateRangeChange - Date range change handler.
 * @param focusOnly - Whether focus filter is active.
 * @param onFocusChange - Focus filter change handler.
 */
export interface FilterBarProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  dateRange: { from: string; to: string };
  onDateRangeChange: (range: { from: string; to: string }) => void;
  focusOnly: boolean;
  onFocusChange: (focus: boolean) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({ categories, selectedCategory, onCategoryChange, dateRange, onDateRangeChange, focusOnly, onFocusChange }) => (
  <div className={styles.filterBar}>
    <select value={selectedCategory} onChange={e => onCategoryChange(e.target.value)}>
      <option value="">All Categories</option>
      {categories.map(c => <option key={c} value={c}>{c}</option>)}
    </select>
    <input type="date" value={dateRange.from} onChange={e => onDateRangeChange({ ...dateRange, from: e.target.value })} />
    <input type="date" value={dateRange.to} onChange={e => onDateRangeChange({ ...dateRange, to: e.target.value })} />
    <label className={styles.filterBar__focusLabel}>
      <input type="checkbox" checked={focusOnly} onChange={e => onFocusChange(e.target.checked)} /> Focused
    </label>
  </div>
); 