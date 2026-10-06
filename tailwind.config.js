/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          bg: '#FBF5EC',
          surface: '#FFFDF9',
          primary: '#3B2418',
          accent: '#C98A3D',
          accentLight: '#E2A961',
          accentDark: '#A86F28',
          secondary: '#E8B4B8',
          secondaryLight: '#F5D3D6',
          muted: '#8A7565',
          border: '#EADFD0',
          borderLight: '#F3ECE1',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(59, 36, 24, 0.05)',
        'card': '0 6px 24px -4px rgba(59, 36, 24, 0.07)',
        'card-hover': '0 12px 32px -4px rgba(59, 36, 24, 0.12)',
        'warm': '0 8px 30px rgba(201, 138, 61, 0.15)',
      }
    },
  },
  plugins: [],
}
