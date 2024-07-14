/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "rgb(var(--primary))",
      "primary-inverse": "rgb(var(--primary-inverse))",
      "primary-hover": "rgb(var(--primary-hover))",
      "primary-active-color": "rgb(var(--primary-active-color))",

      "primary-highlight":
        "rgb(var(--primary)/var(--primary-highlight-opacity))",
      "primary-highlight-inverse": "rgb(var(--primary-highlight-inverse))",
      "primary-highlight-hover":
        "rgb(var(--primary)/var(--primary-highlight-hover-opacity))",

      "primary-50": "rgb(var(--primary-50))",
      "primary-100": "rgb(var(--primary-100))",
      "primary-200": "rgb(var(--primary-200))",
      "primary-300": "rgb(var(--primary-300))",
      "primary-400": "rgb(var(--primary-400))",
      "primary-500": "rgb(var(--primary-500))",
      "primary-600": "rgb(var(--primary-600))",
      "primary-700": "rgb(var(--primary-700))",
      "primary-800": "rgb(var(--primary-800))",
      "primary-900": "rgb(var(--primary-900))",
      "primary-950": "rgb(var(--primary-950))",
      "surface-0": "rgb(var(--surface-0))",
      "surface-50": "rgb(var(--surface-50))",
      "surface-100": "rgb(var(--surface-100))",
      "surface-200": "rgb(var(--surface-200))",
      "surface-300": "rgb(var(--surface-300))",
      "surface-400": "rgb(var(--surface-400))",
      "surface-500": "rgb(var(--surface-500))",
      "surface-600": "rgb(var(--surface-600))",
      "surface-700": "rgb(var(--surface-700))",
      "surface-800": "rgb(var(--surface-800))",
      "surface-900": "rgb(var(--surface-900))",
      "surface-950": "rgb(var(--surface-950))",
      'primary': "#89FFDB",
      'secundary': "#FFF",
      'black': "#000",
    },
    fontFamily: {
      'sans': ["Graphik", "sans-serif"],
      'serif': ["Merriweather", "serif"],
    },
    height: {
      "section-desktop": "1950px",
      "section-mobile": "3400px",
      "section-tablet": "2100px",
      "section2-desktop": "1000px",
      "section2-mobile": "1850px",
      "section2-tablet": "1200px",
      "section3-desktop": "1500px",
      "section3-mobile": "2350px",
      "section3-tablet": "1850px",
      "section4-desktop": "1650px",
      "section4-mobile": "2050px",
      "section4-tablet": "2050px"
    },
  },
  plugins: [],
};
