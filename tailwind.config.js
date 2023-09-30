/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        abril: ['Abril Fatface','cursive'],
        autograph: ['Autograf PERSONAL USE ONLY', 'sans-serif']
      },
      colors:{
        primaryGreen: "#29BF12",
      },
      textStrokeColor: {
        DEFAULT: 'currentColor',
      },
      textStrokeWidth: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [],
}
