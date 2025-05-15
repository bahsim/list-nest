import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { alpha } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import type { AddEditItemModalProps } from './types';
import {
  NameField,
  QuantityField,
  EstimatedPriceField,
  NotesField,
  CategoryField,
  AISuggestionsField,
  ErrorAlertField,
} from './fields';
import { useAddEditItemModal } from './use-add-edit-item-modal';

/**
 * AddEditItemModal for adding or editing a shopping list item.
 * @param item - The item to edit (undefined for add).
 * @param onSave - Save handler.
 * @param onCancel - Cancel handler.
 * @param categories - List of categories.
 * @param units - List of units.
 * @param title - Dialog title.
 * @param actionLabel - Main action button label.
 */
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
  const {
    fields,
    setFields,
    openFields,
    setOpenFields,
    error,
    handleChange,
    handleAISuggestion,
    handleSaveClick,
    DEFAULT_ITEM_VALUES,
  } = useAddEditItemModal(item, units);

  return (
    <Dialog open onClose={onCancel} maxWidth="xs" fullWidth>
      <DialogTitle>{title}</DialogTitle>
      <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 0 }} />
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 0, pt: 1, pb: 1 }}>
        <NameField
          value={fields.name}
          open={openFields.name}
          onChange={handleChange}
          onOpen={() => setOpenFields((prev) => ({ ...prev, name: true }))}
        />
        <QuantityField
          quantity={fields.quantity}
          unit={fields.unit}
          open={openFields.quantity}
          units={units}
          onChange={handleChange}
          onOpen={() => setOpenFields((prev) => ({ ...prev, quantity: true }))}
          defaultQuantity={DEFAULT_ITEM_VALUES.quantity}
          defaultUnit={DEFAULT_ITEM_VALUES.unit}
        />
        <EstimatedPriceField
          value={fields.estimatedPrice}
          open={openFields.estimatedPrice}
          onChange={handleChange}
          onOpen={() => setOpenFields((prev) => ({ ...prev, estimatedPrice: true }))}
          defaultValue={DEFAULT_ITEM_VALUES.estimatedPrice}
        />
        <NotesField
          value={fields.notes}
          open={openFields.notes}
          onChange={handleChange}
          onOpen={() => setOpenFields((prev) => ({ ...prev, notes: true }))}
          defaultValue={DEFAULT_ITEM_VALUES.notes}
        />
        <CategoryField
          value={fields.category}
          open={openFields.category}
          categories={categories}
          onInputChange={(newValue) => setFields({ ...fields, category: newValue })}
          onOpen={() => setOpenFields((prev) => ({ ...prev, category: true }))}
          defaultValue={DEFAULT_ITEM_VALUES.category}
        />
        <AISuggestionsField aiSuggestions={aiSuggestions ?? []} onSelect={handleAISuggestion} />
        <ErrorAlertField error={error} />
      </DialogContent>
      <Divider sx={{ borderColor: (theme) => alpha(theme.palette.divider, 0.3), mb: 1 }} />
      <DialogActions>
        <Button variant="contained" color="primary" onClick={() => handleSaveClick(onSave)}>
          {actionLabel}
        </Button>
        <Button onClick={onCancel} variant="outlined">
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};
