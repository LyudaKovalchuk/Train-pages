/**
 * Created by lyuda on 27.06.16.
 */
var less = require('gulp-less');
var path = require('path');
var watch = require('gulp-watch');
var gulp = require('gulp');


gulp.task('less', function () {
    return gulp.src('./less/train2.less')
        .pipe(less({
            paths: [ path.join(__dirname, 'less') ]
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function() {
    gulp.watch('./less/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);
