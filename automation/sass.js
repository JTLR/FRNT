module.exports = {
	dist: {
		options: {
			style: 'expanded',
			includePaths: require("node-bourbon").includePaths
		},
		files: [{
			expand: true,
			cwd: '<%= paths.src.styles %>',
			src: ['**/*.scss'],
			dest: '<%= paths.build.styles %>',
			ext: '.css'
		}]
	}
};