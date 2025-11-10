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
		},
		animation: {
		},
	},
};
