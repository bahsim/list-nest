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
import type { AddEditItemInput, AISuggestion } from '../../../entities/list/types';
import Autocomplete from '@mui/material/Autocomplete';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';

/**
 * AddEditItemModal for adding or editing a shopping list item.
 * @param item - The item to edit (undefined for add).
 * @param onSave - Save handler.
 * @param onCancel - Cancel handler.
 * @param categories - List of categories.
 * @param units - List of units.
 * @param currencies - List of currencies.
 * @param title - Dialog title.
 * @param actionLabel - Main action button label.
 */
export interface AddEditItemModalProps {
  item: AddEditItemInput | null;
  onSave: (input: AddEditItemInput) => void;
  onCancel: () => void;
  categories: string[];
  units: string[];
  aiSuggestions?: AISuggestion[];
  title: string;
  actionLabel: string;
}

export const AddEditItemModal: React.FC<AddEditItemModalProps> = ({
  item,
  onSave,
  onCancel,
  categories,
  units,
  aiSuggestions,
  title,
  actionLabel,
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
    name: !item?.name,
    quantity: false,
    estimatedPrice: false,
    notes: false,
    category: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSaveClick = () => {
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
      <DialogTitle>{title}</DialogTitle>
      <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 0 }} />
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 0, pt: 1, pb: 1 }}>
        {/* Always show Name */}
        {openFields.name ? (
          <TextField
            name="name"
            label="Name"
            value={fields.name}
            onChange={handleChange}
            sx={{ background: (theme) => theme.palette.background.note, my: 1 }}
            fullWidth
            required
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.preventDefault();
            }}
          />
        ) : (
          <>
            <FieldDisplay
              label="Name"
              value={fields.name}
              onClick={() => handleOpenField('name')}
            />
            <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
          </>
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
              sx={{ flex: 1, background: (theme) => theme.palette.background.note, my: 1 }}
              autoFocus
              onKeyDown={(e) => {
                if (e.key === 'Enter') e.preventDefault();
              }}
            />
            <TextField
              select
              name="unit"
              label="Unit"
              value={fields.unit}
              onChange={handleChange}
              fullWidth
              sx={{ flex: 1, background: (theme) => theme.palette.background.note, my: 1 }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') e.preventDefault();
              }}
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
          <>
            <FieldDisplay
              label="Quantity"
              value={`${fields.quantity || DEFAULT_ITEM_VALUES.quantity} ${fields.unit || DEFAULT_ITEM_VALUES.unit}`}
              onClick={() => handleOpenField('quantity')}
            />
            <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
          </>
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
            sx={{ background: (theme) => theme.palette.background.note, my: 1 }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.preventDefault();
            }}
          />
        ) : fields.estimatedPrice || DEFAULT_ITEM_VALUES.estimatedPrice ? (
          <>
            <FieldDisplay
              label="Estimated Price"
              value={fields.estimatedPrice ?? DEFAULT_ITEM_VALUES.estimatedPrice ?? ''}
              onClick={() => handleOpenField('estimatedPrice')}
            />
            <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
          </>
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
            sx={{ background: (theme) => theme.palette.background.note, my: 1 }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') e.preventDefault();
            }}
          />
        ) : fields.notes || DEFAULT_ITEM_VALUES.notes ? (
          <>
            <FieldDisplay
              label="Notes"
              value={fields.notes || DEFAULT_ITEM_VALUES.notes}
              multiline
              onClick={() => handleOpenField('notes')}
            />
            <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
          </>
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
                sx={{ background: (theme) => theme.palette.background.note, my: 1 }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') e.preventDefault();
                }}
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
        {error && (
          <Alert severity="error" sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
            {error}
          </Alert>
        )}
      </DialogContent>
      <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
      <DialogActions>
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          {actionLabel}
        </Button>
        <Button onClick={onCancel} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
