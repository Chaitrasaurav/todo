
const gulp = require('gulp'),
      watch = require('gulp-watch');
      rename = require('gulp-rename');
      sass = require('gulp-sass');
      spritesmith  = require('gulp.spritesmith');
 
gulp.task('sprite', function() {
  var spriteData = 
    gulp.src('app/css/sprites/*.*') // The way we take pictures for the sprite
      .pipe(spritesmith({
        imgName: 'sprite.png',
        cssName: '_sprite.scss',
        cssFormat: 'scss',
        algorithm: 'binary-tree',
        cssTemplate: 'sprite.template.mustache',
        cssVarMap: function(sprite) {
          sprite.name = 'ico--' + sprite.name
        }
      }));
  spriteData.img.pipe(gulp.dest('app/images/')); // Path where we save the picture
  spriteData.css.pipe(gulp.dest('app/css/components')); // Path where we save styles
});

/*eslint-disable */
gulp.task('sass', function () {
  return gulp.src('app/css/main.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(rename('productStyles.css'))
  .pipe(gulp.dest('app/build/css/'))
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest('app/build/css/'));
});

gulp.task('watch', function () {
    gulp.watch('app/css/**/*.scss', ['sass']);
});

gulp.task('default', ['sprite', 'sass']);