import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Collapse,
  IconButton,
  Typography,
  useTheme,
  Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface SettingsSectionProps {
  title: string;
  expanded: boolean;
  onExpand: () => void;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const SettingsSection: React.FC<SettingsSectionProps> = ({
  title,
  expanded,
  onExpand,
  children,
  icon,
}) => {
  const theme = useTheme();
  return (
    <Card
      elevation={expanded ? 4 : 1}
      sx={{
        mb: theme.spacing(2),
        border: '1px solid',
        borderColor: theme.palette.grey[300],
        borderRadius: theme.shape.borderRadius / 4,
        background: theme.palette.background.paper,
        boxShadow: expanded ? theme.shadows[4] : theme.shadows[1],
        transition: 'box-shadow 0.2s',
        overflow: 'visible',
      }}
    >
      <CardHeader
        title={
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            {icon}
            <Typography variant="h3" sx={{ fontSize: 20, fontWeight: 700 }}>
              {title}
            </Typography>
          </Box>
        }
        action={
          <IconButton
            onClick={onExpand}
            aria-label={expanded ? `Collapse ${title}` : `Expand ${title}`}
            size="large"
            sx={{
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s',
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        onClick={onExpand}
        sx={{ cursor: 'pointer', py: 1.5, px: 2, mt: 0.5 }}
      />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent sx={{ pt: 0, pb: 2, px: 2 }}>{children}</CardContent>
      </Collapse>
    </Card>
  );
};
