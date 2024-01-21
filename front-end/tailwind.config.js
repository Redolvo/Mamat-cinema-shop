/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                blacks: {
                    500: "#000814",
                },
                greys: {
                    500: "#E7EAEF",
                    600: "#999FAB",
                },
                blues: {
                    400: "#0F6BC1",
                    500: "#003566",
                    600: "#001D3D",
                },
                yellows: {
                    400: "#FBDD46",
                    500: "#F5CC00",
                    600: "#CCA000",
                },
            },
            fontFamily: {
                sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [require("daisyui")],
};
