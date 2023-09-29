/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cormorant': ["Cormorant, serif"],
      },
      animation: {
        "slide-in": "slide-in 0.2s linear",
        "slide-out": "slide-out 0.2s linear"
      },
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translateY(-50px)",
            opacity: "0"
          },
          to: {
              transform: "translateY(0)",
              opacity: "1"
          }
        },
        "slide-out": {
          "0%": {
            transform: "translateY(0)",
            opacity: "1"
          },
          to: {
              transform: "translateY(1000px)",
              opacity: "0"
          }
        }
      }
    },
  },
  plugins: [],
}

