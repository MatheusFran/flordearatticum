import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: '#C9A227',
        'green-brand': '#0f2e1e',
        cream: '#F5EFE7',
        border: '#E5DDD1',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        lato: ['Lato', 'sans-serif'],
      },
      spacing: {
        'px': '1px',
      },
    },
  },
  plugins: [],
}

export default config
