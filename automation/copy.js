module.exports = {
    fonts: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.fonts %>',
            src: ['**/*.{ttf,otf,woff,woff2,eot}'],
            dest: '<%= paths.build.fonts %>'
        }]
    },

    images: {
        files: [{
            expand: true,
            cwd: '<%= paths.src.images %>',
            src: ['**/*.{jpg,png,gif}'],
            dest: '<%= paths.build.images %>'
        }]
    }
}
