var gulp    = require('gulp');
var rename  = require('gulp-rename');
var cssmin  = require('gulp-cssmin');
var sass    = require('gulp-sass');

gulp.task('styles', function(){
  return gulp.src('./src/sass-flexboxgrid.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify', function(){
  return gulp.src('./dist/sass-flexboxgrid.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', ['styles', 'minify'], function() {
  gulp.watch('./src/**/*.scss', ['styles', 'minify']);
  setTimeout(function() {
		console.info('Watching for changes...');
	},200);
});

gulp.task('dist', ['styles', 'minify']);
