module.exports = {

  purge: ["./src/*.html", "./src/**.{js,jsx,ts,tsx,vue}"],
  darkMode: 'class',
  theme: {

    extend: {

      colors: {
        primary: '#1C3A80',
        secondary: '#EB373F',
        primaryLight: '#284486',

        black: '#333',
        white: '#fff',

        gray: '#F4F4F4',

      },


      lineHeight: {
        'extra-loose': '2.5',
        '12': '3rem',
      },
      zIndex: {
        '60': '60',
      },

      height: theme => ({
        "screen/2": "70vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      }),


    },

    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      'md': '0.375rem',
      'lg': '0.2rem',
      'full': '9999px',
      'large': '12px',
    },

    container: {
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1140px",
        xl: "1140px"
      }
    },



  },
  variants: {},
  plugins: [],
}