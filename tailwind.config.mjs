import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#137fec',
        'primary-dark': '#0f69c3',
        'background-light': '#f6f7f8',
      },
      fontFamily: {
        sans: ['Public Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 16px 28px rgba(15, 23, 42, 0.12)',
      },
    },
  },
  plugins: [forms],
};
