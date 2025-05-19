export const CATEGORY_COLORS = {
  SAGE: '#99A49A', // Sage
  MAUVE: '#927A7D', // Mauve
  CORAL: '#F76C5E', // Coral Red
  SKY: '#357ABD',   // Darker blue (was #4A90E2)
  CREAM: '#E0C187', // Deeper beige (was #FBF3DB)
  YELLOW: '#F9C74F', // Golden Yellow (uncomment if needed)
  DARK: '#2A2E35', // Midnight Navy (uncomment if needed)
} as const;

export type CategoryColor = keyof typeof CATEGORY_COLORS; 