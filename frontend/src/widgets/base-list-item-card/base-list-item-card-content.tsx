import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import { alpha, type Theme } from '@mui/material/styles';
import type { BaseListItemCardContentProps } from './types';

export const BaseListItemCardContent: React.FC<BaseListItemCardContentProps> = ({
  title,
  secondaryText,
  checked,
  highlighted,
  disabled,
  isExpanded,
  onSwipeLeft,
  onSwipeRight,
  handleToggle,
  handleCardClick,
  theme,
  translateX,
  onClick,
  renderExpandedContent,
}) => (
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
        variant={isExpanded ? 'subtitle1' : 'body1'}
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
          color="text.primary"
          sx={{ ml: 2, px: 1, textAlign: 'right', minWidth: 75 }}
        >
          {secondaryText}
        </Typography>
      )}
    </CardContent>
    <Collapse in={isExpanded} timeout="auto" sx={{ width: '100%' }} unmountOnExit>
      {renderExpandedContent}
    </Collapse>
  </Card>
); 