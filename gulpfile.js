"use strict";

var gulp = require("gulp"),
	jade = require("gulp-jade"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	minifyCss = require("gulp-minify-css"),
	autoprefixer = require("gulp-autoprefixer"),
	combineMq = require("gulp-combine-mq");

gulp.task("default", function() {
	// place code for your default task here
});

 
gulp.task("jade", function() { 
	gulp.src("src/jade/*.jade")
		.pipe(jade())
		.pipe(gulp.dest("dist/html"));
});

 
gulp.task("uglify", function() {
	return gulp.src("src/js/**/*.js")
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe(gulp.dest("dist/js"));
});

gulp.task("sass", function () {
	gulp.src("src/scss/**/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(rename({
			extname: ".min.css"
		}))
		.pipe(autoprefixer({
			browsers: ["last 2 versions", "ie 8", "ie 9"]
		}))		
		.pipe(combineMq({
			beautify: false
		}))
		.pipe(minifyCss())
		.pipe(gulp.dest("dist/css"))
});