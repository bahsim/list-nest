import * as React from 'react';
import type { ShoppingListItem } from '@ui-kit/components/types';
import { type Theme } from '@mui/material/styles';
import CheckIcon from '@mui/icons-material/CheckCircleOutline';
import StarIcon from '@mui/icons-material/Star';
import RestoreIcon from '@mui/icons-material/Restore';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { BaseListItemCard } from '../base-list/base-list-item-card';
import { Box, IconButton, Button, Tooltip, Typography, Switch } from '@mui/material';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import DeleteIcon from '@mui/icons-material/Delete';
import { mockUser } from '../main-list/mock-data';
import { Avatar } from '@ui-kit/components/atomic/avatar';

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
  item: ShoppingListItem;
  onEdit: () => void;
  onDelete: () => void;
  onToggleBought: () => void;
  onToggleCurrent: () => void;
  onRestore: () => void;
  onUnmarkCurrent: () => void;
  isExpanded: boolean;
  onExpand: () => void;
}

export const ShoppingListItemCard: React.FC<ShoppingListItemCardProps> = ({
  item,
  onEdit,
  onDelete,
  onToggleBought,
  onToggleCurrent,
  onRestore,
  onUnmarkCurrent,
  isExpanded,
  onExpand,
}) => {
  const getSwipeVisuals = ({ direction, theme }: { direction: 'left' | 'right'; theme: Theme }) => {
    if (direction === 'left') {
      if (item.isCurrent) {
        return {
          icon: StarBorderIcon,
          background: theme.palette.info.main,
        };
      }
      return {
        icon: StarIcon,
        background: theme.palette.warning.main,
      };
    } else {
      if (item.isDeleted) {
        return {
          icon: RestoreIcon,
          background: theme.palette.info.main,
        };
      }
      if (item.isBought) {
        return {
          icon: RestoreIcon,
          background: theme.palette.info.main,
        };
      }
      return {
        icon: CheckIcon,
        background: theme.palette.success.main,
      };
    }
  };

  const handleSwipeLeft = () => {
    if (item.isCurrent) {
      onUnmarkCurrent();
    } else {
      onToggleCurrent();
    }
  };

  const handleSwipeRight = () => {
    if (item.isDeleted) {
      onRestore();
    } else if (item.isBought) {
      onToggleBought();
    } else {
      onToggleBought();
    }
  };

  return (
    <BaseListItemCard
      title={item.name}
      secondaryText={`${item.quantity} ${item.unit}`}
      checked={item.isBought}
      highlighted={item.isCurrent}
      disabled={item.isDeleted}
      onToggle={onToggleBought}
      isExpanded={isExpanded}
      onExpand={onExpand}
      onSwipeLeft={handleSwipeLeft}
      onSwipeRight={handleSwipeRight}
      getSwipeVisuals={getSwipeVisuals}
      renderExpandedContent={isExpanded ? (
        <Box
          sx={{
            mt: 2,
            width: '100%',
            px: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
          }}
        >
          {/* First row: info */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: 1, width: '100%' }}>
            <Avatar
              name={mockUser.name}
              avatarUrl={mockUser.avatarUrl}
              size={32}
            />
            <Box
              sx={{
                fontWeight: 700,
                fontSize: '1.1rem',
                color: 'text.primary',
                minWidth: 48,
                textAlign: 'right',
                ml: 1,
              }}
            >
              ${item.estimatedPrice}
            </Box>
          </Box>

          {/* Second row: all actions centered */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, width: '100%' }}>
            {/* Toggle + label as one clickable area */}
            <Box
              onClick={e => { e.stopPropagation(); onToggleCurrent(); }}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                cursor: 'pointer',
                userSelect: 'none',
                px: 0.5,
                py: 0.5,
                borderRadius: 2,
                transition: 'background 0.2s',
                '&:hover': { background: 'rgba(25, 118, 210, 0.08)' },
              }}
            >
              <Switch
                checked={item.isCurrent}
                color="primary"
                size="small"
                sx={{ mr: 0.5 }}
                inputProps={{ 'aria-label': 'Current toggle' }}
              />
              <Typography
                variant="body2"
                sx={{
                  minWidth: 60,
                  color: item.isCurrent ? 'primary.main' : 'text.secondary',
                  fontWeight: 500,
                  letterSpacing: 0.2,
                }}
              >
                {item.isCurrent ? 'Current' : 'Set Current'}
              </Typography>
            </Box>
            {/* Complete */}
            <Button
              variant="contained"
              color="success"
              size="medium"
              startIcon={<CheckIcon />}
              onClick={e => { e.stopPropagation(); onToggleBought(); }}
              sx={{
                borderRadius: 20,
                fontWeight: 600,
                px: 2.5,
                minWidth: 110,
                height: 40,
                textTransform: 'none',
                boxShadow: 'none',
              }}
            >
              Complete
            </Button>
            {/* Delete */}
            <Tooltip title="Delete">
              <IconButton
                onClick={e => { e.stopPropagation(); onDelete(); }}
                color="error"
                size="medium"
                sx={{
                  width: 40, height: 40,
                  borderRadius: '50%',
                  background: 'rgba(244, 67, 54, 0.08)',
                }}
              >
                <DeleteIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      ) : null}
    />
  );
};
