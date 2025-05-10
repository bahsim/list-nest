import * as React from 'react';
import type { ShoppingListItem } from '../../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import StarIcon from '@mui/icons-material/Star';
import { useTheme } from '@mui/material/styles';

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
        gap: theme.spacing(2),
        mb: theme.spacing(2),
        background: item.isFocused
          ? theme.palette.info.main + '22'
          : theme.palette.background.paper,
        boxShadow: item.isFocused
          ? theme.shadows[3]
          : theme.shadows[1],
        borderColor: item.isBought
          ? theme.palette.divider
          : theme.palette.primary.main,
        opacity: item.isBought ? 0.6 : 1,
        transition: 'box-shadow 0.2s, background 0.2s, opacity 0.2s',
      }}
      data-testid="shopping-list-item-card"
    >
      <Checkbox
        checked={item.isBought}
        onChange={onToggleBought}
        inputProps={{ 'aria-label': 'Mark as bought' }}
        color="primary"
        sx={{ ml: theme.spacing(1) }}
      />
      <CardContent
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(2),
          p: `${theme.spacing(1)} !important`,
        }}
      >
        <Typography
          variant="body1"
          sx={{
            textDecoration: item.isBought ? 'line-through' : 'none',
            fontWeight: item.isFocused ? 700 : 400,
            color: item.isBought
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
        <Typography
          variant="body2"
          color="info.main"
          sx={{ minWidth: 64, textAlign: 'center' }}
        >
          {item.category}
        </Typography>
      </CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', pr: 1 }}>
        <IconButton
          aria-label="Focus"
          onClick={onToggleFocus}
          color={item.isFocused ? 'primary' : 'default'}
          sx={{
            '&.Mui-selected, &[aria-selected="true"]': {
              color: theme.palette.primary.main,
            },
          }}
        >
          <StarIcon
            fontSize="small"
            sx={{
              color: item.isFocused
                ? theme.palette.primary.main
                : theme.palette.action.disabled,
              transition: 'color 0.2s',
            }}
          />
        </IconButton>
        <IconButton
          aria-label="Edit"
          onClick={onEdit}
          color="secondary"
        >
          <EditIcon fontSize="small" />
        </IconButton>
        <IconButton
          aria-label="Delete"
          onClick={onDelete}
          color="error"
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </Box>
    </Card>
  );
}; 