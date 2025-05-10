import * as React from 'react';
import type { ShoppingListItem } from '../../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useTheme, type Theme } from '@mui/material/styles';

/**
 * ShoppingListItemCard displays a single shopping list item with actions.
 * @param item - The shopping list item.
 * @param onEdit - Edit handler.
 * @param onDelete - Delete handler.
 * @param onToggleBought - Mark as bought handler.
 * @param onToggleFocus - Toggle focus handler.
 */
export interface ShoppingListItemCardProps {
  item: ShoppingListItem;
  onEdit: () => void;
  onDelete: () => void;
  onToggleBought: () => void;
  onToggleFocus: () => void;
}

/**
 * Returns the border color for the shopping list item card based on its state.
 * @param params - Object containing isFocused, isBought, and theme.
 * @returns The border color string.
 */
function getBorderColor({
  isFocused,
  isBought,
  isDeleted,
  theme,
}: {
  isFocused: boolean;
  isBought: boolean;
  isDeleted: boolean;
  theme: Theme;
}): string {
  if (isFocused) return theme.palette.primary.main;
  if (isBought || isDeleted) return theme.palette.divider;
  return theme.palette.info.main;
}

export const ShoppingListItemCard: React.FC<ShoppingListItemCardProps> = ({
  item,
  onEdit,
  onDelete,
  onToggleBought,
  onToggleFocus,
}) => {
  const theme = useTheme();
  return (
    <Card
      variant="outlined"
      sx={{
        display: 'flex',
        alignItems: 'center',
        mb: theme.spacing(2),
        background: item.isFocused
          ? theme.palette.info.main + '22'
          : theme.palette.background.paper,
        boxShadow: item.isFocused ? theme.shadows[3] : theme.shadows[1],
        borderColor: getBorderColor({
          isFocused: item.isFocused,
          isBought: item.isBought,
          isDeleted: item.isDeleted,
          theme,
        }),
        opacity: item.isBought ? 0.6 : 1,
        transition: 'box-shadow 0.2s, background 0.2s, opacity 0.2s, border-color 0.2s',
      }}
      data-testid="shopping-list-item-card"
    >
      <Checkbox
        checked={item.isBought}
        onChange={onToggleBought}
        slotProps={{ input: { 'aria-label': 'Mark as bought' } }}
        color="primary"
        sx={{ ml: theme.spacing(1) }}
      />
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          p: `${theme.spacing(1)} !important`,
          pl: '0 !important',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textDecoration: item.isBought || item.isDeleted ? 'line-through' : 'none',
            fontWeight: item.isFocused ? 700 : 400,
            color:
              item.isBought || item.isDeleted
                ? theme.palette.text.secondary
                : theme.palette.text.primary,
            transition: 'color 0.2s, font-weight 0.2s',
            flex: 2,
          }}
        >
          {item.name}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ minWidth: 32, textAlign: 'center' }}
        >
          {item.quantity}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ minWidth: 48, textAlign: 'center' }}
        >
          {item.estimatedPrice ? `$${item.estimatedPrice}` : ''}
        </Typography>
      </CardContent>
    </Card>
  );
};
