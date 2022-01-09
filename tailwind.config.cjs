// tailwind.config.cjs

module.exports = {
	// add this section
	purge: ['./src/**/*.html', './src/**/*.svelte'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		fontFamily: {
			archivo: ['"Archivo Black", sans-serif'],
			roboto: ["'Roboto', sans-serif;"]
		},
		variants: {
			extend: {}
		},
		plugins: []
	}
};
