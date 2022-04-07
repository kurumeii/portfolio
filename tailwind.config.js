module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: ['cupcake', 'halloween'],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
  },
  theme: {
    extend: {
      boxShadow: {
        'side--left':
          'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
        'multilayer-pink-left':
          'rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px',
        'multilayer-pink-center':
          'rgba(240, 46, 170, 0.4) 0px 5px, rgba(240, 46, 170, 0.3) 0px 10px, rgba(240, 46, 170, 0.2) 0px 15px, rgba(240, 46, 170, 0.1) 0px 20px, rgba(240, 46, 170, 0.05) 0px 25px;',
        'multilayer-pink-right':
          'rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px, rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px, rgba(240, 46, 170, 0.05) 25px 25px;',
        'all-around-md':
          ' rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px;',
      },
      transitionTimingFunction: {
        'bounce-in-out': 'cubic-bezier(.59,-0.06,.37,1.03)',
      },
      backgroundImage: {
        'hero-background': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/images/ava/gallery1.jpg')`,
        'login-background-xl': `url('/images/background/collins-lesulie-P3l3cqVLoRs-unsplash.jpg')`,
        'login-background-md': `url('/images/background/elise-wilcox-TKflRMFGxtc-unsplash.jpg')`,
        'rainbow-color': `linear-gradient(60deg, #ff2400, #e81d1d, #e8b71d, #e3e81d, #1de840, #1ddde8, #2b1de8, #dd00f3, #dd00f3)`,
      },
      backgroundSize: {
        'super-big': '400% 200%',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',

        teal: {
          100: '#e6fffa',
          200: '#b2f5ea',
          300: '#81e6d9',
          400: '#4fd1c5',
          500: '#38b2ac',
          600: '#319795',
          700: '#2c7a7b',
          800: '#285e61',
          900: '#234e52',
        },
      },
      keyframes: {
        'fade-in': {
          '0%': {opacity: 0},
          '100%': {opacity: 100},
        },
        'fade-out': {
          '0%': {opacity: 100},
          '100%': {opacity: 0},
        },
        'slide-left': {
          '0%': {
            transform: 'translate(-50%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translate(0)',
            opacity: 100,
          },
        },
        'slide-right': {
          '0%': {
            transform: 'translate(50%)',
            opacity: 0,
          },
          '100%': {
            transform: 'translate(0)',
            opacity: 100,
          },
        },
        rainbow: {
          '0%, 100%': {
            'background-position': '0% 80%',
          },
          '50%': {
            'background-position': '100% 20%',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in .5s ease-in 1',
        'fade-out': 'fade-out .5s ease-out 1',
        'sliding-in-left': 'slide-left .5s ease-in 1',
        'sliding-out-left': 'slide-left .5s ease-out 1',
        'sliding-in-right': 'slide-right .5s ease-in 1',
        'sliding-out-right': 'slide-right .5s ease-out 1',
        'gradient-color-run': 'rainbow 10s linear infinite',
      },
    },

    gradientColorStops: theme => ({
      ...theme('colors'),
      gura: '#355c7d',
      ina: '#6C5B7B',
      calliope: '#C06C84',
    }),
  },
}
