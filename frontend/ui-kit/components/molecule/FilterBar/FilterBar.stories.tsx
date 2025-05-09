import React from 'react';
import { FilterBar } from './FilterBar';

export default {
  title: 'molecule/FilterBar',
  component: FilterBar,
};

const categories = ['Dairy', 'Bakery', 'Produce', 'Meat'];
const dateRange = { from: '2023-01-01', to: '2023-12-31' };

export const Basic = () => (
  <FilterBar
    categories={categories}
    selectedCategory=""
    onCategoryChange={() => {}}
    dateRange={dateRange}
    onDateRangeChange={() => {}}
    focusOnly={false}
    onFocusChange={() => {}}
  />
); 