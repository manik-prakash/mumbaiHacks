import { Appearance, ColorSchemeName } from 'react-native';
import { Colors } from './Colors';


export const lightTheme = {
  dark: false,
  colors: {
    primary: Colors.primary,
    background: Colors.background,
    card: Colors.surface,
    text: Colors.textPrimary,
    border: Colors.border,
    notification: Colors.warning
  },
  fonts: {
    regular: {
      fontFamily: 'System', // Default system font
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'System',
      fontWeight: '100',
    },
  },
};


export const darkTheme = {
  dark: true,
  colors: {
    primary: Colors.primary,
    background: Colors.darkBackground,
    card: Colors.darkSurface,
    text: Colors.darkTextPrimary,
    border: Colors.darkBorder,
    notification: Colors.warning
  },
  fonts: {
    regular: {
      fontFamily: 'System', // Default system font
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    light: {
      fontFamily: 'System',
      fontWeight: '300',
    },
    thin: {
      fontFamily: 'System',
      fontWeight: '100',
    },
  },
};


export const useColorScheme = () : ColorSchemeName => Appearance.getColorScheme();
