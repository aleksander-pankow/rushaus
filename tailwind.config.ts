import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    fontSize: {
      rhtitle: ['23px', '30px'],
      rhregular: ['16px', '30px'],
      rhbuttons: ['20x', '30px'],
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    aspectRatio: {
      auto: 'auto',
      square: '1 / 1',
      video: '16 / 9',
      1: '1',
      2: '2',
      3: '3',
      4: '4',
      5: '5',
      6: '6',
      7: '7',
      8: '8',
      9: '9',
      10: '10',
      11: '11',
      12: '12',
      13: '13',
      14: '14',
      15: '15',
      16: '16',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'sidebar-pattern': "url('/images/ru-flag-geometry-bg.png')",
        'map-pattern': "url('/images/russia-map-bg.png')",
        'common-pattern': "url('/images/common-background.jpg')",
        'line-between': 'linear-gradient(#000,#000) center/1px 100% no-repeat',
      },
      colors: {
        'theme-red': '#e21d3a',
        'theme-blue': '#06a2dc',
        'theme-green': '#6fb450',
        'theme-yellow': '#fac412',
        'theme-gray': '#575966',
      },
      fontFamily: {
        gilbold: ["Gilroy_Bold"],
        gilregular: ["Gilroy_Regular"],
        gilmedium: ["Gilroy_Medium"],
      },
      animation: {
        marquee: 'marquee 35s linear infinite',
        marquee2: 'marquee2 35s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      padding: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require("flowbite/plugin"),
  ],
}
export default config
