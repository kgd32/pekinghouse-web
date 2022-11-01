const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
			lemonmilk: ["LEMONMILK", "sans-serif"],
			lemonmilkbold: ["LEMONMILKBOLD", "sans-serif"],
			lemonmilkmedium: ["LEMONMILKMEDIUM", "sans-serif"],
		  },
		}
	},

	plugins: [require('@tailwindcss/typography')]
};

module.exports = config;
