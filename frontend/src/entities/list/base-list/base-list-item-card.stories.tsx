import React from 'react';
import { BaseListItemCard } from '@/widgets/base-list-item-card';
import { Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export default {
  title: 'features/base-list/base-list-item-card',
  component: BaseListItemCard,
};

const getSwipeVisuals = ({ direction, theme }: { direction: 'left' | 'right'; theme: any }) => ({
  icon: InfoIcon,
  background: direction === 'left' ? theme.palette.error.main : theme.palette.success.main,
});

export const Default = () => (
  <Box width={400}>
    <BaseListItemCard
      title="Milk"
      secondaryText="2L"
      checked={false}
      highlighted={false}
      onToggle={() => alert('Toggled')}
      onClick={() => alert('Clicked')}
      getSwipeVisuals={getSwipeVisuals}
      isExpanded={false}
      onExpand={() => alert('Expanded')}
    />
  </Box>
);

export const Checked = () => (
  <Box width={400}>
    <BaseListItemCard
      title="Eggs"
      secondaryText="12"
      checked
      onToggle={() => alert('Toggled')}
      getSwipeVisuals={getSwipeVisuals}
      isExpanded={false}
      onExpand={() => alert('Expanded')}
    />
  </Box>
);

export const Highlighted = () => (
  <Box width={400}>
    <BaseListItemCard
      title="Bread"
      secondaryText="12"
      highlighted
      onClick={() => alert('Clicked')}
      getSwipeVisuals={getSwipeVisuals}
      isExpanded={false}
      onExpand={() => alert('Expanded')}
    />
  </Box>
);

export const Disabled = () => (
  <Box width={400}>
    <BaseListItemCard
      title="Butter"
      secondaryText="12"
      canceled
      onToggle={() => alert('Toggled')}
      getSwipeVisuals={getSwipeVisuals}
      isExpanded={false}
      onExpand={() => alert('Expanded')}
    />
  </Box>
); 