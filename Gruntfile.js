module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),

        // commands
        run: {
            cacheBustCSS: {
                args: ["automation/update-cache-busting.js", "css"]
            },
            cacheBustJS: {
                args: ["automation/update-cache-busting.js", "js"]
            }
        },

        // pug/html
        pug: {
            options: {
                pretty: true
            },
            files: {
                src: "src/pug/*.pug",
                dest: "dist",
                flatten: true,
                expand: true,
                ext: ".html"
            }
        },

        // webpack
        webpack: {
            main: require("./webpack.config.js")
        },

        // scss/css
        sass: {
            main: {
                files: {
                    "dist/css/style.css": "src/scss/style.scss"
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ["last 3 versions"]
            },
            main: {
                files: {
                    "dist/css/style.css": "dist/css/style.css"
                }
            }
        },
        cmq: {
            main: {
                files: {
                    "dist/css/style.css": "dist/css/style.css"
                }
            }
        },
        cssmin: {
            main: {
                files: {
                    "dist/css/style.css": "dist/css/style.css"
                }
            }
        },

        // Copy
        copy: {
            style: {
                cwd: "dist/css",
                src: "**/*",
                dest: "wp-content/themes/FRNT/",
                expand: true
            },
            js: {
                cwd: "dist/js",
                src: "**/*",
                dest: "wp-content/themes/FRNT/js/",
                expand: true
            }
        },

        clean: {
            js: ["dist/js", "wp-content/themes/FRNT/js"],
            style: ["dist/css", "wp-content/themes/FRNT/style.css"],
            html: ["dist/*.html"]
        },

        // watch
        watch: {
            options: {
                livereload: true
            },
            html: {
                files: ["src/pug/*.pug"],
                tasks: ["clean:html", "pug"]
            },
            js: {
                files: ["src/js/**/*.js"],
                tasks: [
                    "clean:js",
                    "webpack:main",
                    "copy:js",
                    "run:cacheBustJS"
                ]
            },
            css: {
                files: ["src/scss/**/*.scss"],
                tasks: [
                    "sass:main",
                    "autoprefixer:main",
                    "cmq:main",
                    "cssmin:main",
                    "copy:style",
                    "run:cacheBustCSS"
                ]
            },
            wordpress: {
                files: [
                    "wp-content/themes/FRNT/*.php",
                    "wp-content/themes/FRNT/functions/*.php",
                    "wp-content/themes/FRNT/templates/**/*.php"
                ]
            }
        }
    });

    // Load npm tasks
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-combine-media-queries");
    grunt.loadNpmTasks("grunt-contrib-pug");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-autoprefixer");
    grunt.loadNpmTasks("grunt-notify");
    grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks("grunt-run");

    // Defined tasks
    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", [
        "clean:html",
        "clean:style",
        "clean:js",
        "sass:main",
        "autoprefixer:main",
        "cmq:main",
        "cssmin:main",
        "copy:style",
        "webpack:main",
        "copy:js",
        "pug"
    ]);
};
