import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import type { BaseListItemCardProps } from './types';
import { useListItemSwipe } from './use-list-item-swipe';
import { BaseListItemCardContent } from './base-list-item-card-content';

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
        <BaseListItemCardContent
          title={title}
          secondaryText={secondaryText}
          checked={checked}
          highlighted={highlighted}
          disabled={disabled}
          isExpanded={isExpanded}
          onSwipeLeft={onSwipeLeft}
          onSwipeRight={onSwipeRight}
          handleToggle={handleToggle}
          handleCardClick={handleCardClick}
          theme={theme}
          translateX={translateX}
          onClick={onClick}
          renderExpandedContent={renderExpandedContent}
        />
      </Box>
    );
  },
);
