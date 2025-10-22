/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkgreen: "#3e4736",
        green: "#4f6041",
        lightyellow: "#f9f5e8",
        teal: "#179988",
        deepteal: "#0f6d68",
        red: "#f03e32",
        deepred: "#D63A30",
        orange: "#f48817",
        sand: "#f3ede0",
      },
      fontFamily: {
        baskerville: ["var(--font-baskerville)", "serif"],
        worksans: ["var(--font-work-sans)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
      },
      spacing: {
        // Add custom spacing if needed
        // '72': '18rem',
      },
    },
  },
  plugins: [
    // Add Tailwind plugins here if needed
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
