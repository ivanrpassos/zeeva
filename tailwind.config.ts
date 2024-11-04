import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-geist-sans)'],
      mono: ['var(--font-geist-mono)'],
    },
    screens: {
      sm: { max: '540px', min: '340px' },
      md: { max: '960px', min: '540px' },
      lg: { max: '1140px', min: '960px' },
      xl: { max: '1440px' },
    },
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function ({ addComponents }: any) {
      addComponents({
        '.container': {
          margin: '0 auto',
          padding: '5rem 2.5rem',
          maxWidth: 'calc(1350px + 80px)',

          '@screen sm': {
            paddingInline: '1.5rem',
          },

          '@screen md': {
            paddingInline: '2rem',
          },
        },
      })
    },
  ],
}
export default config
