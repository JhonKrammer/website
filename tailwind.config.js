/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-space': '#0A0B10',
        'nebula-dark': '#12141D',
        'nebula-medium': '#1A1D2E',
        'stellar-blue': '#6C8EEF',
        'cosmic-purple': '#A78BFA',
        'aurora-cyan': '#38BDF8',
        'text-primary': '#F0F0F5',
        'text-secondary': '#9CA3B0',
        'text-tertiary': '#636A7A',
      },
      fontFamily: {
        sans: ['Inter', 'Noto Sans SC', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'content': '1200px',
      },
    },
  },
  plugins: [],
}
