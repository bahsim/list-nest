import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

/**
 * FieldDisplay displays a label and value, optionally editable.
 * @param label - The field label.
 * @param value - The field value.
 * @param multiline - Whether to display value as multiline.
 * @param onClick - Edit handler.
 * @param icon - Custom icon for edit action.
 */
export interface FieldDisplayProps {
  label: string;
  value: string | number;
  multiline?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
}

export const FieldDisplay: React.FC<FieldDisplayProps> = ({ label, value, multiline, onClick, icon }) => {
  return (
    <Box
      sx={{
        mb: 1,
        display: 'flex',
        alignItems: multiline ? 'flex-start' : 'center',
        gap: 1,
        cursor: onClick ? 'pointer' : 'default',
        borderRadius: 2,
        transition: 'background 0.2s',
        '&:hover': onClick ? { background: 'rgba(74,144,226,0.08)' } : undefined,
        '&:focus-within': onClick ? { outline: '2px solid #4A90E2' } : undefined,
      }}
      tabIndex={onClick ? 0 : -1}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? `Edit ${label}` : undefined}
      onClick={onClick}
      onKeyDown={onClick ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(); } } : undefined}
    >
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        {multiline ? (
          <>
            <Box sx={{ fontFamily: 'Nunito', fontWeight: 700, color: 'text.primary', fontSize: 16 }}>{label}</Box>
            <Box sx={{ fontFamily: 'Nunito', fontWeight: 400, color: 'text.secondary', fontSize: 16, width: '100%', whiteSpace: 'pre-line' }}>{value}</Box>
          </>
        ) : (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ fontFamily: 'Nunito', fontWeight: 700, color: 'text.primary', fontSize: 16 }}>{label}:</Box>
            <Box sx={{ fontFamily: 'Nunito', fontWeight: 400, color: 'text.secondary', fontSize: 16 }}>{value}</Box>
          </Box>
        )}
      </Box>
      {onClick && (
        icon ? (
          <IconButton size="small" tabIndex={-1} sx={{ ml: 1 }} aria-label={`Edit ${label}`}>
            {icon}
          </IconButton>
        ) : (
          <IconButton size="small" tabIndex={-1} sx={{ ml: 1 }} aria-label={`Edit ${label}`}>
            <EditIcon fontSize="small" sx={{ color: 'action.active', opacity: 0.8, fontSize: 18 }} />
          </IconButton>
        )
      )}
    </Box>
  );
}; 