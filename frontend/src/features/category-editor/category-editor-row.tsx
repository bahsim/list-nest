import React, { useRef, useEffect, KeyboardEvent } from 'react';
import { Box, Typography, Select, MenuItem, InputLabel, FormControl, TextField, IconButton, Stack, useTheme } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { CATEGORY_COLORS, CategoryColor } from '@/shared/constants/category-colors';
import { Category } from '@/shared/types/category';

interface CategoryEditorRowProps {
  cat: Category;
  isEditing: boolean;
  editValue: Category | null;
  onEditChange: (field: keyof Category, value: string) => void;
  onSave: () => void;
  onCancel: () => void;
  onDelete: () => void;
  onEdit: () => void;
  idx: number;
  autoFocus?: boolean;
}

export const CategoryEditorRow: React.FC<CategoryEditorRowProps> = React.memo(({
  cat,
  isEditing,
  editValue,
  onEditChange,
  onSave,
  onCancel,
  onDelete,
  onEdit,
  idx,
  autoFocus = false,
}) => {
  const theme = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && autoFocus && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing, autoFocus]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      onSave();
    } else if (e.key === 'Escape') {
      onCancel();
    }
  };

  return (
    <Box
      component="li"
      sx={{
        minHeight: 56,
        borderRadius: theme.shape.borderRadius / 4,
        border: '1px solid',
        borderColor: theme.palette.grey[400],
        boxShadow: theme.shadows[1],
        mb: theme.spacing(1.5),
        alignItems: 'center',
        gap: theme.spacing(1),
        cursor: isEditing ? 'default' : 'pointer',
        transition: 'background 0.2s, box-shadow 0.2s',
        display: 'flex',
        '&:active, &:focusVisible': {
          boxShadow: theme.shadows[4],
        },
      }}
      onClick={() => !isEditing && onEdit()}
      tabIndex={0}
      aria-label={isEditing ? `Editing ${cat.name}` : `Edit ${cat.name}`}
      role="listitem"
    >
      {isEditing ? (
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          sx={{ width: '100%', alignItems: { xs: 'stretch', sm: 'center' } }}
        >
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: theme.shape.borderRadius / 4,
              border: '2px solid #eee',
              background: CATEGORY_COLORS[editValue ? editValue.color : cat.color],
              alignSelf: { xs: 'center', sm: 'flex-start' },
              mb: { xs: 1, sm: 0 },
            }}
          />
          <TextField
            value={editValue?.name || ''}
            onChange={(e) => onEditChange('name', e.target.value)}
            size="small"
            variant="outlined"
            inputRef={inputRef}
            onKeyDown={handleKeyDown}
            slotProps={{
              input: { 'aria-label': 'Category name', style: { minWidth: 80 } },
            }}
            sx={{ flex: 1, mb: { xs: 1, sm: 0 } }}
          />
          <FormControl size="small" sx={{ minWidth: 120, mb: { xs: 1, sm: 0 } }}>
            <InputLabel id={`color-label-${idx}`}>Color</InputLabel>
            <Select
              labelId={`color-label-${idx}`}
              value={editValue?.color || ''}
              label="Color"
              onChange={(e) => onEditChange('color', e.target.value as CategoryColor)}
            >
              {Object.entries(CATEGORY_COLORS).map(([key, val]) => (
                <MenuItem key={key} value={key}>
                  <Box
                    component="span"
                    sx={{
                      display: 'inline-block',
                      width: 16,
                      height: 16,
                      bgcolor: val,
                      borderRadius: theme.shape.borderRadius / 12,
                      mr: 1,
                    }}
                  />
                  {key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: 1,
              justifyContent: { xs: 'flex-end', sm: 'center' },
            }}
          >
            <IconButton aria-label="Save" onClick={onSave} size="large">
              <CheckIcon color="success" sx={{ fontWeight: 700 }} />
            </IconButton>
            <IconButton aria-label="Cancel" onClick={onCancel} size="large">
              <CloseIcon color="action" fontSize="small" />
            </IconButton>
            <IconButton aria-label="Delete" onClick={onDelete} size="large">
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        </Stack>
      ) : (
        <>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: theme.shape.borderRadius / 4,
              border: '2px solid #eee',
              mr: theme.spacing(1.5),
              ml: theme.spacing(1),
              flexShrink: 0,
              background: CATEGORY_COLORS[cat.color],
              transition: 'background 0.2s',
            }}
          />
          <Typography
            sx={{
              flex: 1,
              fontWeight: 700,
              color: theme.palette.text.primary,
              fontFamily: theme.typography.fontFamily,
            }}
          >
            {cat.name}
          </Typography>
          <IconButton
            onClick={onEdit}
            aria-label={`Edit ${cat.name}`}
            size="medium"
            sx={{ ml: 1 }}
          >
            <EditIcon sx={{ fontSize: theme.typography.fontSize * 1.5 }} color="action" />
          </IconButton>
        </>
      )}
    </Box>
  );
});

CategoryEditorRow.displayName = 'CategoryEditorRow'; 