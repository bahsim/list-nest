import * as React from 'react';
import { HeaderBar } from '../../components/organism/header-bar/header-bar';
import { SearchBar } from '../../components/atomic/SearchBar/SearchBar';
import { FilterBar } from '../../components/molecule/FilterBar/FilterBar';
import { HistoryView } from '../../components/organism/HistoryView/HistoryView';
import { FooterNav } from '../../components/organism/footer-nav/footer-nav';
import type { HistoryGroup, HistoryAnalytics } from 'src/entities/history-list/types';
import type { User } from 'src/entities/user/types';
import { SPACING } from '../../tokens/spacing';

export const HistoryPage: React.FC = () => {
  const [search, setSearch] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [dateRange, setDateRange] = React.useState({ from: '', to: '' });
  const [focusOnly, setFocusOnly] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('history');
  const user: User = { id: '1', name: 'Alice', avatarUrl: 'https://i.pravatar.cc/150?img=1' };
  const groups: HistoryGroup[] = [];
  const analytics: HistoryAnalytics = { totalItems: 0, totalSpending: 0, frequentItems: [], categoryBreakdown: [] };

  return (
    <div style={{ paddingBottom: SPACING.XL + SPACING.LG }}>
      <HeaderBar user={user} onSettings={() => {}} />
      <SearchBar value={search} onChange={setSearch} placeholder="Search for 'Milk'" />
      <FilterBar
        categories={['Dairy', 'Bakery']}
        selectedCategory={category}
        onCategoryChange={setCategory}
        dateRange={dateRange}
        onDateRangeChange={setDateRange}
        focusOnly={focusOnly}
        onFocusChange={setFocusOnly}
      />
      <HistoryView groups={groups} analytics={analytics} onRestore={() => {}} />
      <FooterNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
}; 