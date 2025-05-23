import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
import type { AddEditItemModalProps } from '@/shared/ui/list/types';
import {
  NameField,
  QuantityField,
  EstimatedPriceField,
  NotesField,
  CategoryField,
  AISuggestionsField,
  ErrorAlertField,
} from '@/shared/ui/list/fields';
import { useAddEditItemModal } from '@/features/main-list/hooks/use-add-edit-item-modal';
import { UNITS } from '@/shared/constants/units';
import { useTranslation } from 'react-i18next';

/**
 * AddEditItemModal for adding or editing a shopping list item.
 * @param item - The item to edit (undefined for add).
 * @param onSave - Save handler.
 * @param onCancel - Cancel handler.
 * @param categories - List of categories.
 * @param units - List of units.
 * @param title - Dialog title.
 * @param actionLabel - Main action button label.
 * @param currency - Currency.
 */
export const AddEditItemModal: React.FC<AddEditItemModalProps> = ({
  item,
  onSave,
  onClose,
  categories,
  aiSuggestions,
  title,
  actionLabel,
  currency,
}) => {
  const { t } = useTranslation();
  const {
    fields,
    setFields,
    error,
    handleChange,
    handleAISuggestion,
    handleSaveClick,
    defaultItemValues,
  } = useAddEditItemModal(item, UNITS);

  // Move openFields state here (UI-only)
  const [openFields, setOpenFields] = React.useState({
    name: !item?.name,
    quantity: false,
    estimatedPrice: false,
    notes: false,
    category: false,
  });

  return (
    <Dialog open onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{t(title)}</DialogTitle>
      <SectionDivider />
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
          units={UNITS}
          onChange={handleChange}
          onOpen={() => setOpenFields((prev) => ({ ...prev, quantity: true }))}
          defaultQuantity={defaultItemValues.quantity}
          defaultUnit={defaultItemValues.unit}
        />
        <EstimatedPriceField
          value={fields.estimatedPrice}
          open={openFields.estimatedPrice}
          onChange={handleChange}
          onOpen={() => setOpenFields((prev) => ({ ...prev, estimatedPrice: true }))}
          defaultValue={defaultItemValues.estimatedPrice}
          currency={currency}
        />
        <NotesField
          value={fields.notes}
          open={openFields.notes}
          onChange={handleChange}
          onOpen={() => setOpenFields((prev) => ({ ...prev, notes: true }))}
          defaultValue={defaultItemValues.notes}
        />
        <CategoryField
          value={fields.category}
          open={openFields.category}
          categories={categories}
          onInputChange={(newValue) => setFields({ ...fields, category: newValue })}
          onOpen={() => setOpenFields((prev) => ({ ...prev, category: true }))}
          defaultValue={defaultItemValues.category}
        />
        <AISuggestionsField aiSuggestions={aiSuggestions ?? []} onSelect={handleAISuggestion} />
        <ErrorAlertField error={error} />
      </DialogContent>
      <SectionDivider sx={{ mb: 1 }} />
      <DialogActions>
        <Button variant="contained" color="primary" onClick={() => handleSaveClick(onSave)}>
          {actionLabel}
        </Button>
        <Button onClick={onClose} variant="outlined">
          {t('common.cancel')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
