const colors = require('tailwindcss/colors')

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		
		extend: {
			fontFamily: {
			lemonmilk: ["LEMONMILK", "sans-serif"],
			lemonmilkbold: ["LEMONMILKBOLD", "sans-serif"],
			lemonmilkmedium: ["LEMONMILKMEDIUM", "sans-serif"],
		  },
		  colors: {      
			transparent: 'transparent',
			current: 'currentColor',
			'white': '#ffffff',
				'ph-blue': {
					'50': '#eef8ff',
					'100': '#d9eeff',
					'200': '#bce2ff',
					'300': '#8ed1ff',
					'400': '#58b6ff',
					'500': '#3296ff',
					'600': '#1b76f5',
					'700': '#1460e1',
					'800': '#174eb8',
					'900': '#19448f',
				},			
			},
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
