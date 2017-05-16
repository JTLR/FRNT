module.exports = {

	dist: {
		files: [
			{
				expand: true,
				cwd: '<%= paths.build.styles %>',
				src: ['**/*.css'],
				dest: '<%= paths.build.styles %>',
				ext: '.min.css'
			}
		],
		options: {
			keepSpecialComments: 0
		}
	}

}
