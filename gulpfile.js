var gulp = require('gulp');
var plugins = require("gulp-load-plugins")({
	lazy: false
});

var module = 'portfolio';

gulp.task('scripts', function() {
	// Combine all js files of the app
	gulp.src(['./app/scripts/**/*.js'])
		.pipe(plugins.jshint({
			lookup: true
		}))
		.pipe(plugins.jshint.reporter('default'))
		.pipe(plugins.concat('app.js'))
		.pipe(plugins.ngmin())
		.pipe(plugins.uglify())
		.pipe(gulp.dest('./build'));
});

gulp.task('css', function() {
	gulp.src('./app/stylesheets/**/*.scss')
		.pipe(plugins.sass())
		.pipe(plugins.concat('app.css'))
		.pipe(plugins.minifyCss())
		.pipe(gulp.dest('./build'));
});

gulp.task('templates', function() {
	// Combine all template files of the app into a js file
	gulp.src(['./app/views/**/*.html'])
		.pipe(plugins.angularTemplatecache('templates.js', {
			standalone: false,
			module: module
		}))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('./build'));
});

gulp.task('scripts-vendor', function() {
	// Concatenate vendor script files
	gulp.src([
		'!./bower_components/**/*.min.js',
		'!./bower_components/**/Gruntfile.js',
		'!./bower_components/**/gulpfile.js',

		'./bower_components/angular/**/*.js',
		'./bower_components/angular-route/**/*.js',
		'./bower_components/angular-sanitize/**/*.js',
		'./bower_components/angular-scroll/**/*.js',
		'./bower_components/angular-touch/**/*.js',

		'./bower_components/angular-strap/dist/modules/dimensions.js',
		'./bower_components/angular-strap/dist/modules/tooltip.js',
		'./bower_components/angular-strap/dist/modules/tooltip.tpl.js',

		'./bower_components/viewport-units-buggyfill/**/*.js'

	])
		.pipe(plugins.concat('lib.js'))
		.pipe(plugins.uglify())
		.pipe(gulp.dest('./build'));
});

gulp.task('css-vendor', function() {
	// Concatenate vendor css files
	gulp.src([
		'!./bower_components/**/*.min.css',
		'./bower_components/**/*.css',
		'./bower_components/bootstrap-sass-official/vendor/assets/stylesheets/bootstrap.scss'
	])
		.pipe(plugins.sass())
		.pipe(plugins.minifyCss())
		.pipe(plugins.concat('lib.css'))
		.pipe(gulp.dest('./build'));
});

gulp.task('fonts-vendor', function() {
	// Concatenate vendor css files
	gulp.src([
		'./bower_components/**/*.woff',
		'./bower_components/**/*.ttf',
		'./bower_components/**/*.svg',
		'./bower_components/**/*.eot'
	])
		.pipe(plugins.flatten())
		.pipe(gulp.dest('./build/fonts'));
});

gulp.task('copy', function() {
	gulp.src([
		'./app/index.html',
		'./app/robots.txt'
	])
		.pipe(gulp.dest('./build'));

	gulp.src([
		'./app/images/**/*.jpg',
		'./app/images/**/*.gif',
		'./app/images/**/*.png',
		'./app/images/**/*.svg'
	])
		.pipe(gulp.dest('./build/images'));
});

gulp.task('watch', function() {
	gulp.watch([
		'build/**/*.html',
		'build/**/*.js',
		'build/**/*.css'
	], function(event) {
		return gulp.src(event.path)
			.pipe(plugins.connect.reload());
	});

	gulp.watch(['./app/scripts/**/*.js'], ['scripts']);
	gulp.watch(['./app/views/**/*.html'], ['templates']);
	gulp.watch(['./app/views/**/_*.html'], ['templates']);
	gulp.watch('./app/stylesheets/**/*.scss', ['css']);
	gulp.watch([
		'./app/index.html',
		'./app/images/**/*.jpg',
		'./app/images/**/*.png'
	], ['copy']);

});

gulp.task('connect', plugins.connect.server({
	root: ['build'],
	port: 9000,
	livereload: true
}));

gulp.task('default', [
	'scripts',
	'css',
	'templates',
	'copy',
	'scripts-vendor',
	'css-vendor',
	'fonts-vendor',
	'watch',
	'connect'
]);