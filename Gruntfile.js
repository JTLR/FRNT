module.exports = function (grunt) {

    // Automatically load our grunt tasks
    require('load-grunt-tasks')(grunt);

    // Grunt task loader options
    var options = {
        config: {
            src: './automation/*.js'
        },
        pkg: grunt.file.readJSON('package.json'),
        paths: {
            src: {
                views: "./src/views",
                scripts: "./src/scripts",
                styles: "./src/styles",
                fonts: "./src/fonts",
                images: "./src/images"
            },
            build: {
                views: "./build/views",
                scripts: "./build/scripts",
                styles: "./build/styles",
                fonts: "./build/fonts",
                images: "./build/images"
            }

        }
    };

    var configs = require('load-grunt-configs')(grunt, options);
    grunt.initConfig(configs);

    // Views
    grunt.registerTask('templates', ['pug:dev']);
    grunt.registerTask('html', ['pug:build']);

    // Styles
    grunt.registerTask('styles', ['sass:dist', 'postcss:dist', 'combine_mq:dist', 'cssmin:dist']);

    // Images
    grunt.registerTask('images', ['copy:images']);

    // Fonts
    grunt.registerTask('fonts', ['copy:fonts']);

    // Scripts
    grunt.registerTask('scripts', ['webpack-dev-server:start']);

    grunt.registerTask('default', ['templates', 'styles', 'concurrent:app']);

    grunt.registerTask('build', ['clean', 'html', 'styles', 'webpack']);
}
