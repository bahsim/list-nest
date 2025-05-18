import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import { alpha } from '@mui/material/styles';
import type { BaseListItemCardProps } from './types';
import { useListItemSwipe } from './use-list-item-swipe';
import { BaseListItemCardContent } from './base-list-item-card-content';

/**
 * A generic, dumb list item card for use in lists. Handles layout, calls handlers, no business logic.
 */
export const BaseListItemCard: React.FC<BaseListItemCardProps> = React.memo(
  ({
    title,
    secondaryText,
    checked = false,
    highlighted = false,
    canceled = false,
    completed = false,
    onSwipeLeft,
    onSwipeRight,
    getSwipeVisuals,
    sx,
    isExpanded,
    onExpand,
    renderExpandedContent,
  }) => {
    const theme = useTheme();

    const { translateX, swipeHandlers, actionIcon, actionBg } = useListItemSwipe({
      onSwipeLeft,
      onSwipeRight,
      getSwipeVisuals,
      theme,
    });

    const handleCardClick = (e: React.MouseEvent) => {
      onExpand();
    };

    const renderCardContent = (translateXValue: number) => (
      <Card
        variant="outlined"
        role="listitem"
        tabIndex={0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: isExpanded ? alpha(theme.palette.secondary.light, theme.highlightAlpha) : 'transparent',
          boxShadow: theme.shadows[3],
          border: '0.5px solid rgba(146,122,125,0.3)',
          position: 'relative',
          cursor: 'pointer',
          transform: `translateX(${translateXValue}px)`,
          zIndex: 1,
          transition:
            translateXValue === 0
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
        <BaseListItemCardContent
          title={title}
          secondaryText={secondaryText ?? ''}
          checked={checked}
          highlighted={highlighted}
          canceled={canceled}
          completed={completed}
          isExpanded={isExpanded}
          theme={theme}
          renderExpandedContent={renderExpandedContent}
        />
      </Card>
    );

    // If no swipe handlers/visuals, render only the content (no swipe, no background)
    if ((!onSwipeLeft && !onSwipeRight && !getSwipeVisuals) || isExpanded) {
      return renderCardContent(0);
    }

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
        {renderCardContent(translateX)}
      </Box>
    );
  },
);
