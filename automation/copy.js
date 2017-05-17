module.exports = {
    fonts: {
        files: [{
            expand: true,
            cwd: '<%= paths.fonts %>',
            src: ['**/*.woff', '**/*.woff2'],
            dest: '<%= paths.build.fonts %>'
        }]
    },

    images: {
        files: [{
            expand: true,
            cwd: '<%= paths.images %>',
            src: ['**/*.{jpg,png}'],
            dest: '<%= paths.build.images %>'
        }]
    }
}
