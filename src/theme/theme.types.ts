export type ColorPalette = {
  primary: string;
  secondary: string;
  subtitle: string;
  background: string;
  success: string;
  danger: string;
  buttonText: string;
};

export type Spacing = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
};

export type Typography = {
  family: {
    regular: string;
    bold: string;
    light?: string;
    medium?: string;
  };
  size: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
  };
};

export type Radius = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export type Theme = {
  colors: ColorPalette;
  spacing: Spacing;
  roundness: number;
  typography: Typography;
  radius: Radius;
};
