import * as React from 'react';
import MuiAvatar from '@mui/material/Avatar';
import type { SxProps, Theme } from '@mui/material/styles';

export interface SharedAvatarProps {
  name: string;
  avatarUrl?: string;
  size?: number;
  sx?: SxProps<Theme>;
}

/**
 * Extracts initials from a person's name.
 * @param name - Full name of the person
 * @returns Uppercase initials (first letter of first name + first letter of last name)
 * @example
 * getInitialsFromName("John Doe") // Returns "JD"
 * getInitialsFromName("Alice") // Returns "A" 
 */
function getInitialsFromName(name: string): string {
  if (!name) return '';
  const parts = name.trim().split(' ');
  if (parts.length === 1) return parts[0][0].toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export const Avatar: React.FC<SharedAvatarProps> = ({ name, avatarUrl, size = 32, sx }) => (
  <MuiAvatar
    src={avatarUrl}
    alt={name}
    sx={{ width: size, height: size, ...sx }}
  >
    {!avatarUrl && name ? getInitialsFromName(name) : null}
  </MuiAvatar>
); 