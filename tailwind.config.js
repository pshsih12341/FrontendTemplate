/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'custom': ['YourCustomFont', 'sans-serif'],
        'sans': ['YourCustomFont', 'system-ui', 'sans-serif'],
        'heading': ['YourCustomFont', 'serif'],
        'body': ['YourCustomFont', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 