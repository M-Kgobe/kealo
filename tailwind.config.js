/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"];

export const plugins = [];

module.exports = {
	theme: {
		extend: {
			animation: {
				gradient: "gradient 1s ease infinite",
				float: "float 6s ease-in-out infinite",
				blob: "blob 8s infinite ease-in-out",
			},
			keyframes: {
				gradient: {
					"0%, 100%": { backgroundPosition: "0% 100%" },
				},
				float: {
					"0%, 100%": { transform: "translateY(0)" },
					"50%": { transform: "translateY(-12px)" },
				},
				blob: {
					"0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
					"33%": { transform: "translate(10px, -10px) scale(1.05)" },
					"66%": { transform: "translate(-10px, 10px) scale(0.95)" },
				},
			},
		},
	},
};
