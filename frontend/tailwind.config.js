/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				darkbg: '#0A192F',
				card: '#112240',
				border: '#2E3E5C',
				accent: '#64FFDA',
				accentHover: '#52d1b8',
			},
			spacing: {
				small1: '4px',
				small2: '8px',
				small3: '12px',
				default: '16px',
				medium1: '20px',
				medium2: '24px',
				medium3: '32px',
				large1: '40px',
				large2: '48px',
				large3: '56px'
			}
		},
		screens: {
			sm: '640px',
			md: '768px',
			lg: '1024px',
			xl: '1280px',
			'2xl': '1536px',
		},
		keyframes: {
			"slide-in": {
				"0%": { transform: "translateX(120%)", opacity: "0" },
				"100%": { transform: "translateX(0)", opacity: "1" },
			},
		},
		animation: {
			"slide-in": "slide-in 0.3s ease-out",
		},
	},
};
