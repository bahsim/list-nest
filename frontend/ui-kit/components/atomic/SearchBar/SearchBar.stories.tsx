import React from 'react';
import { SearchBar } from './SearchBar';

export default {
  title: 'atomic/SearchBar',
  component: SearchBar,
};

export const Basic = () => (
  <SearchBar value="" onChange={() => {}} placeholder="Search..." />
); 