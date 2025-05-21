import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
import type { ViewItemModalProps } from '@/shared/ui/list/types';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { getCurrencySymbol } from '@/shared/utils/local-storage';
import { useTranslation } from 'react-i18next';

/**
 * AddEditItemModal for adding or editing a shopping list item.
 * @param item - The item to edit (undefined for add).
 * @param onCancel - Cancel handler.
 */
export const ViewItemModal: React.FC<ViewItemModalProps> = ({ item, onClose, currency }) => {
  const { t } = useTranslation();
  return (
    <Dialog open onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle>{t('viewItem.title')}</DialogTitle>
      <SectionDivider />
      <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 0, pt: 1, pb: 1 }}>
        <FieldDisplay label={t('fields.name')} value={item?.name || ''} />
        <SectionDivider sx={{ mb: 1 }} />
        {item?.quantity && (
          <>
            <FieldDisplay label={t('fields.quantity')} value={item.quantity || ''} />
            <SectionDivider sx={{ mb: 1 }} />
          </>
        )}
        {item?.estimatedPrice && (
          <>
            <FieldDisplay
              label={t('fields.estimatedPrice')}
              value={`${getCurrencySymbol(currency)}${item.estimatedPrice}` || ''}
            />
            <SectionDivider sx={{ mb: 1 }} />
          </>
        )}
        {item?.notes && (
          <>
            <FieldDisplay label={t('fields.notes')} value={item.notes || ''} />
            <SectionDivider sx={{ mb: 1 }} />
          </>
        )}
        {item?.category && <FieldDisplay label={t('fields.category')} value={item.category || ''} />}
      </DialogContent>
      <SectionDivider sx={{ mb: 1 }} />
      <DialogActions>
        <Button variant="contained" color="primary" onClick={onClose}>
          {t('common.close')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
