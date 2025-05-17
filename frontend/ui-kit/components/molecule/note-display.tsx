import React from 'react';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';

export interface NoteDisplayProps {
  note: string;
  onClick?: () => void;
}

export const NoteDisplay: React.FC<NoteDisplayProps> = ({ note, onClick }) => (
  <ButtonBase
    onClick={(e) => {
      e.stopPropagation();
      onClick?.();
    }}
    sx={{
      display: 'flex',
      alignItems: 'center',
      color: 'text.primary',
      mb: 1,
      gap: 1,
      borderRadius: 1,
      px: 1,
      py: 0.5,
      width: 'fit-content',
      background: 'none',
      '&:hover': { background: (theme) => theme.palette.action.hover },
    }}
  >
    <Typography variant="subtitle2" sx={{ textAlign: 'left' }}>
      {note}
    </Typography>
    {onClick && <EditOutlinedIcon sx={{ fontSize: 16, opacity: 0.6 }} />}
  </ButtonBase>
);
