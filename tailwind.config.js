/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // Theme-specific colors
      colors: {
        // Detective theme colors
        detective: {
          primary: '#121212',
          secondary: '#343434',
          accent: '#ffd700',
          text: '#f0f0f0',
          'text-faded': '#a0a0a0',
        },
        // Terminal theme colors
        terminal: {
          primary: '#0a0a0a',
          secondary: '#1a1a1a',
          accent: '#00ff00',
          text: '#00ff00',
          'text-faded': '#007700',
        },
      },
      // Theme-specific fonts
      fontFamily: {
        detective: ['Courier Prime', 'monospace'],
        terminal: ['Cascadia Code', 'monospace'],
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
