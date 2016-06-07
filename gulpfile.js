'use strict';

var gulp = require('gulp');
var del = require('del');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

gulp.task('clean', function() {
  return del('dist');
});

gulp.task('build', ['clean'], function() {
  gulp.src('src/angular-ngloading.js')
    .pipe(uglify({ preserveComments: 'all' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'))

  gulp.src('src/angular-ngloading.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('dist'));

  gulp.src('src/angular-ngloading.gif').pipe(gulp.dest('dist'));
});
