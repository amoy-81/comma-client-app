/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "var(--color-primary-100)",
          200: "var(--color-primary-200)",
          300: "var(--color-primary-300)",
          400: "var(--color-primary-400)",
          500: "var(--color-primary-500)",
          600: "var(--color-primary-600)",
          700: "var(--color-primary-700)",
          800: "var(--color-primary-800)",
          900: "var(--color-primary-900)",
          1000: "var(--color-primary-1000)",
        },
        secondary: {
          100: "var(--color-secondary-100)",
          200: "var(--color-secondary-200)",
          300: "var(--color-secondary-300)",
          400: "var(--color-secondary-400)",
          500: "var(--color-secondary-500)",
          600: "var(--color-secondary-600)",
          700: "var(--color-secondary-700)",
          800: "var(--color-secondary-800)",
          900: "var(--color-secondary-900)",
          1000: "var(--color-secondary-1000)",
        },
        tertiary: {
          100: "var(--color-tertiary-100)",
          200: "var(--color-tertiary-200)",
          300: "var(--color-tertiary-300)",
          400: "var(--color-tertiary-400)",
          500: "var(--color-tertiary-500)",
          600: "var(--color-tertiary-600)",
          700: "var(--color-tertiary-700)",
          800: "var(--color-tertiary-800)",
          900: "var(--color-tertiary-900)",
          1000: "var(--color-tertiary-1000)",
        },
        white: "var(--color-white)",
      },
    },
  },
  plugins: [],
};
