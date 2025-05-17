import * as React from 'react';
import Alert from '@mui/material/Alert';

interface ErrorAlertFieldProps {
  error: string | null;
}

const ErrorAlertField: React.FC<ErrorAlertFieldProps> = ({ error }) =>
  error ? (
    <Alert severity="error" sx={{ fontSize: '0.95rem', fontWeight: 500 }}>
      {error}
    </Alert>
  ) : null;

export default ErrorAlertField; 