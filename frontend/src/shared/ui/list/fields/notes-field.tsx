import * as React from 'react';
import TextField from '@mui/material/TextField';
import { SectionDivider } from '@ui-kit/components/atomic/SectionDivider';
import { FieldDisplay } from '@ui-kit/components/molecule/field-display';
import { ActionChipField } from './action-chip-field';
import { useTranslation } from 'react-i18next';

interface NotesFieldProps {
  value: string | undefined;
  open: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onOpen: () => void;
  defaultValue: string | undefined;
}

export const NotesField: React.FC<NotesFieldProps> = ({ value, open, onChange, onOpen, defaultValue }) => {
  const { t } = useTranslation();
  return open ? (
    <TextField
      name="notes"
      label={t('fields.notes')}
      value={value || ''}
      onChange={onChange}
      fullWidth
      multiline
      minRows={2}
      autoFocus
      sx={{ background: (theme) => theme.palette.background.note, my: 1 }}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.preventDefault();
      }}
    />
  ) : value || defaultValue ? (
    <>
      <FieldDisplay
        label={t('fields.notes')}
        value={value || defaultValue || ''}
        multiline
        onClick={onOpen}
      />
      <SectionDivider sx={{ mb: 1 }} />
    </>
  ) : (
    <ActionChipField label={t('fields.addNote')} onClick={onOpen} />
  );
};
