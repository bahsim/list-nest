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
  completed,
  canceled,
  isExpanded,
  theme,
  renderExpandedContent,
}) => (
  <>
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
          textDecoration: completed ? 'line-through' : 'none',
          fontWeight: highlighted ? 700 : 400,
          display: 'flex',
          alignItems: 'center',
          gap: 1,
        }}
      >
        {/* Icon for bought, deleted, or active (placeholder) */}
        {canceled ? (
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
  </>
); 