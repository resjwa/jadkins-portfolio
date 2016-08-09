var gulp = require('gulp');
var scss = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var cssnano = require('gulp-cssnano');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');

//Compile css
	gulp.task('scss', function(){
	    return gulp.src('app/scss/**/*.scss')
	    .pipe(scss().on('error', scss.logError))
	    .pipe(gulp.dest('app/css'))
	    .pipe(browserSync.reload({
	        stream: true
	    }))
	});

//Browser Sync
	gulp.task('browserSync', function() {
	    browserSync.init({
	        server: {
	            baseDir: 'app'
	        },
	    })
	})

//Concat js+css
	gulp.task('useref', function(){
	  return gulp.src('app/*.html')
	    .pipe(useref())
	    .pipe(gulpIf('*.js', uglify()))
	    .pipe(gulpIf('*.css', cssnano()))
	    .pipe(gulp.dest('dist'))
	});

//Optimize images
	gulp.task('images', function(){
	    return gulp.src('app/images/**/*.+(png|jpg|gif|svg|JPG)')
	    .pipe(cache(imagemin({
	        interlaced: true
	    })))
	    .pipe(gulp.dest('dist/images'))
	});

//Move fonts to dist dir
	gulp.task('fonts', function() {
		return gulp.src('app/fonts/**/*')
		.pipe(gulp.dest('dist/fonts'))
	})

// Gulp Tasks
//-------------------
	gulp.task('watch', ['browserSync'], function (){
		gulp.watch('app/scss/**/*.scss', ['scss']); 
	  	gulp.watch('app/*.html', browserSync.reload); 
	  	gulp.watch('app/js/**/*.js', browserSync.reload); 
	})
	