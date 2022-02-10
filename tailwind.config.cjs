// tailwind.config.cjs

module.exports = {
	mode: 'jit',
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			archivo: ['"Archivo Black", sans-serif'],
			roboto: ["'Roboto', sans-serif"],
			roboto_c: ["'Roboto Condensed', sans-serif"]
		},
		variants: {
			extend: {}
		},
		plugins: []
	}
};
