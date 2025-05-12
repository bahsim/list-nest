import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { useTheme, type Theme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import type { SxProps } from '@mui/material/styles';
import { useSwipeable } from 'react-swipeable';

/**
 * Usage Example:
 * <BaseListItemCard
 *   title="Milk"
 *   checked={true}
 *   highlighted={false}
 *   onToggle={() => {}}
 *   onClick={() => {}}
 *   onSwipeLeft={() => {}}
 *   onSwipeRight={() => {}}
 *   getSwipeVisuals={({ direction, theme }) => ({ icon: MyIcon, background: theme.palette.error.main })}
 * />
 */

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
  readonly secondaryText?: string;
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
  readonly disabled?: boolean;
  /**
   * Handler for checkbox toggle.
   */
  readonly onToggle?: () => void;
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
  readonly sx?: SxProps<Theme>;
}

/**
 * Minimum swipe distance in pixels to trigger swipe action.
 */
export const SWIPE_ACTION_THRESHOLD = 80;
/**
 * Alpha value for highlighted background (0.13 ~ 22 hex).
 */
const HIGHLIGHT_ALPHA = 0.13;

/**
 * Custom hook to encapsulate swipe logic for list item cards.
 * @param onSwipeLeft - Handler for swipe left action.
 * @param onSwipeRight - Handler for swipe right action.
 * @returns { translateX, swipeHandlers, absX }
 */
function useListItemSwipe({
  onSwipeLeft,
  onSwipeRight,
}: {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
}) {
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
      if (e.absX >= SWIPE_ACTION_THRESHOLD && onSwipeLeft) {
        onSwipeLeft();
      }
    },
    onSwipedRight: (e) => {
      if (e.absX >= SWIPE_ACTION_THRESHOLD && onSwipeRight) {
        onSwipeRight();
      }
    },
    trackMouse: true,
    preventScrollOnSwipe: false,
  });
  const absX = Math.abs(translateX);
  return { translateX, swipeHandlers, absX };
}

/**
 * A generic, dumb list item card for use in lists. Handles layout, calls handlers, no business logic.
 */
export const BaseListItemCard: React.FC<BaseListItemCardProps> = React.memo(
  ({
    title,
    secondaryText,
    checked = false,
    highlighted = false,
    disabled = false,
    onToggle,
    onClick,
    onSwipeLeft,
    onSwipeRight,
    getSwipeVisuals,
    sx,
  }) => {
    const theme = useTheme();
    const handleToggle = React.useCallback(() => {
      if (onToggle) {
        onToggle();
      }
    }, [onToggle]);
    const handleClick = React.useCallback(() => {
      if (onClick) {
        onClick();
      }
    }, [onClick]);
    const { translateX, swipeHandlers, absX } = useListItemSwipe({ onSwipeLeft, onSwipeRight });
    let actionIcon: React.ReactNode = null;
    let actionBg = 'transparent';

    if (translateX !== 0 && getSwipeVisuals) {
      const direction = translateX < 0 ? 'left' : 'right';
      const visuals = getSwipeVisuals({ direction, theme });
      const IconComponent = visuals.icon;
      const opacity = Math.min(absX / 80, 1);
      actionIcon = (
        <IconComponent sx={{ fontSize: 32, color: '#fff', opacity, transition: 'opacity 0.1s' }} />
      );
      actionBg = absX > 10 ? visuals.background : 'transparent';
    }

    return (
      <Box sx={{ position: 'relative', mb: theme.spacing(2), ...sx }} {...swipeHandlers}>
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
          role="checkbox"
          aria-checked={checked}
          aria-disabled={disabled}
          sx={{
            display: 'flex',
            alignItems: 'center',
            background: highlighted
              ? alpha(theme.palette.info.main, HIGHLIGHT_ALPHA)
              : 'transparent',
            boxShadow: highlighted ? theme.shadows[3] : theme.shadows[1],
            borderColor: highlighted ? theme.palette.primary.main : theme.palette.divider,
            opacity: disabled ? 0.6 : 1,
            position: 'relative',
            cursor: onClick ? 'pointer' : 'default',
            transform: `translateX(${translateX}px)`,
            zIndex: 1,
            transition:
              translateX === 0
                ? 'box-shadow 0.2s, background 0.2s, opacity 0.2s, border-color 0.2s, transform 0.2s'
                : 'none',
          }}
          onClick={handleClick}
        >
          <Checkbox
            checked={checked}
            onChange={handleToggle}
            disabled={disabled}
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
                textDecoration: disabled ? 'line-through' : 'none',
                fontWeight: highlighted ? 700 : 400,
                color: disabled ? theme.palette.text.secondary : theme.palette.text.primary,
              }}
            >
              {title}
            </Typography>
            {secondaryText && (
              <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
                {secondaryText}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Box>
    );
  },
);
