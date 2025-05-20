import * as React from 'react';
import { useSwipeable } from 'react-swipeable';
import type { Theme } from '@mui/material/styles';
import { SWIPE_ACTION_THRESHOLD } from './constants';

/**
 * Custom hook to encapsulate swipe logic for list item cards.
 * @param onSwipeLeft - Handler for swipe left action.
 * @param onSwipeRight - Handler for swipe right action.
 * @param getSwipeVisuals - Function to get swipe visuals.
 * @param theme - Current theme.
 * @returns { translateX, swipeHandlers, absX, actionIcon, actionBg }
 */
export const useListItemSwipe = ({
  onSwipeLeft,
  onSwipeRight,
  getSwipeVisuals,
  theme,
}: {
  onSwipeLeft?: () => void;
  onSwipeRight?: () => void;
  getSwipeVisuals?: (args: { direction: 'left' | 'right'; theme: Theme }) => {
    icon: React.ElementType;
    background: string;
  };
  theme: Theme;
}) => {
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
      <IconComponent
        sx={{
          fontSize: 32,
          color: (theme) => theme.palette.common.white,
          opacity,
          transition: 'opacity 0.1s',
        }}
      />
    );
    actionBg = absX > 10 ? visuals.background : 'transparent';
  }
  return { translateX, swipeHandlers, absX, actionIcon, actionBg };
};
