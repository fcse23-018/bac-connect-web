export const theme = {
  colors: {
    background: '#080B1A',
    surface: '#121630',
    surfaceLight: '#1E2248',
    accent: '#3B82F6',
    accentHover: '#2563EB',
    text: {
      primary: '#FFFFFF',
      secondary: '#94A3B8',
      muted: '#64748B',
    },
    border: '#1E293B',
    success: '#22C55E',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  borderRadius: {
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
  },
} as const;

export type Theme = typeof theme;
