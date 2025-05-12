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
import type { AddEditItemInput, AISuggestion } from '../../types';

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
  const [fields, setFields] = React.useState<AddEditItemInput>(
    item || {
      name: '',
      quantity: '',
      unit: units[0] || '',
      category: categories[0] || '',
      isCurrent: false,
      isBought: false,
      isDeleted: false,
    },
  );
  const [error, setError] = React.useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields({ ...fields, [e.target.name]: e.target.value });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // if (!fields.name || !fields.quantity || !fields.unit || !fields.category) {
    //   setError('All fields are required');
    //   return;
    // }
    // if (fields.estimatedPrice && !fields.currency) {
    //   setError('Currency is required if estimated price is set');
    //   return;
    // }
    setError(null);
    onSave(fields);
  };

  const handleAISuggestion = (suggestion: AISuggestion) => {
    setFields({ ...fields, ...suggestion });
  };

  return (
    <Dialog open onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>{item ? 'Edit Item' : 'Add Item'}</DialogTitle>
      <Box component="form" onSubmit={handleSave}>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <TextField
            name="name"
            label="Item name"
            value={fields.name}
            onChange={handleChange}
            fullWidth
            // required
          />
          <TextField
            type="number"
            name="quantity"
            label="Quantity"
            value={fields.quantity}
            onChange={handleChange}
            fullWidth
            // required
          />
          <TextField
            select
            name="unit"
            label="Unit"
            value={fields.unit}
            onChange={handleChange}
            fullWidth
            // required
          >
            {units.map((u) => (
              <MenuItem key={u} value={u}>
                {u}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="estimatedPrice"
            label="Estimated Price"
            value={fields.estimatedPrice || ''}
            onChange={handleChange}
            type="number"
            fullWidth
          />
          <TextField
            select
            name="category"
            label="Category"
            value={fields.category}
            onChange={handleChange}
            fullWidth
          >
            {categories.map((c) => (
              <MenuItem key={c} value={c}>
                {c}
              </MenuItem>
            ))}
          </TextField>
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
