import * as React from 'react';
import type { MainListItem } from '../../types';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useTheme, type Theme } from '@mui/material/styles';
import { useSwipeable } from 'react-swipeable';
import Box from '@mui/material/Box';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import DeleteIcon from '@mui/icons-material/DeleteOutline';
import StarIcon from '@mui/icons-material/Star';
import RestoreIcon from '@mui/icons-material/Restore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import RefreshIcon from '@mui/icons-material/Refresh';

/**
 * ShoppingListItemCard displays a single shopping list item with actions.
 * @param item - The shopping list item.
 * @param onEdit - Edit handler.
 * @param onDelete - Delete handler.
 * @param onToggleBought - Mark as bought handler.
 * @param onToggleCurrent - Toggle current handler.
 * @param onRestore - Restore handler.
 * @param onUnmarkCurrent - Unmark current handler.
 */
export interface ShoppingListItemCardProps {
  item: MainListItem;
  onEdit: () => void;
  onDelete: () => void;
  onToggleBought: () => void;
  onToggleCurrent: () => void;
  onRestore: () => void;
  onUnmarkCurrent: () => void;
}

/**
 * Returns the border color for the shopping list item card based on its state.
 * @param params - Object containing isCurrent, isBought, and theme.
 * @returns The border color string.
 */
function getBorderColor({
  isCurrent,
  isBought,
  isDeleted,
  theme,
}: {
  isCurrent: boolean;
  isBought: boolean;
  isDeleted: boolean;
  theme: Theme;
}): string {
  if (isCurrent) return theme.palette.primary.main;
  if (isBought || isDeleted) return theme.palette.divider;
  return theme.palette.info.main;
}

const SWIPE_ACTION_THRESHOLD = 80;

export const ShoppingListItemCard: React.FC<ShoppingListItemCardProps> = ({
  item,
  onEdit,
  onDelete,
  onToggleBought,
  onToggleCurrent,
  onRestore,
  onUnmarkCurrent,
}) => {
  const theme = useTheme();
  const [translateX, setTranslateX] = React.useState(0);

  const swipeHandlers = useSwipeable({
    onSwiping: (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        setTranslateX(e.deltaX);
      }
    },
    onSwiped: () => {
      setTranslateX(0);
    },
    onSwipedLeft: (e) => {
      if (e.absX >= SWIPE_ACTION_THRESHOLD) {
        if (item.isCurrent) {
          onUnmarkCurrent();
        } else {
          onToggleCurrent();
        }
        console.log('onSwipedLeft');
      }
    },
    onSwipedRight: (e) => {
      if (e.absX >= SWIPE_ACTION_THRESHOLD) {
        if (item.isDeleted) {
          onRestore();
        } else if (item.isBought) {
          onToggleBought();
        } else {
          onToggleBought();
        }
        console.log('onSwipedRight');
      }
    },
    trackMouse: true,
    preventScrollOnSwipe: false, // allow vertical scroll
  });

  // Icon and color logic
  let actionIcon: React.ReactNode = null;
  let actionBg = 'transparent';
  const absX = Math.abs(translateX);
  if (translateX < 0) {
    if (item.isCurrent) {
      actionIcon = <StarBorderIcon sx={{ fontSize: 32, color: '#fff', opacity: Math.min(absX / 80, 1), transition: 'opacity 0.1s' }} />;
      actionBg = absX > 10 ? theme.palette.warning.main : 'transparent';
    } else {
      actionIcon = <StarIcon sx={{ fontSize: 32, color: '#fff', opacity: Math.min(absX / 80, 1), transition: 'opacity 0.1s' }} />;
      actionBg = absX > 10 ? theme.palette.info.main : 'transparent';
    }
  } else if (translateX > 0) {
    if (item.isDeleted) {
      actionIcon = <RestoreIcon sx={{ fontSize: 32, color: '#fff', opacity: Math.min(absX / 80, 1), transition: 'opacity 0.1s' }} />;
      actionBg = absX > 10 ? theme.palette.success.main : 'transparent';
    } else if (item.isBought) {
      actionIcon = <RefreshIcon sx={{ fontSize: 32, color: '#fff', opacity: Math.min(absX / 80, 1), transition: 'opacity 0.1s' }} />;
      actionBg = absX > 10 ? theme.palette.info.main : 'transparent';
    } else {
      actionIcon = <CheckIcon sx={{ fontSize: 32, color: '#fff', opacity: Math.min(absX / 80, 1), transition: 'opacity 0.1s' }} />;
      actionBg = absX > 10 ? theme.palette.success.main : 'transparent';
    }
  }

  return (
    <Box sx={{ position: 'relative', mb: theme.spacing(2) }}>
      {/* Action background and icon */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: translateX < 0 ? 'flex-end' : 'flex-start',
          px: 3,
          background: actionBg,
          borderRadius: 1.5,
          transition: 'background 0.15s',
          pointerEvents: 'none',
        }}
      >
        {actionIcon}
      </Box>
      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          alignItems: 'center',
          background: item.isCurrent
            ? theme.palette.info.main + '22'
            : theme.palette.background.paper,
          boxShadow: item.isCurrent ? theme.shadows[3] : theme.shadows[1],
          borderColor: getBorderColor({
            isCurrent: item.isCurrent,
            isBought: item.isBought,
            isDeleted: item.isDeleted,
            theme,
          }),
          opacity: item.isBought ? 0.6 : 1,
          transition: translateX === 0 ? 'box-shadow 0.2s, background 0.2s, opacity 0.2s, border-color 0.2s, transform 0.2s' : 'none',
          position: 'relative',
          touchAction: 'pan-y', // allow vertical scroll
          transform: `translateX(${translateX}px)`,
          zIndex: 1,
        }}
        data-testid="shopping-list-item-card"
        {...swipeHandlers}
      >
        <Checkbox
          checked={item.isBought}
          onChange={onToggleBought}
          slotProps={{ input: { 'aria-label': 'Mark as bought' } }}
          color="primary"
          sx={{ ml: theme.spacing(1), zIndex: 2 }}
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
              fontWeight: item.isCurrent ? 700 : 400,
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
    </Box>
  );
};
