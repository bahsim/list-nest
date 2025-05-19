import React, { useState } from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  List,
  ListItem,
  TextField,
  Button,
  IconButton,
  useTheme,
  Stack,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import { CATEGORY_COLORS, CategoryColor } from '@/shared/constants/category-colors';
import { Category } from '@/shared/types/category';

const DEFAULT_CATEGORIES: Category[] = [
  { name: 'Produce asd asd sad ', color: 'SAGE' },
  { name: 'Bakery asd sd sdfasdfasdfasdf asdf ', color: 'MAUVE' },
  { name: 'Dairy', color: 'CREAM' },
  { name: 'Meat', color: 'CORAL' },
  { name: 'Snacks', color: 'SKY' },
];

export const CategoryEditor: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>(DEFAULT_CATEGORIES);
  const [editIdx, setEditIdx] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<Category | null>(null);
  const theme = useTheme();

  const handleRowTap = (idx: number) => {
    if (editIdx === idx) return;
    setEditIdx(idx);
    setEditValue(categories[idx]);
  };

  const handleEditChange = (field: keyof Category, value: string) => {
    if (!editValue) return;
    setEditValue({ ...editValue, [field]: value });
  };

  const handleSave = () => {
    if (editIdx === null || !editValue) return;
    setCategories((prev) => prev.map((cat, i) => (i === editIdx ? editValue : cat)));
    setEditIdx(null);
    setEditValue(null);
  };

  const handleCancel = () => {
    if (
      editIdx !== null &&
      categories[editIdx]?.name === '' &&
      categories[editIdx]?.color === 'SAGE'
    ) {
      setCategories((prev) => prev.filter((_, i) => i !== editIdx));
    }
    setEditIdx(null);
    setEditValue(null);
  };

  const handleAdd = () => {
    setCategories((prev) => [...prev, { name: '', color: 'SAGE' }]);
    setEditIdx(categories.length);
    setEditValue({ name: '', color: 'SAGE' });
  };

  const handleDelete = (idx: number) => {
    setCategories((prev) => prev.filter((_, i) => i !== idx));
    setEditIdx(null);
    setEditValue(null);
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(2), py: theme.spacing(1) }}
    >
      <List disablePadding>
        {categories.map((cat, idx) => {
          const isEditing = editIdx === idx;

          return (
            <ListItem
              key={cat.name + idx}
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
                '&:active, &:focusVisible': {
                  boxShadow: theme.shadows[4],
                },
              }}
              onClick={() => !isEditing && handleRowTap(idx)}
              tabIndex={0}
              aria-label={isEditing ? `Editing ${cat.name}` : `Edit ${cat.name}`}
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
                    onChange={(e) => handleEditChange('name', e.target.value)}
                    size="small"
                    variant="outlined"
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
                      onChange={(e) => handleEditChange('color', e.target.value as CategoryColor)}
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
                    <IconButton aria-label="Save" onClick={handleSave} size="large">
                      <CheckIcon color="success" sx={{ fontWeight: 700 }} />
                    </IconButton>
                    <IconButton aria-label="Cancel" onClick={handleCancel} size="large">
                      <CloseIcon color="action" fontSize="small" />
                    </IconButton>
                    <IconButton aria-label="Delete" onClick={() => handleDelete(idx)} size="large">
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
                    onClick={() => handleRowTap(idx)}
                    aria-label={`Edit ${cat.name}`}
                    size="medium"
                    sx={{ ml: 1 }}
                  >
                    <EditIcon sx={{ fontSize: theme.typography.fontSize * 1.5 }} color="action" />
                  </IconButton>
                </>
              )}
            </ListItem>
          );
        })}
      </List>
      <Button
        variant="outlined"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAdd}
        sx={{ mt: 2, borderRadius: theme.shape.borderRadius / 4, minHeight: 48, fontWeight: 700 }}
        fullWidth
        aria-label="Add Category"
        disabled={editIdx !== null}
      >
        Add Category
      </Button>
    </Box>
  );
};
