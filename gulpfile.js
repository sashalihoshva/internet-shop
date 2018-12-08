'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
sass.compiler = require('node-sass');


gulp.task('styles', function () {
    return gulp.src('src/css/*.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        // .pipe(sass().on('error', sass.logError))
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('build/css/'));
});

gulp.task('css', function() {
    gulp.src('src/css/**/*.css')
        .pipe(gulp.dest('build/css/'));
})

gulp.task('views', function() {
    gulp.src('src/*.html')
        .pipe(gulp.dest('build/'));
})

gulp.task('img', function() {
    gulp.src('src/img/**/*.*')
        .pipe(gulp.dest('build/img/'));
})

gulp.task('scripts', function() {
    gulp.src('src/js/*.js')
        .pipe(gulp.dest('build/js/'));
})

gulp.task('build', ['styles', 'css', 'views', 'img', 'scripts']);

gulp.task('watch', ['build'], function() {
    gulp.watch('src/css/*.scss', ['styles']);
    gulp.watch('src/*.html', ['views']);
    gulp.watch('src/img/*.*', ['img']);
    gulp.watch('src/js/*.js', ['scripts']);
});