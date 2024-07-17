import type {Config} from "tailwindcss"

import svgToDataUri from "mini-svg-data-uri";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      transitionDuration: {
        "1300": "1300ms",
      },
      keyframes: {
        "accordion-down": {
          from: {height: "0"},
          to: {height: "var(--radix-accordion-content-height)"},
        },
        "accordion-up": {
          from: {height: "var(--radix-accordion-content-height)"},
          to: {height: "0"},
        },
        gradient: {
          "0": {backgroundPosition: "0% 50%"},
          "100%": {backgroundPosition: "100% 50%"}
        },
        "fade-in": {
          "0%": {opacity: "0"},
          "100%": {opacity: "1"}
        },
        "left-to-right": {
          "0%": {transform: "translateX(-40px)", opacity: "0"},
          "100%": {transform: "translateX(0)", opacity: "1"}
        },
        "bottom-to-top": {
          "0%": {transform: "translateY(20px)", opacity: "0"},
          "100%": {transform: "translateY(0)", opacity: "1"}
        },
        "right-to-left": {
          "0%": {transform: "translateX(20px)", opacity: "0"},
          "100%": {transform: "translateX(0)", opacity: "1"}
        },
        "top-to-bottom": {
          "0%": {transform: "translateY(-20px)", opacity: "0"},
          "100%": {transform: "translateY(0)", opacity: "1"}
        }

      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out forwards",
        "accordion-up": "accordion-up 0.2s ease-out forwards",
        gradient: "gradient 4s linear infinite forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "left-to-right": "left-to-right var(--animation-duration, 1s) var(--animation-delay, 0s) var(--animation-easing, ease-out) forwards",
        "bottom-to-top": "bottom-to-top var(--animation-duration, 1s) var(--animation-delay, 0s) var(--animation-easing, ease-out) forwards",
        "right-to-left": "right-to-left var(--animation-duration, 1s) var(--animation-delay, 0s) var(--animation-easing, ease-out) forwards",
        "top-to-bottom": "top-to-bottom var(--animation-duration, 1s) var(--animation-delay, 0s) var(--animation-easing, ease-out) forwards"
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    function ({matchUtilities, theme}: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        {values: flattenColorPalette(theme("backgroundColor")), type: "color"}
      );

    },
  ],
} satisfies Config

export default config