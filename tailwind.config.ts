import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      colors: {
        "bg-100": "#08040a",
        "principal": "#6c63ff",
        "secondary-100": "#195fbf",
        "secondary-200": "#2096f4",
        "text-100": "#ffffff",
        "text-200": "#dcdcdc",
        "text-300": "#c3c3c3",
        "bg-200": "#131213",
        "bg-300": "#232323",
        "bg-card": "#08040a",
        "nav": "#08040a"
      }

    }
  },
  plugins: []
}
export default config
