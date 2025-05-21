export const theme = {
  colors: {
    primary: {
      DEFAULT: '#1E3A8A', // Deep blue for trust and reliability
      light: '#3B82F6',
      dark: '#1E40AF',
    },
    secondary: {
      DEFAULT: '#059669', // Green for growth and stability
      light: '#10B981',
      dark: '#047857',
    },
    neutral: {
      white: '#FFFFFF',
      gray: {
        50: '#F9FAFB',
        100: '#F3F4F6',
        200: '#E5E7EB',
        300: '#D1D5DB',
        400: '#9CA3AF',
        500: '#6B7280',
        600: '#4B5563',
        700: '#374151',
        800: '#1F2937',
        900: '#111827',
      },
      black: '#000000',
    },
    accent: {
      DEFAULT: '#F59E0B', // Warm orange for CTAs
      light: '#FBBF24',
      dark: '#D97706',
    },
  },
  fonts: {
    sans: ['Montserrat', 'Open Sans', 'sans-serif'],
    heading: ['Montserrat', 'sans-serif'],
  },
  spacing: {
    container: {
      padding: '1rem',
      maxWidth: '1280px',
    },
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '1rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
  },
  transitions: {
    default: '0.3s ease-in-out',
    fast: '0.15s ease-in-out',
    slow: '0.5s ease-in-out',
  },
} as const;

export type Theme = typeof theme; 