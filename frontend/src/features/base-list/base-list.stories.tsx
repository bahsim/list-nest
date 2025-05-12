import React from 'react';
import { BaseList } from './base-list';
import { BaseListItemCard } from './base-list-item-card';
import { Box } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorIcon from '@mui/icons-material/Error';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default {
  title: 'features/base-list/base-list',
  component: BaseList,
};

export const StringList = () => (
  <Box width={400}>
    <BaseList
      items={['Milk', 'Eggs', 'Bread']}
      renderItem={(item) => <div>{item}</div>}
    />
  </Box>
);

export const ObjectList = () => (
  <Box width={400}>
    <BaseList
      items={[{ name: 'Milk', checked: true }, { name: 'Eggs', checked: false }]}
      renderItem={(item) => <div>{item.name} {item.checked ? '✔️' : ''}</div>}
    />
  </Box>
);

const leftIcons = [InfoIcon, ErrorIcon, ArrowBackIcon];
const rightIcons = [CheckCircleIcon, ArrowForwardIcon, InfoIcon];
const leftColors = ['#1976d2', '#d32f2f', '#ffa000'];
const rightColors = ['#2e7d32', '#0288d1', '#fbc02d'];

export const WithBaseListItemCard = () => (
  <Box width={400}>
    <BaseList
      items={['Milk', 'Eggs', 'Bread']}
      renderItem={(item, i) => {
        return (
          <BaseListItemCard
            title={item}
            onToggle={() => alert(`Toggled ${item}`)}
            getSwipeVisuals={({ direction, theme }) => {
              if (direction === 'left') {
                return {
                  icon: leftIcons[i % leftIcons.length],
                  background: leftColors[i % leftColors.length],
                };
              }
              return {
                icon: rightIcons[i % rightIcons.length],
                background: rightColors[i % rightColors.length],
              };
            }}
            isExpanded={false}
            onExpand={() => alert('Expanded')}
          />
        );
      }}
    />
  </Box>
);

export const EmptyList = () => (
  <Box width={400}>
    <BaseList items={[]} renderItem={() => <div>Should not render</div>} />
  </Box>
); 