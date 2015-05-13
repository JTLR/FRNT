module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // jade/html
        jade: {
            options: {
                pretty: true
            },
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
            },
            site: {
                src: ["src/js/*.js", "!src/js/*.min.js"],
                dest: "dist/js",
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
        autoprefixer: {
            options: {
                browsers: ["last 2 versions", "ie 8", "ie 9"]
            },
            stylesheet: {
                src: "dist/css/stylesheet.css",
                dest: "dist/css/stylesheet.css"
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
                files: [{
                    optimizationLevel: 7,
                    flatten: true,
                    expand: true,     
                    src: "src/img/*.{png,jpg,gif}",
                    dest: "dist/img/"
                }]
            }
        },


        // watch
        watch: {
            options: {
                livereload: true
            },
            jade: {
                files: ["src/jade/**/*.jade"],
                tasks: ["jade"]
            },
            img: {
                files: ["src/img/*.{png,jpg,gif}"],
                tasks: ["imagemin:dynamic"]
            },
            jsLibs: {
                files: ["src/js/libs/*.js", "!src/js/libs/*.min.js"],
                tasks: ["uglify:libs"]
            },
            jsSite: {
                files: ["src/js/*.js", "!src/js/*.min.js"],
                tasks: ["uglify:site"]
            },
            scss: {
                files: ["src/scss/**/*.scss"],
                tasks: ["sass", "autoprefixer", "cmq", "cssmin"]
            }
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-combine-media-queries");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-autoprefixer");

    // Defined tasks
    grunt.registerTask("default", ["watch"]);
};