/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                cerezaDark: "#1a0a0a",
                cerezaMid: "#550000",
                cerezaLight: "#2a0f0f",
                textCereza: "#d1bcbc"
            },
            fontFamily: {
                sans: ['Alata', 'system-ui', 'sans-serif'],
            }
        }
    },
    plugins: []
};
