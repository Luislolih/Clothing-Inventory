/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                defaultColor: "#2F3349",
                defaultBgColor: "#41455A",
            },
            spacing: { 30: "15rem", 40: "10rem" },
        },
    },
    plugins: [],
};
