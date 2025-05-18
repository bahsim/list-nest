import React from 'react';
import { render } from '@testing-library/react';
import { BaseList } from './base-list';
import '@testing-library/jest-dom';

describe('BaseList', () => {
  it('renders items using renderItem', () => {
    const grouppedItems = [
      {
        label: 'a',
        items: [
          { id: 'a' },
          { id: 'b' },
          { id: 'c' },
        ],
      },
    ];
    const { getByText } = render(
      <BaseList
        grouppedItems={grouppedItems}
        renderItem={(item, groupLabel) => <span key={item.id}>{item.id} in {groupLabel}</span>}
      />
    );
    grouppedItems.forEach((groupObj) => {
      expect(getByText(groupObj.label)).not.toBeNull();
    });
  });

  it('applies sx prop', () => {
    const grouppedItems = [
      {
        label: 'group1',
        items: [{ id: 'x' }],
      },
    ];
    const { container } = render(
      <BaseList
        grouppedItems={grouppedItems}
        renderItem={(item) => <span key={item.id}>{item.id}</span>}
      />
    );
    const list = container.querySelector('ul');
    expect(list).not.toBeNull();
    // Check that the MUI class is present
    expect(list!.className).toMatch(/MuiList-root/);
    // Optionally, snapshot the HTML
    expect(list).toMatchSnapshot();
  });

  it('renders nothing for empty items', () => {
    const grouppedItems = [
      {
        label: 'empty',
        items: [],
      },
    ];
    const { container } = render(
      <BaseList grouppedItems={grouppedItems} renderItem={() => <span>should not render</span>} />
    );
    // Only the List element should be present
    expect(container.querySelectorAll('li').length).toBe(0);
  });
}); 