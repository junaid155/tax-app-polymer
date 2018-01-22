var gulp = require('gulp');
var copy = require('gulp-copy');
var vulcanize = require('gulp-vulcanize');
var sourceFiles = [  'index.html' ];
var clean = require('gulp-clean');


gulp.task('clean', function () {
    return gulp.src('dist', {read: false})
        .pipe(clean());
});

gulp.task('vulcanize', function() {
  return gulp.src('src/tax-app/tax-app.html')
    .pipe(vulcanize())
    .pipe(gulp.dest('dist/src/tax-app/'));
});

gulp.task('copy', function() {
    return gulp.src('index.html')
    .pipe(gulp.dest('dist/'));
  });

gulp.task('build', ['copy']);