import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: "class",
    content: [
        "./app/**/*.{ts,tsx}",
        "./components/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    light: "#7c3aed", // purple-600
                    dark: "#a78bfa",  // purple-400
                },
                secondary: {
                    light: "#0ea5e9", // sky-500
                    dark: "#38bdf8",  // sky-400
                },
            },
        },
    },
    plugins: [],
};

export default config;
