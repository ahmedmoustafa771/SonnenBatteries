import { Theme } from './theme.types';

export const appTheme: Theme = {
  colors: {
    primary: '#0a1535',
    secondary: '#0040fa',
    subtitle: '#666666',
    background: '#ffffff',
    success: 'green',
    danger: '#b00020',
    buttonText: '#ffffff',
  },
  spacing: {
    sm: 8,
    md: 12,
    lg: 20,
    xl: 24,
    xxl: 32,
  },
  roundness: 8,
  typography: {
    family: {
      regular: 'InterRegular',
      bold: 'InterBold',
      light: 'InterLight',
      medium: 'InterMedium',
    },
    size: {
      sm: 14,
      md: 16,
      lg: 20,
      xl: 24,
    },
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
  },
};
