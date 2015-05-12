module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // jade/html
        jade: {
            files: {
                src: "src/jade/*.jade",
                dest: "dist/html",
                flatten: true,
                expand: true,
                ext: ".html"
            }
        },

        // js
        uglify: {
            libs: {
                src: ["src/js/libs/*.js", "!src/js/libs/*.min.js"],
                dest: "dist/js/libs",
                sourceMap: true,
                expand: true,
                flatten: true,
                drop_console: true,
                ext: ".min.js",
                extDot: "last"
            }
        },

        // scss/css
        sass: {
            dev: {
                files: {
                    "dist/css/stylesheet.css": "src/scss/stylesheet.scss",
                },
                options : {
                    sourceComments: "normal",
                    includePaths: require("node-bourbon").includePaths
                }
            }
        },
        cmq: {
            stylesheet: {
                files: {
                    "dist/css/stylesheet.css": ["dist/css/stylesheet.css"]
                }
            }

        },
        cssmin: {
            stylesheet: {
                files: {
                    "dist/css/stylesheet.min.css": ["dist/css/stylesheet.css"]
                }
            }
        },

        // img
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 7
                },
                files: [{
                    expand: true,     
                    src: "src/img/*.{png,jpg,gif}",
                    dest: "dist/img/"
                }]
            }
        },


        // watch
        watch: {
            jade: {
                files: ["src/jade/*.jade"],
                tasks: ["jade"]
            },
            img: {
                files: ["images/*.{png,jpg,gif}"],
                tasks: ["imagemin:dynamic"]
            },
            js: {
                files: ["src/js/libs/*.js", "!src/js/libs/*.min.js"],
                tasks: ["uglify:libs"]
            },
            scss: {
                files: ["src/scss/**/*.scss"],
                tasks: ["sass", "cmq", "cssmin"]
            }
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-combine-media-queries");
    grunt.loadNpmTasks("grunt-sass");

    // Defined tasks
    grunt.registerTask("default", ["watch"]);
};