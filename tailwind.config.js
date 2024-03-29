/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                defaultColor: "#094095",
            },
            spacing: { 30: "15rem", 40: "10rem" },
        },
    },
    plugins: [],
};
