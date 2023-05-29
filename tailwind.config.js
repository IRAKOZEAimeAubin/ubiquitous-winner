import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: [ "'Lora', serif", ...defaultTheme.fontFamily.serif ],
        sans: [ "'Montserrat', sans-serif", ...defaultTheme.fontFamily.sans ],
        mono: [ "'DM Mono', monospace", ...defaultTheme.fontFamily.mono ]
      }
    },
  },
  plugins: [],
};