
/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-minify-css gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

 'use strict';
 
// Load plugins
 var    gulp = require('gulp');
 //var    sass = require('gulp-sass');    
 var      jshint = require('gulp-jshint');
 var      uglify = require('gulp-uglify');
 var      nukeWhitespace = require('gulp-nuke-whitespace');   
 var      rename = require('gulp-rename');
 var      concat = require('gulp-concat');
 var      autoprefixer = require('gulp-autoprefixer'),
 var      minifyCss = require('gulp-minify-css'),
 var      notify = require('gulp-notify'),
 var      cache = require('gulp-cache'),
 var      livereload = require('gulp-livereload'),
          del = require('del');

	
	//Lint Task 
gulp.task('lint', function() {
	return gulp.src('views/js/*.js')
	   .pipe(jshint())
	   .pipe(jshint.reporter('default'));
	   
});
  //nuke white space
gulp.task('nuke', function() {
	return gulp.src('views/js/*.js')
	   .pipe(nukeWhitespace())
	   .pipe(gulp.dest('dist'));
});
// Complile Sass
gulp.task('sass', function() {
  return gulp.src('scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('css'));
});

// Scripts 

 gulp.task('scripts', function() {
  return gulp.src('views/js/*.js')
    .pipe(concat('all.js'))
	.pipe(gulp.dest('views/js/'))
	.pipe(rename('main.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('views/js/')); 
}); 

   //minify Css
gulp.task('minify-css', function() {
  return gulp.src('views/css/*.css')
    .pipe(minifyCss({compatibility: 'ie8'}))
	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('views/css/'));
	
});	

gulp.task('watch', function() {

  // Watch  files
  gulp.watch('views/js/*.js', ['lint', 'scripts']);
  gulp.watch('scss/*.scss', ['sass']);
});

  
// Default task
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
    
