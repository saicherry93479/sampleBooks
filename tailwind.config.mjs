/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["Poppins", "sans-serif"],
				lora:['Lora', 'serif']
			  },
		},
		// screens: {
		// 	'md': '1020px'
		// }
	},
	plugins: [],
}
