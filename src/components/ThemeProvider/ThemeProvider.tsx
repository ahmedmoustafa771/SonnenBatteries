import { appTheme } from '../../theme';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ThemeProviderProps } from './ThemeProvider.types';

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={{ theme: appTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
