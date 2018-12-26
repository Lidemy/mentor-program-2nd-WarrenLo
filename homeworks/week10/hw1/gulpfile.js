var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var babel = require('gulp-babel');
var minifyJS = require('gulp-minify');

//把 scss 編譯成 css
//把 css 壓縮
gulp.task('minifyScss', function(){
  return gulp.src('./scss/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(minifyCSS())
  .pipe(gulp.dest('./css'))
})

//把 js 用 babel 轉成 ES5 語法
//把 js 壓縮
gulp.task('babel_mini', function(){
  return gulp.src('./js/*.js')
  .pipe(babel({
    presets: ['@babel/env']
  }))
  .pipe(minifyJS())
  .pipe(gulp.dest('./babel'))
})

gulp.task('default', gulp.parallel('minifyScss', 'babel_mini'));
