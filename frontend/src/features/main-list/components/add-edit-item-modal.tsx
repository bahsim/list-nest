import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import type { AddEditItemInput, AISuggestion } from '../types';
import Autocomplete from '@mui/material/Autocomplete';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';

/**
 * AddEditItemModal for adding or editing a shopping list item.
 * @param item - The item to edit (undefined for add).
 * @param onSave - Save handler.
 * @param onCancel - Cancel handler.
 * @param categories - List of categories.
 * @param units - List of units.
 * @param currencies - List of currencies.
 */
export interface AddEditItemModalProps {
  item?: AddEditItemInput;
  onSave: (input: AddEditItemInput) => void;
  onCancel: () => void;
  categories: string[];
  units: string[];
  aiSuggestions?: AISuggestion[];
}

export const AddEditItemModal: React.FC<AddEditItemModalProps> = ({
  item,
  onSave,
  onCancel,
  categories,
  units,
  aiSuggestions,
}) => {
  // Define all default values in one place, now that units/categories are available
  const DEFAULT_ITEM_VALUES = {
    quantity: 1,
    unit: units[0] || 'pcs',
    estimatedPrice: undefined,
    notes: '',
    category: '',
    isCurrent: false,
    isBought: false,
    isDeleted: false,
  };

  const [fields, setFields] = React.useState<AddEditItemInput>(
    item || {
      name: '',
      quantity: DEFAULT_ITEM_VALUES.quantity,
      unit: DEFAULT_ITEM_VALUES.unit,
      category: DEFAULT_ITEM_VALUES.category,
      isCurrent: DEFAULT_ITEM_VALUES.isCurrent,
      isBought: DEFAULT_ITEM_VALUES.isBought,
      isDeleted: DEFAULT_ITEM_VALUES.isDeleted,
      notes: DEFAULT_ITEM_VALUES.notes,
      estimatedPrice: DEFAULT_ITEM_VALUES.estimatedPrice,
    },
  );
  const [error, setError] = React.useState<string | null>(null);

  // Track which fields are open
  const [openFields, setOpenFields] = React.useState<{
    name: boolean;
    quantity: boolean;
    estimatedPrice: boolean;
    notes: boolean;
    category: boolean;
  }>({
    name: true,
    quantity: false,
    estimatedPrice: false,
    notes: false,
    category: false,
  });

  // Open fields with values on mount (edit mode)
  React.useEffect(() => {
    if (item) {
      setOpenFields({
        name: !item.name,
        quantity: !(Boolean(Number.isFinite(item.quantity)) || DEFAULT_ITEM_VALUES.quantity),
        estimatedPrice: !(
          Boolean(Number.isFinite(item.estimatedPrice)) || DEFAULT_ITEM_VALUES.estimatedPrice
        ),
        notes: !(Boolean(item.notes?.trim()) || DEFAULT_ITEM_VALUES.notes),
        category: !(Boolean(item.category) || DEFAULT_ITEM_VALUES.category),
      });
    }
  }, [item]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fields.name) {
      setError('Name is required');
      return;
    }
    setError(null);
    onSave(fields);
  };

  const handleAISuggestion = (suggestion: AISuggestion) => {
    setFields({ ...fields, ...suggestion });
  };

  const handleOpenField = (field: keyof typeof openFields) => {
    setOpenFields((prev) => ({ ...prev, [field]: true }));
  };

  // Helper: show chip if not open, with action label only
  const renderActionChip = (field: keyof typeof openFields, label: string) =>
    !openFields[field] && (
      <Button
        variant="outlined"
        size="small"
        onClick={() => handleOpenField(field)}
        sx={{ mr: 1, mb: 1, textTransform: 'none' }}
        tabIndex={0}
      >
        {label}
      </Button>
    );

  return (
    <Dialog open onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>{item ? 'Edit Item' : 'Add Item'}</DialogTitle>
      <Box component="form" onSubmit={handleSave}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Always show Name */}
          {openFields.name ? (
            <TextField
              name="name"
              label="Name"
              value={fields.name}
              onChange={handleChange}
              sx={{ background: (theme) => theme.palette.background.note }}
              fullWidth
              required
              autoFocus
            />
          ) : (
            <FieldDisplay
              label="Name"
              value={fields.name}
              onClick={() => handleOpenField('name')}
            />
          )}
          {/* Quantity field */}
          {openFields.quantity ? (
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                type="number"
                name="quantity"
                label="Quantity"
                value={fields.quantity}
                onChange={handleChange}
                fullWidth
                sx={{ flex: 1, background: (theme) => theme.palette.background.note }}
                autoFocus
              />
              <TextField
                select
                name="unit"
                label="Unit"
                value={fields.unit}
                onChange={handleChange}
                fullWidth
                sx={{ flex: 1, background: (theme) => theme.palette.background.note }}
              >
                {units.map((u) => (
                  <MenuItem key={u} value={u}>
                    {u}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
          ) : (fields.quantity || DEFAULT_ITEM_VALUES.quantity) &&
            (fields.unit || DEFAULT_ITEM_VALUES.unit) ? (
            <FieldDisplay
              label="Quantity"
              value={`${fields.quantity || DEFAULT_ITEM_VALUES.quantity} ${fields.unit || DEFAULT_ITEM_VALUES.unit}`}
              onClick={() => handleOpenField('quantity')}
            />
          ) : (
            renderActionChip('quantity', 'Add quantity')
          )}
          {/* Estimated Price field */}
          {openFields.estimatedPrice ? (
            <TextField
              name="estimatedPrice"
              label="Estimated Price"
              value={fields.estimatedPrice || ''}
              onChange={handleChange}
              type="number"
              fullWidth
              autoFocus
              sx={{ background: (theme) => theme.palette.background.note }}
            />
          ) : fields.estimatedPrice || DEFAULT_ITEM_VALUES.estimatedPrice ? (
            <FieldDisplay
              label="Estimated Price"
              value={fields.estimatedPrice ?? DEFAULT_ITEM_VALUES.estimatedPrice ?? ''}
              onClick={() => handleOpenField('estimatedPrice')}
            />
          ) : (
            renderActionChip('estimatedPrice', 'Add price')
          )}
          {/* Notes field */}
          {openFields.notes ? (
            <TextField
              name="notes"
              label="Notes"
              value={fields.notes || ''}
              onChange={handleChange}
              fullWidth
              multiline
              minRows={2}
              autoFocus
              sx={{ background: (theme) => theme.palette.background.note }}
            />
          ) : fields.notes || DEFAULT_ITEM_VALUES.notes ? (
            <FieldDisplay
              label="Notes"
              value={fields.notes || DEFAULT_ITEM_VALUES.notes}
              multiline
              onClick={() => handleOpenField('notes')}
            />
          ) : (
            renderActionChip('notes', 'Add note')
          )}
          {/* Category field */}
          {openFields.category ? (
            <Autocomplete
              freeSolo
              options={categories}
              value={fields.category}
              onInputChange={(_, newValue) => setFields({ ...fields, category: newValue })}
              renderInput={(params) => (
                <TextField
                  {...params}
                  name="category"
                  label="Category"
                  fullWidth
                  autoFocus
                  sx={{ background: (theme) => theme.palette.background.note }}
                />
              )}
            />
          ) : fields.category || DEFAULT_ITEM_VALUES.category ? (
            <FieldDisplay
              label="Category"
              value={fields.category || DEFAULT_ITEM_VALUES.category}
              onClick={() => handleOpenField('category')}
            />
          ) : (
            renderActionChip('category', 'Add category')
          )}
          {/* AI Suggestions */}
          {aiSuggestions && aiSuggestions.length > 0 && (
            <Box>
              <Box sx={{ fontWeight: 'bold', mb: 1 }}>AI Suggestions:</Box>
              <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                {aiSuggestions.map((s) => (
                  <Button
                    key={s.id}
                    variant="outlined"
                    size="small"
                    onClick={() => handleAISuggestion(s)}
                  >
                    {s.name}
                  </Button>
                ))}
              </Box>
            </Box>
          )}
          {error && <Alert severity="error">{error}</Alert>}
        </DialogContent>
        <DialogActions>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          <Button onClick={onCancel} variant="outlined">
            Cancel
          </Button>
        </DialogActions>
      </Box>
    </Dialog>
  );
};
