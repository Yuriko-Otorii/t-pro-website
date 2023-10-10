/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ["Cormorant, serif"],
      },
      animation: {
        "slide-in": "slide-in 0.2s ease-out",
        "slide-out": "slide-out 0.2s ease-out",
        "toast-in": "toast-in 0.2s ease-out",
        "toast-out": "toast-out 0.2s ease-out",
      },
      keyframes: {
        "slide-in": {
          '0%': {
            transform: 'translateY(100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          }, 
        },
        "slide-out": {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(100%)',
            opacity: '0'
          },
        },
        "toast-in": {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0'
          },
          '100%': {
            transform: 'translateY(0)',
            opacity: '1'
          },  
        },
        "toast-out": {
          '0%': {
            transform: 'translateY(0)',
            opacity: '1'
          },
          '100%': {
            transform: 'translateY(-100%)',
            opacity: '0'
          },  
        }
      },
      transformOrigin: {
        'right-top': 'right top',
        'left-top': 'left top',
      },
    },
  },
  plugins: [],
}

