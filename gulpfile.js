var gulp     = require('gulp');
var rename   = require('gulp-rename');
var cssmin   = require('gulp-cssmin');
var sass     = require('gulp-sass');
var sasslint = require('gulp-sass-lint')

gulp.task('styles', function(){
  return gulp.src('./src/sass-flexboxgrid.scss')
    .pipe(sasslint())
    .pipe(sasslint.format())
    .pipe(sasslint.failOnError())
    .pipe(sass({
      outputStyle : 'expanded',
      precision   : 5
    }).on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('minify', function(){
  return gulp.src('./dist/sass-flexboxgrid.css')
    .pipe(cssmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./dist'));
});

gulp.task('default', gulp.parallel(gulp.series('styles', 'minify'),
  function () {
    return gulp.watch('./src/**/*.scss', gulp.series('styles', 'minify'))
  }
));


gulp.task('dist', gulp.series('styles', 'minify'));
