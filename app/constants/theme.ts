// app/constants/theme.ts
const theme = {
    COLORS: {
      light: {
        primary: '#007AFF',
        background: '#FFFFFF',
        text: '#000000',
        border: '#E5E5E5',
        error: '#FF3B30'
      },
      dark: {
        primary: '#0A84FF',
        background: '#000000',
        text: '#FFFFFF',
        border: '#2C2C2E',
        error: '#FF453A'
      }
    },
    FONTS: {
      regular: 'System',
      medium: 'System',
      bold: 'System'
    },
    SIZES: {
      xs: 10,
      sm: 12,
      md: 16,
      lg: 20,
      xl: 24,
      xxl: 32
    }
  };
  
  export default theme;
  export const { COLORS, FONTS, SIZES } = theme;