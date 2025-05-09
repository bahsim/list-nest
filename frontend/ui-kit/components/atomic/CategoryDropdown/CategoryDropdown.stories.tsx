import React from 'react';
import { CategoryDropdown } from './CategoryDropdown';

export default {
  title: 'atomic/CategoryDropdown',
  component: CategoryDropdown,
};

const categories = ['Dairy', 'Bakery', 'Produce', 'Meat'];

export const Basic = () => (
  <CategoryDropdown categories={categories} value="Dairy" onChange={() => {}} />
); 