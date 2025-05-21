import { useTranslation } from 'react-i18next';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import React from 'react';

export const AnalyticsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        maxWidth: 480,
        mx: 'auto',
        py: 3,
        px: 1,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h3" color="text.primary">
        {t('analyticsPage.title')}
      </Typography>
      <Typography variant="subtitle2" color="text.secondary">
        {t('analyticsPage.comingSoon')}
      </Typography>
    </Box>
  );
};
