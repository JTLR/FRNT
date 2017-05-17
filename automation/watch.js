module.exports = {

    styles: {
        cwd: "<%= paths.sass %>",
        files: ['**/*.scss'],
        tasks: ['styles'],
        options: {
            spawn: true,
            interrupt: true
        }
    },

    css: {
        cwd: "<%= paths.css %>",
        files: ['**/*.min.css'],
        options: {
            livereload: true
        }
    },

    scripts: {
        cwd: "<%= paths.build.scripts %>",
        files: ['**/*.js'],
        tasks: ['scripts'],
        options: {
            spawn: true,
            interrupt: true,
            livereload: true
        }
    },

    pug: {
        cwd: "<%= paths.src.views %>",
        files: ['**/*.pug'],
        tasks: ['templates'],
        options: {
            spawn: true,
            interrupt: true,
            livereload: true
        }
    },

    images: {
        cwd: "<%= paths.src.images %>",
        files: ['**/*.{jpg,png,gif}'],
        tasks: ['copy:images'],
        options: {
            spawn: true,
            interrupt: true
        }
    },

    fonts: {
        cwd: "<%= paths.src.fonts %>",
        files: ['**/*.{ttf,otf,woff,woff2,eot}'],
        tasks: ['copy:fonts'],
        options: {
            spawn: true,
            interrupt: true
        }
    }
};
