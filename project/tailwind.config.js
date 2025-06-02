/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f0ff',
          100: '#cce0ff',
          200: '#99c2ff',
          300: '#66a3ff',
          400: '#3385ff',
          500: '#1A73E8', // primary
          600: '#0052cc',
          700: '#003d99',
          800: '#002966',
          900: '#001433',
        },
        accent: {
          50: '#fff0eb',
          100: '#ffe1d6',
          200: '#ffc3ad',
          300: '#ffa685',
          400: '#ff885c',
          500: '#FF5722', // accent
          600: '#e64a17',
          700: '#bf3d13',
          800: '#99300f',
          900: '#73240b',
        },
        teal: {
          50: '#e0f7fa',
          100: '#b2ebf2',
          200: '#80deea',
          300: '#4dd0e1',
          400: '#26c6da',
          500: '#00BCD4', // teal
          600: '#00acc1',
          700: '#0097a7',
          800: '#00838f',
          900: '#006064',
        },
        success: '#4CAF50',
        warning: '#FFC107',
        error: '#F44336',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 8px 16px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};