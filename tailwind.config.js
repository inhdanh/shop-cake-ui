/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        footer: "url('/src/assets/images/footer.jpg')",
        'gradient-radial':
          'radial-gradient(circle at bottom left,rgba(248, 71, 71,.99) 5%,rgba(255, 255, 255,.2) 74%)',
      },
      keyframes: {
        'to-left': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        'to-right': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'move-to-left': 'to-left 0.5s ease-out',
        'move-to-right': 'to-right 0.5s ease-out',
        marquee: 'marquee 24s linear 0s infinite',
      },
    },
  },
  plugins: [],
}
