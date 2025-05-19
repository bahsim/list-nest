import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Box } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import type { DateRange } from '@/shared/types/date-range';
import { DATE_PRESETS } from '@/shared/constants/date-presets';
import { FilterChip } from '@/shared/ui/filter-chip/filter-chip';
import { FilterChipBar } from '@/shared/ui/filter-chip/filter-chip-bar';

export interface DateRangeModalProps {
  open: boolean;
  onClose: () => void;
  selectedRange: DateRange<Date>;
  onChange: (range: DateRange<Date>, preset: string | null) => void;
  selectedPreset: string | null;
}

const CUSTOM_LABEL = 'Custom';

export const DateRangeModal: React.FC<DateRangeModalProps> = ({
  open,
  onClose,
  selectedRange,
  onChange,
  selectedPreset,
}) => {
  const [localPreset, setLocalPreset] = useState<string | null>(selectedPreset);
  const [localRange, setLocalRange] = useState<DateRange<Date>>(selectedRange ?? [null, null]);

  React.useEffect(() => {
    setLocalPreset(selectedPreset);
    setLocalRange(selectedRange ?? [null, null]);
  }, [open, selectedPreset, selectedRange]);

  const handlePreset = (preset: string) => {
    setLocalPreset(preset);
    if (preset !== CUSTOM_LABEL) {
      const found = DATE_PRESETS.find((p) => p.label === preset);
      if (found) {
        setLocalRange(found.getRange());
        onChange(found.getRange(), preset);
        onClose();
      }
    }
  };

  const handleCustomApply = () => {
    onChange(localRange, CUSTOM_LABEL);
    onClose();
  };

  const [start, end] =
    Array.isArray(localRange) && localRange.length === 2 ? localRange : [null, null];

  return (
    <Dialog open={open} onClose={onClose} aria-labelledby="date-range-modal-title">
      <DialogTitle id="date-range-modal-title">Select Date Range</DialogTitle>
      <DialogContent>
        <FilterChipBar>
          {DATE_PRESETS.map((preset) => (
            <FilterChip
              key={preset.label}
              selected={localPreset === preset.label}
              label={preset.label}
              onClick={() => handlePreset(preset.label)}
              ariaLabel={`Select ${preset.label}`}
              role="button"
            />
          ))}
          <FilterChip
            key={CUSTOM_LABEL}
            selected={localPreset === CUSTOM_LABEL}
            label={CUSTOM_LABEL}
            onClick={() => setLocalPreset(CUSTOM_LABEL)}
            ariaLabel="Select custom range"
            role="button"
          />
        </FilterChipBar>
        {localPreset === CUSTOM_LABEL && (
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 2,
              alignItems: 'stretch',
              mt: 1,
              width: '100%',
            }}
            role="group"
            aria-label="Custom date range pickers"
          >
            <DatePicker
              label="From"
              value={start}
              onChange={(date) => setLocalRange([date, end])}
              maxDate={end || undefined}
              slotProps={{
                textField: {
                  size: 'small',
                  sx: { minWidth: 120, width: '100%' },
                  'aria-label': 'From date',
                },
              }}
            />
            <DatePicker
              label="To"
              value={end}
              onChange={(date) => setLocalRange([start, date])}
              minDate={start || undefined}
              slotProps={{
                textField: {
                  size: 'small',
                  sx: { minWidth: 120, width: '100%' },
                  'aria-label': 'To date',
                },
              }}
            />
          </Box>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        {localPreset === CUSTOM_LABEL && (
          <Button onClick={handleCustomApply} variant="contained" disabled={!start || !end}>
            Apply
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};
