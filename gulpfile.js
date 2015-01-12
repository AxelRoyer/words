var gulp = require('gulp');
var sass = require('gulp-sass');
var bourbon = require('bourbon');

var paths = {};

paths.styles = [
	'./style/*.scss'
];

paths.unitTests = [
	'tests/*-tests.js'
];

paths.jsFiles = [
	'sources/*.js'
];

gulp.task('sass-build', function () {
	gulp.src(paths.styles)
		.pipe(sass({
			includePaths: bourbon.includePaths
		}))
		.on("error", errorAlert)
		.pipe(gulp.dest('./style'));
});

gulp.task('sass-watch', function () {
	gulp.src(paths.styles)
		.on("error", errorAlert)
		.pipe(gulp.dest('./style'));
	gulp.watch(paths.styles, ['sass-build'])
});

function errorAlert (error) {
	console.log(error.message);
}