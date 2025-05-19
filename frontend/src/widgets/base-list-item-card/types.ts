import type { Theme } from '@mui/material/styles';
import type * as React from 'react';

/**
 * Props for BaseListItemCard.
 */
export interface BaseListItemCardProps {
  /**
   * Main title or label.
   */
  readonly title: string;
  /**
   * Optional secondary text.
   */
  readonly secondaryText: string | null;
  /**
   * Whether the item is checked (e.g., bought).
   */
  readonly checked?: boolean;
  /**
   * Whether the item is highlighted (e.g., current).
   */
  readonly highlighted?: boolean;
  /**
   * Whether the item is disabled (e.g., deleted).
   */
  readonly canceled?: boolean;
  /**
   * Whether the item is completed (e.g., bought).
   */
  readonly completed?: boolean;
  /**
   * Handler for main click/edit.
   */
  readonly onClick?: () => void;
  /**
   * Handler for swipe left.
   */
  readonly onSwipeLeft?: () => void;
  /**
   * Handler for swipe right.
   */
  readonly onSwipeRight?: () => void;
  /**
   * Function to get swipe visuals (icon component, background) based on swipe state.
   */
  readonly getSwipeVisuals?: (args: { direction: 'left' | 'right'; theme: Theme }) => {
    icon: React.ElementType;
    background: string;
  };
  /**
   * Optional style overrides.
   */
  readonly sx?: any;
  /**
   * Whether the card is expanded to show extra content (controlled mode only).
   */
  readonly isExpanded: boolean;
  /**
   * Handler to expand/collapse the card (controlled mode only).
   */
  readonly onExpand: () => void;
  /**
   * Optional render prop for expanded content below the card content.
   */
  readonly renderExpandedContent?: React.ReactNode;
  /**
   * Optional background color for the category.
   */
  readonly categoryColor?: string;
}

export interface BaseListItemCardContentProps {
  title: string;
  secondaryText?: string;
  checked: boolean;
  highlighted: boolean;
  completed: boolean;
  canceled: boolean;
  isExpanded: boolean;
  theme: Theme;
  renderExpandedContent?: React.ReactNode;
} 