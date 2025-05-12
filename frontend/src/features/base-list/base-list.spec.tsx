import React from 'react';
import { render } from '@testing-library/react';
import { BaseList } from './base-list';
import '@testing-library/jest-dom';

describe('BaseList', () => {
  it('renders items using renderItem', () => {
    const items = ['a', 'b', 'c'];
    const { getByText } = render(
      <BaseList items={items} renderItem={(item) => <span>{item}</span>} />
    );
    items.forEach((item) => {
      expect(getByText(item)).not.toBeNull();
    });
  });

  it('applies sx prop', () => {
    const items = ['x'];
    const { container } = render(
      <BaseList items={items} renderItem={(item) => <span>{item}</span>} sx={{ background: 'red' }} />
    );
    const list = container.querySelector('ul');
    expect(list).not.toBeNull();
    // Check that the MUI class is present
    expect(list!.className).toMatch(/MuiList-root/);
    // Optionally, snapshot the HTML
    expect(list).toMatchSnapshot();
  });

  it('renders nothing for empty items', () => {
    const { container } = render(
      <BaseList items={[]} renderItem={() => <span>should not render</span>} />
    );
    // Only the List element should be present
    expect(container.querySelectorAll('li').length).toBe(0);
  });
}); 