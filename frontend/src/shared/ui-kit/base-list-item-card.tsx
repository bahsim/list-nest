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

export interface BaseListItemCardProps {
  readonly title: string;
  readonly secondaryText?: string;
  readonly checked?: boolean;
  readonly highlighted?: boolean;
  readonly disabled?: boolean;
  readonly onToggle?: () => void;
  readonly onClick?: () => void;
  readonly onSwipeLeft?: () => void;
  readonly onSwipeRight?: () => void;
  readonly getSwipeVisuals?: (args: { direction: 'left' | 'right'; theme: Theme }) => {
    icon: React.ElementType;
    background: string;
  };
  readonly sx?: SxProps<Theme>;
  readonly isExpanded: boolean;
  readonly onExpand: () => void;
  readonly renderExpandedContent?: React.ReactNode;
}

export const SWIPE_ACTION_THRESHOLD = 80;

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
            background: isExpanded ? alpha(theme.palette.secondary.light, theme.highlightAlpha) : 'transparent',
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
          <CardContent sx={{ width: '100%', p: 1, pb: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ flex: 1, minWidth: 0 }}>
              <Typography variant="subtitle1" noWrap sx={{ fontWeight: 600 }}>
                {title}
              </Typography>
              {secondaryText && (
                <Typography variant="body2" color="text.secondary" noWrap>
                  {secondaryText}
                </Typography>
              )}
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              {checked ? <CheckCircleOutlineIcon color="success" /> : <RadioButtonUncheckedIcon color="disabled" />}
              {disabled && <CancelOutlinedIcon color="error" />}
            </Box>
          </CardContent>
          {renderExpandedContent && (
            <Collapse in={isExpanded} timeout="auto" unmountOnExit>
              {renderExpandedContent}
            </Collapse>
          )}
        </Card>
      </Box>
    );
  },
); 