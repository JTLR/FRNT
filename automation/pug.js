module.exports = {

    dev: {
        options: {
            data: {
                debug: true
            },
            pretty: true
        },

        files: [{
            cwd: '<%= paths.src.views %>',
            expand: true,
            src: ['*.pug', '!_*.pug'],
            dest: '<%= paths.build.views %>',
            ext: '.html'
        }]
    },

    build: {
        options: {
            data: {
                debug: false
            },
            pretty: false
        },

        files: [{
            cwd: '<%= paths.src.views %>',
            expand: true,
            src: ['*.pug', '!_*.pug'],
            dest: '<%= paths.build.views %>',
            ext: '.html'
        }]
    }
};
