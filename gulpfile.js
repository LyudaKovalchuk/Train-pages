var less = require('gulp-less');
var gulp = require('gulp');
var path = require('path');
var watch = require('gulp-watch-less')

gulp.task('less', function () {
  return gulp.src('./less/freelancer.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest('./css'));
});
gulp.task('watch', function() {
    gulp.watch('./less/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);
