// include gulp
var gulp = require('gulp'); 

// include plug-ins
var jshint = require('gulp-jshint');
var jade = require('gulp-jade');
var nodemon = require('gulp-nodemon');

gulp.task('copy-js', function(){
	gulp.src([
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/jquery/dist/jquery.min.js'
])
.pipe(gulp.dest('./public/assets/js'));
});

gulp.task('copy-css', function(){
	gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
])
.pipe(gulp.dest('./public/assets/css'));
});

// JS hint task
gulp.task('jshint', function() {
  gulp.src([
    '*.js',
    './routes/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('jade', function(){
  gulp.src('./views/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./public/pages'));
  
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
gulp.task('default', ['copy-js', 'copy-css', 'jshint', 'server'], function() {
  
});

 