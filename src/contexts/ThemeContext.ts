import { createContext } from 'react';
import { appTheme, Theme } from '../theme';

type ThemeContextType = {
  theme: Theme;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: appTheme,
});
