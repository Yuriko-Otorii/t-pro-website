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
        "slide-in": "slide-in 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both",
        "slide-out": "slide-out 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both"
      },
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translateX(1000px)",
            opacity: "0"
          },
          to: {
              transform: "translateX(0)",
              opacity: "1"
          }
        },
        "slide-out": {
          "0%": {
            transform: "translateX(0)",
            opacity: "1"
          },
          to: {
              transform: "translateX(1000px)",
              opacity: "0"
          }
        }
      }
    },
  },
  plugins: [],
}

