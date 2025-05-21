import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1B365D', // Rich navy blue - trust and professionalism
          light: '#264573',
          dark: '#132744',
        },
        secondary: {
          DEFAULT: '#983B46', // Deep burgundy - premium quality
          light: '#B34552',
          dark: '#7E3039',
        },
        accent: {
          DEFAULT: '#C17F59', // Warm copper - roofing/construction
          light: '#D49B76',
          dark: '#A66B48',
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
      },
      fontFamily: {
        sans: ['var(--font-open-sans)'],
        heading: ['var(--font-montserrat)'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1536px',
        },
      },
    },
  },
  plugins: [],
};

export default config; 