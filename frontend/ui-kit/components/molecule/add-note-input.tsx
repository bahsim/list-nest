import React from 'react';
import { Box, TextField, IconButton, Tooltip } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';

export interface AddNoteInputProps {
  value: string;
  onChange: (value: string) => void;
  onSave: () => void;
  onCancel: () => void;
  autoFocus?: boolean;
}

export const AddNoteInput: React.FC<AddNoteInputProps> = ({
  value,
  onChange,
  onSave,
  onCancel,
  autoFocus = false,
}) => (
  <Box sx={{ mb: 1 }}>
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Enter note..."
      size="small"
      variant="outlined"
      sx={{
        width: '100%',
        background: (theme) => theme.palette.background.note,
        borderRadius: 2,
      }}
      autoFocus={autoFocus}
      multiline
      minRows={2}
      maxRows={6}
      onClick={(e) => e.stopPropagation()}
    />
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 2, mt: 1 }}>
      {/* Save (Coral) */}
      <Tooltip title="Save (Coral)">
        <span>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              onSave();
            }}
            color="primary"
            size="medium"
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: (theme) => theme.palette.primary.light,
              '&:hover': {
                background: (theme) => theme.palette.primary.main,
              },
            }}
          >
            <CheckIcon sx={{ color: (theme) => theme.palette.common.white }} />
          </IconButton>
        </span>
      </Tooltip>
      <Tooltip title="Cancel">
        <IconButton
          onClick={(e) => {
            e.stopPropagation();
            onCancel();
          }}
          color="inherit"
          size="medium"
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: 'none',
            '&:hover': {
              background: (theme) => theme.palette.action.hover,
            },
          }}
        >
          <CloseIcon sx={{ color: (theme) => theme.palette.text.secondary }} />
        </IconButton>
      </Tooltip>
    </Box>
  </Box>
);
