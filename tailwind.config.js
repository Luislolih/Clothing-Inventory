/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                defaultColor: "#2F3349",
                defaultBgColor: "#41455A",
                defaultBgHover: "#4C5584",
            },
            spacing: { 25: "7.5rem", 30: "10rem", 40: "15rem" },
        },
    },
    plugins: [],
};
