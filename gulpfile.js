var gulp = require('gulp');

gulp.task('copy-js', function(){
	gulp.src([
    'bower_components/bootstrap/dist/js/bootstrap.min.js',
    'bower_components/angular/angular.min.js',
    'bower_components/jquery/dist/jquery.min.js'
])
.pipe(gulp.dest('public/assets/js'));
});

gulp.task('copy-css', function(){
	gulp.src([
    'bower_components/bootstrap/dist/css/bootstrap.min.css',
    'bower_components/bootstrap/dist/css/bootstrap-theme.min.css'
])
.pipe(gulp.dest('public/assets/css'));
});

// Default Task
gulp.task('default', ['copy-js', 'copy-css']);