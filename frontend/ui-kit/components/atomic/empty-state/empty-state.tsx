import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

/**
 * EmptyState displays a generic empty state with image, title, description, and a call-to-action button.
 * @param {string} title - The main heading for the empty state.
 * @param {string} description - Supporting text for the empty state.
 * @param {string} buttonLabel - The label for the action button.
 * @param {() => void} onButtonClick - Handler for button click.
 * @param {string} imageAlt - Alt text for the image.
 */
export interface EmptyStateProps {
  title: string;
  description: string;
  buttonLabel: string;
  onButtonClick: () => void;
  imageAlt: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({ title, description, buttonLabel, onButtonClick, imageAlt }) => (
  <Box
    textAlign="center"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    role="status"
    aria-live="polite"
  >
    <Box sx={{ fontSize: 48, mb: 2 }}>
      <img
        src="/hero.png"
        alt={imageAlt}
        style={{ width: '100%', height: 'auto', display: 'block', maxWidth: '100vw' }}
      />
    </Box>
    <Typography variant="h5" color="primary.main" fontWeight={700} gutterBottom>{title}</Typography>
    <Typography variant="body1" color="text.primary">{description}</Typography>
    <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={onButtonClick}>{buttonLabel}</Button>
  </Box>
);

export default EmptyState; 