/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lavender: {
          100: "#F8F5FF", // Lightest lavender for backgrounds
          200: "#EDE6FF", // Soft lavender
          300: "#E0D1FF", // Lighter lavender
          400: "#C6A8FF", // Light lavender
          500: "#A275FF", // Standard lavender
          600: "#8654DB", // Medium lavender
          700: "#6B40B5", // Dark lavender
          800: "#533292", // Darker lavender
          900: "#3E2570", // Deep lavender
          1000: "#2B194F", // Darkest lavender for text
        },
        pastel: {
          light: "#FDFDFE", // Very light pastel for backgrounds
          blue: "#CFE8F3", // Pastel blue for cards
          purple: "#DCC6E0", // Pastel purple for buttons and accents
          dark: "#5A5A89", // Dark pastel for text and borders
        },
        primary: {
          DEFAULT: '#0070f3',
          dark: '#0052cc',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f9',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
        white: '#ffffff',
        dimgray: {
          100: '#716f6f',
          200: '#6d6e71',
        },
        mediumslateblue: '#9864e0',
        mediumpurple: '#b893eb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        itim: ['Itim', 'cursive'],
        'adlam-display': ['ADLaM Display', 'cursive'],
        alata: ['Alata', 'sans-serif'],
        'roboto-slab': ['Roboto Slab', 'serif'],
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
  plugins: [],
};
