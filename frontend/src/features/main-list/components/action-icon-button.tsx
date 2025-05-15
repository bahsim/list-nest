import React from 'react';
import { IconButton } from '@mui/material';

interface ActionIconButtonProps {
  onClick: (e: React.MouseEvent) => void;
  color: 'secondary' | 'info' | 'error';
  icon: React.ReactNode;
  show?: boolean;
  [key: string]: any;
}

const ActionIconButton: React.FC<ActionIconButtonProps> = ({
  onClick,
  color,
  icon,
  show = true,
  ...rest
}) => show ? (
  <IconButton
    onClick={onClick}
    color={color}
    size="medium"
    sx={{
      width: 40,
      height: 40,
      borderRadius: '50%',
      background: (theme) => theme.palette[color].light,
      '&:hover': {
        background: (theme) => theme.palette[color].light,
      },
    }}
    {...rest}
  >
    {icon}
  </IconButton>
) : null;

export default ActionIconButton; 