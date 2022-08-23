// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./app/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };

/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require("tailwindcss/defaultTheme");

const { colros } = require("tailwindcss/colors");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */

// w-0	width: 0px;
// w-px	width: 1px;
// w-0.5	width: 0.125rem; /* 2px */
// w-1	width: 0.25rem; /* 4px */
// w-1.5	width: 0.375rem; /* 6px */
// w-2	width: 0.5rem; /* 8px */
// w-2.5	width: 0.625rem; /* 10px */
// w-3	width: 0.75rem; /* 12px */
// w-3.5	width: 0.875rem; /* 14px */
// w-4	width: 1rem; /* 16px */
// w-5	width: 1.25rem; /* 20px */
// w-6	width: 1.5rem; /* 24px */
// w-7	width: 1.75rem; /* 28px */
// w-8	width: 2rem; /* 32px */
// w-9	width: 2.25rem; /* 36px */
// w-10	width: 2.5rem; /* 40px */
// w-11	width: 2.75rem; /* 44px */
// w-12	width: 3rem; /* 48px */
// w-14	width: 3.5rem; /* 56px */
// w-16	width: 4rem; /* 64px */4
// w-20	width: 5rem; /* 80px */4
// w-24	width: 6rem; /* 96px */4
// w-28	width: 7rem; /* 112px */4
// w-32	width: 8rem; /* 128px */4
// w-36	width: 9rem; /* 144px */4
// w-40	width: 10rem; /* 160px */4
// w-44	width: 11rem; /* 176px */4
// w-48	width: 12rem; /* 192px */4
// w-52	width: 13rem; /* 208px */4
// w-56	width: 14rem; /* 224px */4
// w-60	width: 15rem; /* 240px */ 4
// w-64	width: 16rem; /* 256px */4
// w-72	width: 18rem; /* 288px */8
// w-80	width: 20rem; /* 320px */8
// w-88	width: 22rem; /* 320px */8
// w-96	width: 24rem; /* 384px */8
// w-104	width: 26rem; /* 384px */8
// w-112	width: 28rem; /* 384px */8
// w-120	width: 30rem; /* 384px */8
// w-128	width: 32rem; /* 384px */8
// w-136	width: 34rem; /* 384px */8
// w-144	width: 36rem; /* 384px */8

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      width: {
        88: "22rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
      },
      height: {
        88: "22rem",
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
      },

      fontFamily: {
        primary: ["TT Commons", ...fontFamily.sans],
        // primary: [ ...fontFamily.sans],
      },
      colors: {
        primary: {
          // Customize it on globals.css :root
          50: "rgb(var(--tw-color-primary-50) / <alpha-value>)",
          100: "rgb(var(--tw-color-primary-100) / <alpha-value>)",
          200: "rgb(var(--tw-color-primary-200) / <alpha-value>)",
          300: "rgb(var(--tw-color-primary-300) / <alpha-value>)",
          400: "rgb(var(--tw-color-primary-400) / <alpha-value>)",
          500: "rgb(var(--tw-color-primary-500) / <alpha-value>)",
          600: "rgb(var(--tw-color-primary-600) / <alpha-value>)",
          700: "rgb(var(--tw-color-primary-700) / <alpha-value>)",
          800: "rgb(var(--tw-color-primary-800) / <alpha-value>)",
          900: "rgb(var(--tw-color-primary-900) / <alpha-value>)",
        },

        slate: {
          10: "#fcfdff",
          20: "#fbfdff",
          30: "#fafcfe",
          40: "#f9fbfd",
          ...colors.slate,
        },
        blue: {
          25: "#f8fcff",
        },
        dark: "#222222",
      },
      keyframes: {
        flicker: {
          "0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%": {
            opacity: 0.99,
            filter:
              "drop-shadow(0 0 1px rgba(252, 211, 77)) drop-shadow(0 0 15px rgba(245, 158, 11)) drop-shadow(0 0 1px rgba(252, 211, 77))",
          },
          "20%, 21.999%, 63%, 63.999%, 65%, 69.999%": {
            opacity: 0.4,
            filter: "none",
          },
        },
        shimmer: {
          "0%": {
            backgroundPosition: "-700px 0",
          },
          "100%": {
            backgroundPosition: "700px 0",
          },
        },
      },
      animation: {
        flicker: "flicker 3s linear infinite",
        shimmer: "shimmer 1.3s linear infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
