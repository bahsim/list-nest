import React, { useState } from 'react';
import { Box, List, useTheme } from '@mui/material';
import { CategoryEditorRow } from './category-editor-row';
import { CategoryEditorAddButton } from './category-editor-add-button';
import { Category } from '@/shared/types/category';

interface CategoryEditorProps {
  categories: Category[];
  onChange: (data: {newValue: Category, idx: number}) => void;
  onDelete: (category: Category) => void;
  onAdd: (category: Category) => void;
}

export const CategoryEditor: React.FC<CategoryEditorProps> = ({ categories, onAdd, onChange, onDelete }) => {
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
    onChange({newValue: editValue, idx: editIdx});
    setEditIdx(null);
    setEditValue(null);
  };

  const handleCancel = () => {
    setEditIdx(null);
    setEditValue(null);
  };

  const handleAdd = () => {
    onAdd({ name: '', color: 'SAGE' });
    setEditIdx(categories.length);
    setEditValue({ name: '', color: 'SAGE' });
  };

  const handleDelete = (idx: number) => {
    onDelete(categories[idx]);
    setEditIdx(null);
    setEditValue(null);
  };

  return (
    <Box
      sx={{ display: 'flex', flexDirection: 'column', gap: theme.spacing(2), py: theme.spacing(1) }}
    >
      <List disablePadding role="list">
        {categories.map((cat, idx) => {
          const isEditing = editIdx === idx;
          return (
            <CategoryEditorRow
              key={cat.name + idx}
              cat={cat}
              isEditing={isEditing}
              editValue={isEditing ? editValue : null}
              onEditChange={handleEditChange}
              onSave={handleSave}
              onCancel={handleCancel}
              onDelete={() => handleDelete(idx)}
              onEdit={() => handleRowTap(idx)}
              idx={idx}
              autoFocus={isEditing && cat.name === ''}
            />
          );
        })}
      </List>
      <CategoryEditorAddButton onClick={handleAdd} disabled={editIdx !== null} />
    </Box>
  );
};
