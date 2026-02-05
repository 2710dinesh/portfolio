/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#011C40', // Darkest Blue
        surface: '#023859', // Dark Blue
        surfaceHighlight: '#26658C', // Medium Blue
        primary: {
          DEFAULT: '#54ACBF', // Light Blue
          hover: '#26658C', // Medium Blue
          light: '#A7EBF2', // Lightest Blue
        },
        secondary: {
          DEFAULT: '#26658C', // Medium Blue
          hover: '#023859', // Dark Blue
        },
        text: {
          primary: '#A7EBF2', // Lightest Blue
          secondary: '#54ACBF', // Light Blue
          muted: '#88C0D0', // Lighter Blue for better contrast (was #26658C)
        },
        theme: {
          lightest: '#A7EBF2',
          light: '#54ACBF',
          medium: '#26658C',
          dark: '#023859',
          darkest: '#011C40',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-premium': 'linear-gradient(135deg, #4F46E5 0%, #EC4899 100%)',
        'gradient-dark': 'linear-gradient(to bottom right, #050505, #121212)',
      }
    },
  },
  plugins: [],
};
