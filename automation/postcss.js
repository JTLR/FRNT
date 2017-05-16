module.exports = {

	options: {
		map: false, // inline sourcemaps

		processors: [
			require('autoprefixer')({browsers: 'last 2 versions'})
		]
	},

	dist: {
		src: '<%= paths.build.styles %>/**/*.css'
	}

};
