"use strict";

var gulp = require("gulp"),
	jade = require("gulp-jade"),
	uglify = require("gulp-uglify"),
	rename = require("gulp-rename"),
	sass = require("gulp-sass"),
	autoprefixer = require("gulp-autoprefixer"),
	minifyCss = require("gulp-minify-css"),
	autoprefixer = require("gulp-autoprefixer"),
	imagemin = require("gulp-imagemin"),
	watch = require("gulp-watch"),
	notify = require("gulp-notify"),
	livereload = require("gulp-livereload"),
	combineMq = require("gulp-combine-mq");

gulp.task("default", ["watch"], function() {

});

gulp.task("watch", function() {
	livereload.listen();
	gulp.watch("src/scss/**/*.scss", ["sass"]);
	gulp.watch("src/js/**/*.js", ["uglify"]);
	gulp.watch("src/jade/**/*.jade", ["jade"]);
	gulp.watch("src/img/**/*.{jpg,gif,png}", ["imagemin"]);
});
 
gulp.task("jade", function() { 
	gulp.src("src/jade/*.jade")
		.pipe(jade())
		.pipe(gulp.dest("dist/html"))
		.pipe(livereload());
});

 
gulp.task("uglify", function() {
	return gulp.src("src/js/**/*.js")
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe(gulp.dest("dist/js"))
		.pipe(livereload());
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
		.pipe(livereload());
});

gulp.task("imagemin", function () {
	return gulp.src("src/img/**/*")
		.pipe(imagemin({
			progressive: true,
			optimizationLevel: 7
		}))
		.pipe(gulp.dest("dist/img"))
		.pipe(livereload());
});