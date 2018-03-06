var gulp = require('gulp');
var conventionalChangelog = require('gulp-conventional-changelog');
 
gulp.task('default', function () {
  return gulp.src('CHANGELOG.md', {
    read: false
  })
    .pipe(conventionalChangelog({
      preset: 'angular',
      releaseCount: 0
    }))
    .pipe(gulp.dest('./'));
});
gulp.task('changelog', function () {
    return gulp.src('CHANGELOG.md', {
      buffer: false
    })
      .pipe(conventionalChangelog({
        preset: 'angular'
      }))
      .pipe(gulp.dest('./'));
  });