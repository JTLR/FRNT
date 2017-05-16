module.exports = {
	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.build.styles %>',
				src: ['**/*.css'],
				dest: '<%= paths.build.styles %>',
				ext: '.css'
			}
		],
		options: {
			beautify: true
		}
	}
}
