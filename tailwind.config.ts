// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0D1B2A',
        secondary: '#FFFFFF',
        tertiary: '#F97316',
      },
    },
  },
  plugins: [],
};

export default config;
