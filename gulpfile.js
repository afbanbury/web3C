// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint');
var nodemon = require('gulp-nodemon');

// JS hint task
gulp.task('jshint', function() {
  gulp.src('./src/scripts/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('server', function (cb) {
  
  return nodemon({ 
        script: './bin/www',
        env: { 'NODE_ENV': 'development' },
        nodeArgs: ['--debug']

          //ext: 'html js'
  });
});

//default
gulp.task('default', ['jshint', 'server'], function() {


});
 