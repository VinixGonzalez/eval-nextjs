/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        black: "#0E0D14",
        darkGrey: "#938E8E",
        midGrey: "#BEB8B8",
        lightGrey: "#D5D3D3",
        lightGrey2: "#F2F2F2",
        white: "#FFF",
        purple: "#591EE5",
        lightPurple: "#F1E8FB",
        darkBlue: "#032DA9",
        lightBlue: "#ADC0FF",
        darkGreen: "#004801",
        green: "#00D7A9",
        lightGreen: "#D9F9F2",
        darkYellow: "#4E3C06",
        yellow: "#FBBD08",
        lightYellow: "#FEF2CD",
        violet: "#A274FF",
        lightViolet: "#DCCBFF",
      },
      borderRadius: {
        "4xl": "38px",
      },
      width: {
        "card-login": "530px",
      },
      maxWidth: {
        "card-login": "530px",
        "card-reset-password-success": "450px",
      },
      minHeight: {
        half: "50vh",
      },
    },
  },
  plugins: [],
};
