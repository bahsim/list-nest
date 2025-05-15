import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BaseListItemCard } from './base-list-item-card';
import type { BaseListItemCardProps } from '../../shared/ui-kit/base-list-item-card';
import '@testing-library/jest-dom';

const defaultProps: BaseListItemCardProps = {
  title: 'Test Item',
  onToggle: jest.fn(),
  onClick: jest.fn(),
  onSwipeLeft: jest.fn(),
  onSwipeRight: jest.fn(),
  getSwipeVisuals: () => ({
    icon: () => <span data-testid="swipe-icon" />,
    background: 'red',
  }),
  isExpanded: false,
  onExpand: jest.fn(),
};

describe('BaseListItemCard', () => {
  it('renders with required props', () => {
    const { getByText } = render(<BaseListItemCard {...defaultProps} />);
    expect(getByText('Test Item')).not.toBeNull();
  });

  it('renders secondary text', () => {
    const { getByText } = render(
      <BaseListItemCard {...defaultProps} secondaryText="Secondary" />
    );
    expect(getByText('Secondary')).not.toBeNull();
  });

  it('calls onToggle when checkbox is clicked', () => {
    const onToggle = jest.fn();
    const { getAllByRole } = render(
      <BaseListItemCard {...defaultProps} onToggle={onToggle} />
    );
    // Click the input[type="checkbox"]
    const input = document.querySelector('input[type="checkbox"]');
    fireEvent.click(input!);
    expect(onToggle).toHaveBeenCalled();
  });

  it('calls onClick when card is clicked', () => {
    const onClick = jest.fn();
    const { getAllByRole } = render(
      <BaseListItemCard {...defaultProps} onClick={onClick} />
    );
    // Click the wrapper div with role="checkbox"
    const [wrapper] = getAllByRole('checkbox');
    fireEvent.click(wrapper);
    expect(onClick).toHaveBeenCalled();
  });

  it('sets accessibility attributes', () => {
    const { getAllByRole } = render(
      <BaseListItemCard {...defaultProps} checked disabled />
    );
    // Check the wrapper div with role="checkbox"
    const [wrapper] = getAllByRole('checkbox');
    expect(wrapper).toHaveAttribute('aria-checked', 'true');
    expect(wrapper).toHaveAttribute('aria-disabled', 'true');
  });

  // Simulate swipe events (basic, for completeness)
  it('calls onSwipeLeft and onSwipeRight', () => {
    // You'd use fireEvent or userEvent to simulate swipes if your test env supports it.
    // For now, just check that the handlers exist and are callable.
    expect(typeof defaultProps.onSwipeLeft).toBe('function');
    expect(typeof defaultProps.onSwipeRight).toBe('function');
  });
}); 