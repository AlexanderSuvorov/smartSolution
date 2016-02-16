var gulp = require('gulp'),
	cssnano = require('gulp-cssnano'),
	uglify = require('gulp-uglify'),
	rename = require("gulp-rename");

gulp.task('default', ['min-css', 'min-js', 'watch']);

gulp.task('min-css', function() {
  return gulp.src('css/*.css')
	    .pipe(cssnano())
	    .pipe(rename(function (path) {
	        	path.basename += ".min";
	    	}))
	    .pipe(gulp.dest('prod/css'));
});

gulp.task('min-js', function() {
  return gulp.src('js/app/*.js')
	    .pipe(uglify())
	    .pipe(gulp.dest('prod/js/app'));
});

gulp.task('watch', function() {
	gulp.watch('css/*.css', ['min-css'])
})

gulp.task('watch', function() {
	gulp.watch('js/app/*.js', ['min-js'])
})
