/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      backgroundLight: "#F6F8FF",
      title: "#222731",
      modes: "#697C9A",
      white: "#FFFFFF",
      blue: "#0079FF",
      navy: "#4B6A9B",
      numbers: "#2B3442",
      backgroundDark: "#141D2F",
      searchDark: "#1E2A47",
      infoDark: "#141D2F",
      hovering: "#90A4D4",
      btnHover: "#60ABFF",
      red: "#F74646"
    },
  },
  plugins: [],
}
