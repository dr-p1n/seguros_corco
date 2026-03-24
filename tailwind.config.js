/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        navy: {
          DEFAULT: 'hsl(222, 47%, 20%)',
          dark: 'hsl(222, 52%, 14%)',
          light: 'hsl(222, 40%, 28%)',
        },
        gold: {
          DEFAULT: 'hsl(33, 63%, 52%)',
          light: 'hsl(38, 72%, 62%)',
          pale: 'hsl(40, 80%, 94%)',
        },
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        'warm-sm': '0 2px 12px -4px rgba(30, 45, 74, 0.08)',
        'warm-md': '0 8px 24px -8px rgba(30, 45, 74, 0.14)',
        'warm-lg': '0 20px 40px -12px rgba(30, 45, 74, 0.18)',
        'warm-xl': '0 32px 64px -16px rgba(30, 45, 74, 0.25)',
        'gold': '0 8px 20px -4px rgba(212, 148, 58, 0.45)',
        'whatsapp': '0 8px 20px -4px rgba(37, 211, 102, 0.4)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'shimmer': 'shimmer 1.8s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      screens: {
        'xs': '480px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};