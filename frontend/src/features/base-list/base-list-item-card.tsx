import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useTheme, type Theme, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import type { SxProps } from '@mui/material/styles';
import { useSwipeable } from 'react-swipeable';
import Collapse from '@mui/material/Collapse';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

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
}

/**
 * Minimum swipe distance in pixels to trigger swipe action.
 */
export const SWIPE_ACTION_THRESHOLD = 80;
/**
 * Alpha value for highlighted background (0.13 ~ 22 hex).
 */

/**
 * Custom hook to encapsulate swipe logic for list item cards.
 * @param onSwipeLeft - Handler for swipe left action.
 * @param onSwipeRight - Handler for swipe right action.
 * @param getSwipeVisuals - Function to get swipe visuals.
 * @param theme - Current theme.
 * @returns { translateX, swipeHandlers, absX, actionIcon, actionBg }
 */
function useListItemSwipe({
  onSwipeLeft,
  onSwipeRight,
  getSwipeVisuals,
  theme,
}: {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  getSwipeVisuals?: (args: { direction: 'left' | 'right'; theme: Theme }) => { icon: React.ElementType; background: string };
  theme: Theme;
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
  return { translateX, swipeHandlers, absX, actionIcon, actionBg };
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
    isExpanded,
    onExpand,
    renderExpandedContent,
  }) => {
    const theme = useTheme();
    const handleToggle = React.useCallback(() => {
      if (onToggle) {
        onToggle();
      }
    }, [onToggle]);

    const { translateX, swipeHandlers, actionIcon, actionBg } = useListItemSwipe({
      onSwipeLeft,
      onSwipeRight,
      getSwipeVisuals,
      theme,
    });

    const handleCardClick = (e: React.MouseEvent) => {
      console.log('BaseListItemCard clicked');
      onExpand();
      if (onClick) {
        onClick();
      }
    };

    return (
      <Box sx={{ position: 'relative', mb: theme.spacing(1), ...sx }} {...swipeHandlers}>
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
          role="listitem"
          aria-checked={checked}
          aria-disabled={disabled}
          tabIndex={0}
          onKeyDown={(e) => {
            if ((e.key === ' ' || e.key === 'Enter') && !disabled) {
              handleToggle();
            }
            if (e.key === 'ArrowLeft' && onSwipeLeft) {
              onSwipeLeft();
            }
            if (e.key === 'ArrowRight' && onSwipeRight) {
              onSwipeRight();
            }
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            background: isExpanded ? 'transparent' : alpha(theme.palette.secondary.light, theme.highlightAlpha),
            boxShadow: highlighted ? theme.shadows[3] : theme.shadows[1],
            border: '0.5px solid rgba(146,122,125,0.3)',
            position: 'relative',
            cursor: 'pointer',
            transform: `translateX(${translateX}px)`,
            zIndex: 1,
            transition:
              translateX === 0
                ? 'box-shadow 0.2s, background 0.2s, opacity 0.2s, border-color 0.2s, transform 0.2s, height 0.3s'
                : 'none',
            minHeight: 56,
            height: 'auto',
            overflow: 'visible',
            borderRadius: 2,
            mb: 1,
            p: 1,
            WebkitTapHighlightColor: 'transparent',
          }}
          onClick={handleCardClick}
        >
          <CardContent
            sx={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
              p: `${theme.spacing(1)} !important`,
            }}
          >
            <Typography
              variant="body1"
              sx={{
                px: 1,
                textDecoration: (disabled || checked) ? 'line-through' : 'none',
                fontWeight: highlighted ? 700 : 400,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              {/* Icon for bought, deleted, or active (placeholder) */}
              {disabled ? (
                <CancelOutlinedIcon sx={{ color: theme.palette.error.main, fontSize: 20 }} />
              ) : checked ? (
                <CheckCircleOutlineIcon sx={{ color: theme.palette.secondary.main, fontSize: 20 }} />
              ) : (
                <RadioButtonUncheckedIcon sx={{ color: theme.palette.text.secondary, fontSize: 20 }} />
              )}
              {title}
            </Typography>
            {secondaryText && (
              <Typography
                variant="body1"
                color="text.secondary"
                sx={{ ml: 2, px: 1, textAlign: 'right' }}
              >
                {secondaryText}
              </Typography>
            )}
          </CardContent>
          <Collapse in={isExpanded} timeout="auto" sx={{ width: '100%' }} unmountOnExit>
            {renderExpandedContent}
          </Collapse>
        </Card>
      </Box>
    );
  },
);
